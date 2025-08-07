import proj4 from "proj4";

const	ORIGIN_SHIFT = 2 * Math.PI * 6378.137 / 2.0; // Décalage pour EPSG:3857
const WGS84 = "EPSG:4326"; // Coordonnées géographiques (latitude, longitude)
const WebMercator = "EPSG:3857";

/**
 * Convertit une latitude et une longitude en coordonnées Mercator (EPSG:3857).
 * @param lat Latitude en degrés.
 * @param lon Longitude en degrés.
 * @returns Un objet avec les coordonnées x et y en mètres.
 */
export function	latLonToMeters(lat: number, lon: number): { x: number, y: number } {
	const	x = lon * ORIGIN_SHIFT / 180.0;
	const	y = Math.log(Math.tan((90 + lat) * Math.PI / 360.0)) / (Math.PI / 180.0);
	return { x, y: y * ORIGIN_SHIFT / 180.0 };
}

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
	private gps: GPSCoordinate;
	scale: number;
	center?: { latitude: number, longitude: number };
	lat: number;
	lon: number;

	constructor ( coor: { latitude: number, longitude: number, altitude: number }, center?: [number, number] ) {
		this.world = { x: 0, y: 0, z: 0 };
		this.gps = new GPSCoordinate( coor.latitude, coor.longitude, coor.altitude );
		this.scale = 100;
		if (center) {
			this.center = {latitude: center![0], longitude: center![1] };
		}
		this.lat = coor.latitude;
		this.lon = coor.longitude;
	};

	/**
	 * Compute GPS/WGS84 Coordinate to Threejs World Postion Relatively to Center Coordinate
	 * @public
	 */

	ComputeWorldCoordinate () {
		if (!this.center) return;
		const	obj = latLonToMeters( this.gps.latitude, this.gps.longitude );

		const	center = latLonToMeters(this.center.latitude, this.center.longitude);
		this.world.x = ( center.x - obj.x ) * this.scale;
		this.world.y = ( center.y - obj.y ) * this.scale;
		this.world.z = this.gps.altitude;

		return ( this );
	};

	project() {
		const [x, y] = proj4(WGS84, WebMercator, [this.lon, this.lat]);

		return ({x, y});
	}
};
