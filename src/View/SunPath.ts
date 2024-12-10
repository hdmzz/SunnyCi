import { getPosition } from 'suncalc';
import { DirectionalLight } from 'three';

class	SunPath {
	sunLight: DirectionalLight;
	date: Date;
	radius: number;
	sceneCenter: [lat: number, lon: number]

/**
 * radius is the radius of the trajectory of the sun not the radius of the bbox putaing!
 */
	constructor( radius: number = 5, sunLight: DirectionalLight, sceneCenter: [lat: number, lon: number]) {
		this.sunLight = sunLight;
		this.date = new Date(2024,11,9);
		this.date.setMonth( this.date.getMonth() );
		this.date.setHours( 7,30,0,0 );
		this.radius = radius;
		this.sceneCenter = sceneCenter;
		this.updateSunPosition();
	};

	getSunPosition( lat: number, lon: number ): [x: number, y:number, z: number] {
		const	sunPosition = getPosition( this.date, lat, lon );
		console.log( sunPosition );
		const	x = this.radius * ( Math.cos( sunPosition.altitude )) * ( Math.cos( sunPosition.azimuth ));
		const	z = this.radius * ( Math.cos( sunPosition.altitude )) * ( Math.sin( sunPosition.azimuth ));
		const	y = this.radius * ( Math.sin( sunPosition.altitude ));

		const rotatedX = -z;
		const rotatedZ = x;
		const rotatedY = y; // reste inchangé

		return [rotatedX, rotatedY, rotatedZ];
	};

	private	updateSunPosition() {
		const	sunPosition = this.getSunPosition( ...this.sceneCenter );
		this.sunLight.position.set( ...sunPosition );
	};
};

export default	SunPath;
