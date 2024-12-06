abstract class	Source {
	public	center: [lat: number, lon: number];
	public	radius: number;
	public	url: string | undefined;
	public	format: string;
	public	bbox: [minLat: number, minLon: number, maxLat: number, maxLon: number];

	constructor( center: [lat: number, lon: number], radius: number, format: string, bbox: boolean = false ) {
		this.radius = radius;
		this.center = center;
		if ( bbox === true ) {
			this.bbox  = this.generateBboxFromCenter( "EPSG:4326", center[0], center[1], radius );
		} else {
			this.bbox = [0, 0, 0, 0];
		};
		this.format = format;
	};
/* 
	genere une bbox compatible WMS protocol
 */
	public	generateBboxFromCenter(
		crs: string,
		centerLat: number,
		centerLon: number,
		radius: number
	): [number, number, number, number] {
		if ( crs === "EPSG:4326" ) {
			const	minLat = centerLat - radius;
			const	maxLat = centerLat + radius;
			const	minLon = centerLon - radius;
			const	maxLon = centerLon + radius;
	
			this.bbox = [minLat, minLon, maxLat, maxLon];

			return ( [minLat, minLon, maxLat, maxLon] );
		} else if ( crs === "EPSG:3857" ) {
			const	earthRadius = 6378137; // Rayon de la Terre en mètres pour EPSG:3857
			const	toRadians = (degrees: number) => (degrees * Math.PI) / 180;
			const	xCenter = (centerLon * earthRadius * Math.PI) / 180;
			const	yCenter = Math.log( Math.tan(( Math.PI / 4 ) + toRadians( centerLat ) / 2 )) * earthRadius;

			const	minLat = xCenter - radius;
			const	maxLat = xCenter + radius;
			const	minLon = yCenter - radius;
			const	maxLon = yCenter + radius;
			this.bbox = [minLat, minLon, maxLat, maxLon];

			return ( [minLat, minLon, maxLat, maxLon] );
		} else {
			throw new Error( `CRS non supporté : ${crs}` );
		};
	};
};

export default Source;
