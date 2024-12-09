import { getPosition } from 'suncalc';

class	SunPath {
	date: Date;
	radius: number;

	constructor( radius: number = 5 ) {
		this.date = new Date();
		this.date.setHours( this.date.getHours() );
		this.date.setMonth( this.date.getMonth() );
		this.radius = radius
	}

	getSunPosition() {

	};
}
