import turf from "turf";

class	WFSSource {
	center: [lat: number, lon: number];
	radius: number;

	constructor( center: [lat: number, lon: number], radius: number ) {
		this.center = center;
		this.radius = radius;
	};

	public	wfsUrlBuilder( lat: number, lon: number, zoom: number = 18 ) {

	};
	public	createMultipolygonFromPoint() {
		const	radiusMeters = this.radius * 1000;
		const	centerPoint = turf.point([this.center[1], this.center[0]]);//lon lat
		const	buffer = turf.buffer(centerPoint, radiusMeters, "meters");
		//console.log(buffer);

		const	bbox = turf.bbox(buffer);

		return ( bbox );
	};
};

export default	WFSSource;
