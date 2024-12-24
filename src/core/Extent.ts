import proj4 from "proj4";
import Utils from "../Utils/geoUtils";

const	TILE_SIZE = 256;
const	INITIAL_RESOLUTION = 2 * Math.PI * 6378137 / TILE_SIZE;
const	ORIGIN_SHIFT = 2 * Math.PI * 6378137 / 2.0;

const	EPSG4326_TILE_SIZE = 256;
const	EPSG4326_INITIAL_RESOLUTION = 180 / EPSG4326_TILE_SIZE;

function	latLonToTileEPSG4326(lat: number, lon: number, zoom: number): { tileX: number, tileY: number } {
	const	resolution = EPSG4326_INITIAL_RESOLUTION / Math.pow(2, zoom); // Résolution pour le niveau de zoom donné
	const	tileX = Math.floor((lon + 180) / resolution / EPSG4326_TILE_SIZE); // Indice de la tuile X
	const	tileY = Math.floor((90 - lat) / resolution / EPSG4326_TILE_SIZE); // Indice de la tuile Y

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

export function latLonToTile( lat: number, lon: number, zoom: number, tileMatrixSet: string ): { tileX: number, tileY: number }
{
	let	units;
	if ( tileMatrixSet === "PM" ) {
		units = latLonToMeters(lat, lon); // Conversion de latitude/longitude en mètres
		return metersToTile( units.x as number, units.y as number, zoom ); // Conversion des mètres en indices de tuile
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
	zoom: number;
	epsg: string;
	centerWebMercator: [x: number, y: number];

	constructor( origin: [number, number], radius: number, zoom: number, epsg: string )
	{
		this.origin = origin;
		this.radius = radius;
		this.bbox = Utils.originRadiusToBbox( origin, radius );
		this.zoom = zoom;
		this.epsg = epsg;
		this.centerWebMercator = reproject( ...origin );
	};

	asTile()
	{
		const	topLeft = latLonToTile( this.bbox[3], this.bbox[0], this.zoom, this.epsg );
		const	bottomRight = latLonToTile( this.bbox[1], this.bbox[2], this.zoom, this.epsg );
		let		tileCoordinate: {zoom: number, tileCol: number, tileRow: number }[] = [];
		console.log( topLeft, bottomRight);
		for ( let x = topLeft.tileX; x < bottomRight.tileX; x++ ) {
			for ( let y = topLeft.tileY; y < bottomRight.tileY; y++ ) {
				tileCoordinate.push({ zoom: this.zoom, tileCol: x, tileRow: y });
			};
		};

		return ( tileCoordinate );
	};

	/**
	 * methode static pour retrouver la bbox d'une tile au cas ou on en ai besoin,
	 * uniquement utiisee pour le develepomment et le test de certaine fonctionalitees
	 */
	static	tileToBBox( tileCol: number, tileRow: number, zoom: number ): { minLat: number, minLon: number, maxLat: number, maxLon: number }
	{
		const resolution = EPSG4326_INITIAL_RESOLUTION / Math.pow( 2, zoom );
		if (tileCol === undefined || tileRow === undefined) {
			throw new Error("tileCol or tileRow is undefined");
		};
		const minLon = tileCol * resolution * EPSG4326_TILE_SIZE - 180;
		const maxLon = (tileCol + 1) * resolution * EPSG4326_TILE_SIZE - 180;
		const minLat = 90 - (tileRow + 1) * resolution * EPSG4326_TILE_SIZE;
		const maxLat = 90 - tileRow * resolution * EPSG4326_TILE_SIZE;
		return { minLat, minLon, maxLat, maxLon };
	}

	public	getProjectCoords( lat: number, lon: number ): [x: number, y: number]
	{
		const	[px, py] = reproject( lat, lon );
		const	x = px - this.centerWebMercator[0];
		const	y = - (py - this.centerWebMercator[1]);

		return [ x, y ];
	};
};

export default Extent;
