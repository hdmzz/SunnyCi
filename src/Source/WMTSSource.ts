//https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities
class	WMTSSource {
	center: [lat: number, lon: number];
	radius: number;
	url: string;
	heightNeighborsCoordinates: { tileX: number, tileY: number }[];
	layer: string
	format: string
	style: string
	tileMatrixSet: string
	zoom: number

	constructor( center: [lat: number, lon: number], radius: number, opts: {
		layer: string;
		format: string;
		style: string;
		tileMatrixSet: string;
		zoom: number;
	} ) {
		this.center = center;
		this.radius = radius;
		this.url = "";
		this.heightNeighborsCoordinates = [];
		this.layer = opts.layer ? opts.layer : "HR.ORTHOIMAGERY.ORTHOPHOTOS";
		this.format = opts.format ? opts.format : "image/jpeg";
		this.style = opts.style ? opts.style : "normal";
		this.tileMatrixSet = opts.tileMatrixSet ? opts.tileMatrixSet : "PM";
		this.zoom = opts.zoom ? opts.zoom : 8;

		this.wmtsUrlBuilder();
	};
	//!tile row = y tile col = x
	private	getNeighborsCoordinates( originaleTileRow: number, originaleTileCol: number ): { tileX: number, tileY: number }[] {
		const	neighborsTile: { tileX: number, tileY: number }[] = [];

		
		for ( let dx = -1; dx <= 1; dx++ ) {
			console.log(dx);
			for ( let dy = -1; dy <= 1; dy++ ) {
				if ( dx === 0 && dy === 0 ) continue; //original tile coordinate ~~~
				const	tileX = originaleTileCol + dx;
				const	tileY = originaleTileRow + dy;

				neighborsTile.push({ tileX, tileY });
			};
		};

		return ( neighborsTile );
	};

//! Pour la donnees d'elevation il n'est pas necessaire de connaitre les 8 connected tiles, le filtre peux se faire avec le format, en effet les donnees d'elevation sont au format x-bil 32 bits et JAMAIS en jpeg ou png
	public	wmtsUrlBuilder() {
		const	{ tileX, tileY } = latLonToTile( ...this.center, this.zoom );

		if ( this.format === "image/jpeg" ) {
			this.heightNeighborsCoordinates = this.getNeighborsCoordinates(tileY, tileX);
			console.log( this.heightNeighborsCoordinates );
		};
		this.url = `https://data.geopf.fr/wmts?LAYER=${this.layer}&FORMAT=${this.format}&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&STYLE=${this.style}&TILEMATRIXSET=${this.tileMatrixSet}&TILEMATRIX=${this.zoom}&TILEROW=${tileY}&TILECOL=${tileX}`;
		console.log( this.url );
		return ( this.url );
	};

};

export default	WMTSSource;
// Définition des constantes et des fonctions nécessaires
const TILE_SIZE = 256; // Taille des tuiles en pixels
const INITIAL_RESOLUTION = 2 * Math.PI * 6378137 / TILE_SIZE; // Résolution initiale à zoom 0
const ORIGIN_SHIFT = 2 * Math.PI * 6378137 / 2.0; // Décalage pour EPSG:3857

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
function latLonToTile(lat: number, lon: number, zoom: number): { tileX: number, tileY: number } {
	const meters = latLonToMeters(lat, lon); // Conversion de latitude/longitude en mètres
	return metersToTile(meters.x, meters.y, zoom); // Conversion des mètres en indices de tuile
};
