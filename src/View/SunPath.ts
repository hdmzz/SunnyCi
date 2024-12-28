import { getPosition } from 'suncalc';
import { DirectionalLight } from 'three';

class	SunPath {
	sunLight: DirectionalLight;
	date: Date;
	radius: number;
	sceneCenter: [lat: number, lon: number]
	params: { minute: number; hour: number; day: number; month: number; radius: number; };//en modifiant params qui est passe en argument  sun path je devrais pouvoir modifier l'heure depuis le GUI de la view

/**
 * radius is the radius of the trajectory of the sun not the radius of the bbox putaing!
 */
	constructor( params: { minute: number; hour: number; day: number; month: number; radius: number; }, sunLight: DirectionalLight, sceneCenter: [lat: number, lon: number]) {
		this.params = params;
		this.sunLight = sunLight;
		this.date = new Date();
		this.date.setMonth( params.month );
		this.date.setHours( params.hour );
		this.radius = params.radius;
		this.sceneCenter = sceneCenter;
		this.updateSunPosition();
	};

	getSunPosition( lat: number, lon: number, _delta: number = 0 ): [x: number, y:number, z: number] {
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

	public	updateHour() {
		this.date.setHours( this.params.hour );
		this.date.setMinutes( this.params.minute );
		this.updateSunPosition();
	};
	public	updateMonth() {
		this.date.setMonth( this.params.month - 1 );
		this.date.setDate( this.params.day );
		this.updateSunPosition();
	};
};

export default	SunPath;
