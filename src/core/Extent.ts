import proj4 from "proj4";
import Utils from "../Utils/geoUtils";

const	TILE_SIZE = 256;
const	INITIAL_RESOLUTION = 2 * Math.PI * 6378137 / TILE_SIZE;
const	ORIGIN_SHIFT = 2 * Math.PI * 6378137 / 2.0;

const	EPSG4326_INITIAL_RESOLUTION = 180 / TILE_SIZE;
const	EPSG3857_INITIAL_RESOLUTION = 2 * Math.PI * 6378137 / TILE_SIZE;


function	latLonToTileEPSG4326(lat: number, lon: number, zoom: number): { tileX: number, tileY: number } {
	const	resolution = EPSG4326_INITIAL_RESOLUTION / Math.pow(2, zoom); // Résolution pour le niveau de zoom donné
	const	tileX = Math.floor((lon + 180) / resolution / TILE_SIZE); // Indice de la tuile X
	const	tileY = Math.floor((90 - lat) / resolution / TILE_SIZE); // Indice de la tuile Y

	return { tileX, tileY };
};

function latLonToMeters( lat: number, lon: number ): { x: number, y: number }
{
	const	x = lon * ORIGIN_SHIFT / 180.0;
	const	y = Math.log( Math.tan(( 90 + lat ) * Math.PI / 360.0 )) / ( Math.PI / 180.0 );
	return { x, y: y * ORIGIN_SHIFT / 180.0 };
};

function	metersToTile( x: number, y: number, zoom: number ): { tileX: number, tileY: number }
{
	const	resolution = INITIAL_RESOLUTION / Math.pow(2, zoom); // Résolution pour le niveau de zoom donné
	const	pixelX = (x + ORIGIN_SHIFT) / resolution; // Coordonnée en pixels sur l'axe X
	const	pixelY = (ORIGIN_SHIFT - y) / resolution; // Coordonnée en pixels sur l'axe Y

	return {
		tileX: Math.floor( pixelX / TILE_SIZE ),
		tileY: Math.floor(pixelY / TILE_SIZE),
	};
};

export function	latLonToTile( lat: number, lon: number, zoom: number, tileMatrixSet: string ): { tileX: number, tileY: number }
{
	let	units;
	if ( tileMatrixSet === "PM" ) {
		units = latLonToMeters( lat, lon );
		return ( metersToTile( units.x as number, units.y as number, zoom ));
	} else {
		return ( latLonToTileEPSG4326( lat, lon, zoom ));
	};
};

const	WGS84 = "EPSG:4326";
const	WebMercator = "EPSG:3857";

function	reproject( lat: number, lon: number ): [number, number]
{
	return proj4( WGS84, WebMercator, [lon, lat] );
};

class	Extent {
	radius: number;
	origin: [lat: number, lon: number];
	bbox!: [minLon: number, minLat: number, maxLon: number, maxLat: number]; 
	epsg: string;
	centerWebMercator: [x: number, y: number];

	constructor( origin: [number, number], radius: number, epsg: string )
	{
		this.origin = origin;
		this.radius = radius;
		this.bbox = Utils.originRadiusToBbox( origin, radius );
		this.epsg = epsg;
		this.centerWebMercator = reproject( ...origin );
	};

	//avnt de lappeler elle il faut recuperer la bbox de la tuile
	static	bboxAsTile( bbox: { minLat: number, minLon: number, maxLat: number, maxLon: number }, zoom: number, epsg: string )
	{
		const { minTileCol, minTileRow, maxTileCol, maxTileRow } = Extent.bboxToTileCoords( bbox, zoom, epsg );
		const tiles = [];

		for (let tileCol = minTileCol; tileCol <= maxTileCol; tileCol++) {
			for (let tileRow = minTileRow; tileRow <= maxTileRow; tileRow++) {
				tiles.push({ zoom, tileCol, tileRow });
			};
		};

		return ( tiles );
	};

	/**
	* @param epsg tileMatrixSet PM || EPSG:4326 || EPSG:3847.....
	*/
	asTile( neighbors:boolean, epsg: string = this.epsg, zoom: number ): { zoom: number, tileCol: number, tileRow: number }[]
	{
		const { tileX, tileY } = latLonToTile( this.origin[0], this.origin[1], zoom, epsg );
		const tiles = [{ zoom: zoom, tileCol: tileX, tileRow: tileY }];

		if ( neighbors ) {
			const	bbox = Extent.tileToBBox( tileX, tileY, zoom );
			const	lonRange = bbox.maxLon - bbox.minLon;
			const	latRange = bbox.maxLat - bbox.minLat;
			const	lon = this.origin[1];
			const	lat = this.origin[0];

			const	relativeX = ( lon - bbox.minLon ) / lonRange;
			const	relativeY = ( lat - bbox.minLat ) / latRange;

			if ( relativeX < 0.5 && relativeY > 0.5 ) {
				// Coin supérieur gauche
				tiles.push({ zoom: zoom, tileCol: tileX - 1, tileRow: tileY });
				tiles.push({ zoom: zoom, tileCol: tileX - 1, tileRow: tileY - 1 });
				tiles.push({ zoom: zoom, tileCol: tileX, tileRow: tileY - 1 });
			} else if ( relativeX < 0.5 && relativeY <= 0.5 ) {
				// Coin inférieur gauche
				tiles.push({ zoom: zoom, tileCol: tileX - 1, tileRow: tileY });
				tiles.push({ zoom: zoom, tileCol: tileX - 1, tileRow: tileY + 1 });
				tiles.push({ zoom: zoom, tileCol: tileX, tileRow: tileY + 1 });
			} else if ( relativeX >= 0.5 && relativeY > 0.5 ) {
				// Coin supérieur droit
				tiles.push({ zoom: zoom, tileCol: tileX + 1, tileRow: tileY });
				tiles.push({ zoom: zoom, tileCol: tileX + 1, tileRow: tileY - 1 });
				tiles.push({ zoom: zoom, tileCol: tileX, tileRow: tileY - 1 });
			} else if ( relativeX >= 0.5 && relativeY <= 0.5 ) {
				// Coin inférieur droit
				tiles.push({ zoom: zoom, tileCol: tileX + 1, tileRow: tileY });
				tiles.push({ zoom: zoom, tileCol: tileX + 1, tileRow: tileY + 1 });
				tiles.push({ zoom: zoom, tileCol: tileX, tileRow: tileY + 1 });
			};
		};

		return ( tiles );
	};

	static bboxToTileCoords(bbox: { minLat: number, minLon: number, maxLat: number, maxLon: number }, zoom: number, epsg: string = "EPSG:4326"): { minTileCol: number, minTileRow: number, maxTileCol: number, maxTileRow: number } {
		const { tileX: minTileCol, tileY: maxTileRow } = latLonToTile(bbox.minLat, bbox.minLon, zoom, epsg);
		const { tileX: maxTileCol, tileY: minTileRow } = latLonToTile(bbox.maxLat, bbox.maxLon, zoom, epsg);

		return { minTileCol, minTileRow, maxTileCol, maxTileRow };
	};

	static	tileToBBox( tileCol: number, tileRow: number, zoom: number ): { minLat: number, minLon: number, maxLat: number, maxLon: number }
	{
		const	resolution = EPSG4326_INITIAL_RESOLUTION / Math.pow( 2, zoom );
		if ( tileCol === undefined || tileRow === undefined ) {
			throw new Error( "tileCol or tileRow is undefined" );
		};
		const	minLon = tileCol * resolution * TILE_SIZE - 180;
		const	maxLon = ( tileCol + 1 ) * resolution * TILE_SIZE - 180;
		const	minLat = 90 - ( tileRow + 1 ) * resolution * TILE_SIZE;
		const	maxLat = 90 - tileRow * resolution * TILE_SIZE;

		return { minLat, minLon, maxLat, maxLon };
	};

	static	tileToBBoxWebMercator( tileCol: number, tileRow: number, zoom: number )
	{
		const	resolution = EPSG3857_INITIAL_RESOLUTION / Math.pow( 2, zoom );
		if ( tileCol === undefined || tileRow === undefined ) {
			throw new Error( "tileCol or tileRow is undefined" );
		};
		const	minX = tileCol * resolution * TILE_SIZE - 20037508.3427892;
		const	maxX = ( tileCol + 1 ) * resolution * TILE_SIZE - 20037508.3427892;
		const	minY = 20037508.3427892 - ( tileRow + 1 ) * resolution * TILE_SIZE;
		const	maxY = 20037508.3427892 - tileRow * resolution * TILE_SIZE;

		return { minX, minY, maxX, maxY };
	};

	public	getProjectCoords( lat: number, lon: number ): [x: number, y: number]
	{
		const	[px, py] = reproject( lat, lon );
		const	x = px - this.centerWebMercator[0];
		const	y = - ( py - this.centerWebMercator[1] );

		return [ x, y ];
	};
};

export default	Extent;
