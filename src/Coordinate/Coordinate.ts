function mercator(lat: number, lon: number) {
	const mercator = { x: 0, y: 0 };
	const earthRad = 6378.137; // WGS84 spheroid radius in meters
	const a = lat * Math.PI / 180;

	mercator.x = lon * Math.PI / 180 * earthRad;
	mercator.y = earthRad * Math.log(Math.tan((Math.PI / 4) + (a / 2)));

	return mercator;
};

const	TILE_SIZE = 256; // Taille des tuiles en pixels
const	INITIAL_RESOLUTION = 2 * Math.PI * 6378137 / TILE_SIZE; // Résolution initiale à zoom 0
const	ORIGIN_SHIFT = 2 * Math.PI * 6378.137 / 2.0; // Décalage pour EPSG:3857

/**
 * Convertit une latitude et une longitude en coordonnées Mercator (EPSG:3857).
 * @param lat Latitude en degrés.
 * @param lon Longitude en degrés.
 * @returns Un objet avec les coordonnées x et y en mètres.
 */
function	latLonToMeters(lat: number, lon: number): { x: number, y: number } {
	const	x = lon * ORIGIN_SHIFT / 180.0;
	const	y = Math.log(Math.tan((90 + lat) * Math.PI / 360.0)) / (Math.PI / 180.0);
	return { x, y: y * ORIGIN_SHIFT / 180.0 };
}

//function	mercator( lat: number, lon: number ) {
//	const	mercator = { x: 0, y: 0 };
//	const	earthRad = 6378.137;
//	const	a = lat * Math.PI / 180;

//	mercator.x = lon * Math.PI / 180 * earthRad;
//	mercator.y = earthRad / 2 * Math.log((1.0 + Math.sin(a)) / (1.0 - Math.sin(a)));
	
//	return ( mercator );
//};

class GPSCoordinate {
	latitude: number;
	longitude: number;
	altitude: number;

	constructor (latitude: number, longitude: number, altitude: number) {
		this.latitude = latitude;
		this.longitude = longitude;
		this.altitude = altitude;
	}
};

export class Coordinate {
	world: { x: number, y: number, z: number };
	gps: GPSCoordinate;
	scale: number;
	center: { latitude: number, longitude: number };

	constructor ( coor: { latitude: number, longitude: number, altitude: number }, center: [number, number] ) {
		this.world = { x: 0, y: 0, z: 0 };
		this.gps = new GPSCoordinate( coor.latitude, coor.longitude, coor.altitude );
		this.scale = 100;
		this.center = {latitude: center[0], longitude: center[1] };
	};

/**
	 * Compute GPS/WGS84 Coordinate to Threejs World Postion Relatively to Center Coordinate
	 * @public
	 */

	ComputeWorldCoordinate () {
		const	obj = latLonToMeters( this.gps.latitude, this.gps.longitude );

		const	center = latLonToMeters(this.center.latitude, this.center.longitude);
		this.world.x = ( center.x - obj.x ) * this.scale;
		this.world.y = ( center.y - obj.y ) * this.scale;
		this.world.z = this.gps.altitude;

		return ( this );
	};
};
