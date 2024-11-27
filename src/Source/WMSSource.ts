import { BoundingBox } from "../HugoGeo";
//https://data.geopf.fr/wms-r/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities
class	WMSSource {
	center: [lat: number, lon: number];
	radius: number;
	url: string | undefined;
	urlColor: string | undefined;
	format: string;

	constructor( center: [lat: number, lon: number], radius: number, opts: {format: string, requestType: string}) {
		this.radius = radius;
		this.center = center;
		this.url = this.urlBuilder( opts.requestType );
		this.format = opts.format;
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
		// Pour EPSG:4326, le rayon est en degrés (approximation pour de petites distances).
		const	minLat = centerLat - radius;
		const	maxLat = centerLat + radius;
		const	minLon = centerLon - radius;
		const	maxLon = centerLon + radius;
	
		// Retourne dans l'ordre [minY, minX, maxY, maxX] pour EPSG:4326
		return ( [minLat, minLon, maxLat, maxLon] );
		} else if ( crs === "EPSG:3857" ) {
		// Pour EPSG:3857, le rayon est en mètres. Conversion nécessaire pour les coordonnées.
		const	earthRadius = 6378137; // Rayon de la Terre en mètres pour EPSG:3857
		const	toRadians = (degrees: number) => (degrees * Math.PI) / 180;
		const	toDegrees = (radians: number) => (radians * 180) / Math.PI;
	
		// Conversion de latitude et longitude en coordonnées EPSG:3857
		const	xCenter = (centerLon * earthRadius * Math.PI) / 180;
		const	yCenter = Math.log( Math.tan(( Math.PI / 4 ) + toRadians( centerLat ) / 2 )) * earthRadius;
	
		// Calcul des limites en EPSG:3857
		const	minX = xCenter - radius;
		const	maxX = xCenter + radius;
		const	minY = yCenter - radius;
		const	maxY = yCenter + radius;
	
		// Retourne dans l'ordre [minX, minY, maxX, maxY] pour EPSG:3857
		return ( [minX, minY, maxX, maxY] );
		} else {
		throw new Error( `CRS non supporté : ${crs}` );
		}
	}

	public	urlBuilder( requestType: string ) {
		return ( this.wmsUrlBuilder( ...this.center, requestType ));
	};

	private	wmsUrlBuilder( lat: number, lon: number, _requestType: string ) {
		const	bbox = this.generateBboxFromCenter( "EPSG:4326", lat, lon, 0.01 );
		this.url = `https://data.geopf.fr/wms-r/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES&STYLES=normal&CRS=EPSG:4326&BBOX=${bbox[0]},${bbox[1]},${bbox[2]},${bbox[3]}&WIDTH=512&HEIGHT=512&FORMAT=image/png`;

		return ( this.url );
	};
	
	public	wmsColorUrlBuilder( radius: number = 0.01 ) {//radius specifi la resolution plus elle est petite plus elle est bonne mais plus limage est petite
		const	bbox = this.generateBboxFromCenter( "EPSG:4326", ...this.center, radius );
		this.urlColor = `https://data.geopf.fr/wms-r/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=HR.ORTHOIMAGERY.ORTHOPHOTOS&STYLES=normal&CRS=EPSG:4326&BBOX=${bbox[0]},${bbox[1]},${bbox[2]},${bbox[3]}&WIDTH=512&HEIGHT=512&FORMAT=image/png`;

		return ( this.urlColor );
	};
};

export default	WMSSource;
