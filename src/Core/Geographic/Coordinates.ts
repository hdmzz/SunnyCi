import proj4 from 'proj4';
import { materialClearcoatRoughness, sin } from 'three/webgpu';

// Define projections (do this once, perhaps in the constructor)

function	mercatorProjection( lat: number, lon: number ): { x: number, y: number } {//un peu lourd a faire a chaque fois, politique de memoization , cache ou Wasm
	const	mercator = { x: 0, y: 0 };
	const	earthRad = 6378.137;
	const	a = lat * Math.PI * 180;

	mercator.x = lon * Math.PI / 180 * earthRad;
	mercator.y = earthRad / 2 * Math.log(( 1.0 + Math.sin( a ) ) / ( 1.0 - Math.sin( a ) ));

	return ( mercator );
};

interface	WorldType {
	x: number;
	y: number;
	z: number;
};

interface	CenterType {
	lon: number;
	lat: number;
}

class	GPSCoordinates {
	public	lat: number;
	public	lon: number;
	public	alt: number;

	constructor( lat: number, lon: number, alt: number ) {
		this.lat = lat;
		this.lon = lon;
		this.alt = alt;
	};
}

class	Coordinates {
	public	world: WorldType | undefined;
	public	gps: GPSCoordinates | undefined;
	public	center: CenterType;
	public	scale: number;

	constructor( type: string, coords:{ lat: number, lon: number, alt?: number } ) {
		if ( type === 'GPS' ) {
			this.world = { x: 0, y: 0, z: 0 };
			this.gps = new GPSCoordinates( coords.lat, coords.lon, coords.alt ?? 0 );
		} else {
			this.world = { x: 0, y: 0, z: 0 };
			this.gps = new GPSCoordinates( coords.lat, coords.lon, coords.alt ?? 0 );
		};

		this.center = { lon: 2.294351, lat: 48.858844 };
		this.scale = 1;
	};

	/**
	*Calcule la coordonnée mondiale en fonction de la coordonnée GPS et de la coordonnée centrale.
	*La coordonnée mondiale est calculée en projetant la coordonnée GPS et la coordonnée centrale à la projection
	*mondiale, puis en calculant la différence entre elles à l'échelle actuelle.
	*L'altitude des coordonnées GPS est également stockée dans les coordonnées mondiales.
	*@returns {this} The current Coordinates instance.
	*/
	computeWorldCoordinate(): Coordinates {
		const	threeWorld = mercatorProjection( this.gps?.lat as number, this.gps?.lon as number );
		const	center = mercatorProjection( this.center.lat, this.center.lon );

		if ( this.world ) {
			this.world.x = ( center.x - threeWorld.x ) * this.scale;
			this.world.z = ( center.y - threeWorld.y ) * this.scale;
			this.world.y = this.gps?.alt ?? 0;
		};

		return ( this );
	};
};

export default ( Coordinates );
