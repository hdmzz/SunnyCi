import Source from "./Source";

abstract class	TileSource extends Source {
	tileRow: number;
	tileCol: number;
	zoom: number;
	tileMatrixSet: string


	constructor(  center: [lat: number, lon: number], radius: number, format: string, zoom: number, tileMatrixSet: string ) {
		super( center, radius, format );
		this.zoom = zoom;
		this.tileMatrixSet = tileMatrixSet ? tileMatrixSet : "PM";
		const	{ tileX, tileY } = latLonToTile( ...this.center, this.zoom, this.tileMatrixSet );
		this.tileCol = tileX;
		this.tileRow = tileY;
	};
};

export default	TileSource;

// Définition des constantes et des fonctions nécessaires
const TILE_SIZE = 256; // Taille des tuiles en pixels
const INITIAL_RESOLUTION = 2 * Math.PI * 6378137 / TILE_SIZE; // Résolution initiale à zoom 0
const ORIGIN_SHIFT = 2 * Math.PI * 6378137 / 2.0; // Décalage pour EPSG:3857

const EPSG4326_TILE_SIZE = 256; // Taille des tuiles en pixels pour EPSG:4326
const EPSG4326_INITIAL_RESOLUTION = 180 / EPSG4326_TILE_SIZE; // Résolution initiale à zoom 0 pour EPSG:4326

function	latLonToTileEPSG4326(lat: number, lon: number, zoom: number): { tileX: number, tileY: number } {
	const	resolution = EPSG4326_INITIAL_RESOLUTION / Math.pow(2, zoom); // Résolution pour le niveau de zoom donné
	const	tileX = Math.floor((lon + 180) / resolution / EPSG4326_TILE_SIZE); // Indice de la tuile X
	const	tileY = Math.floor((90 - lat) / resolution / EPSG4326_TILE_SIZE); // Indice de la tuile Y
	return { tileX, tileY };
}

/**
 * Convertit une latitude et une longitude en coordonnées Mercator (EPSG:3857).
 * @param lat Latitude en degrés.
 * @param lon Longitude en degrés.
 * @returns Un objet avec les coordonnées x et y en mètres.
 */
function latLonToMeters(lat: number, lon: number): { x: number, y: number } {
	const x = lon * ORIGIN_SHIFT / 180.0;
	const y = Math.log(Math.tan((90 + lat) * Math.PI / 360.0)) / (Math.PI / 180.0);
		return { x, y: y * ORIGIN_SHIFT / 180.0 };
}

/**
 * Convertit les coordonnées en mètres en indices de tuile.
 * @param x Mètre X dans EPSG:3857.
 * @param y Mètre Y dans EPSG:3857.
 * @param zoom Niveau de zoom.
 * @returns Les indices de la tuile x et y.
 */
function metersToTile(x: number, y: number, zoom: number): { tileX: number, tileY: number } {
	const resolution = INITIAL_RESOLUTION / Math.pow(2, zoom); // Résolution pour le niveau de zoom donné
	const pixelX = (x + ORIGIN_SHIFT) / resolution; // Coordonnée en pixels sur l'axe X
	const pixelY = (ORIGIN_SHIFT - y) / resolution; // Coordonnée en pixels sur l'axe Y
	return {
		tileX: Math.floor(pixelX / TILE_SIZE), // Indice de la tuile X
		tileY: Math.floor(pixelY / TILE_SIZE)  // Indice de la tuile Y
	};
}

/**
 * Calcule les indices de la tuile WMTS pour une latitude, une longitude et un niveau de zoom donnés.
 * @param lat Latitude en degrés.
 * @param lon Longitude en degrés.
 * @param zoom Niveau de zoom.
 * @returns Les indices de la tuile x et y.
 */
function latLonToTile( lat: number, lon: number, zoom: number, tileMatrixSet: string ): { tileX: number, tileY: number } {
	let	units;
	if ( tileMatrixSet === "PM" ) {
		units = latLonToMeters(lat, lon); // Conversion de latitude/longitude en mètres
		return metersToTile( units.x as number, units.y as number, zoom ); // Conversion des mètres en indices de tuile
	} else {
		return ( latLonToTileEPSG4326( lat, lon, zoom ) );
	};
};
