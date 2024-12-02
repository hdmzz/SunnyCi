abstract class	Source {
	center: [lat: number, lon: number];
	radius: number;
	url: string | undefined;
	format: string;
	public  bbox: [minLat: number, minLon: number, maxLat: number, maxLon: number];

	constructor( center: [lat: number, lon: number], radius: number, format: string ) {
		this.radius = radius;
		this.center = center;
		this.bbox = [0, 0, 0, 0];
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
			// Pour EPSG:4326, le rayon est en degrés (approximation pour de petites distances).
			const	minLat = centerLat - radius;
			const	maxLat = centerLat + radius;
			const	minLon = centerLon - radius;
			const	maxLon = centerLon + radius;
	
		// Retourne dans l'ordre [minY, minX, maxY, maxX] pour EPSG:4326
		this.bbox = [minLat, minLon, maxLat, maxLon];
		return ( [minLat, minLon, maxLat, maxLon] );
		} else if ( crs === "EPSG:3857" ) {
			// Pour EPSG:3857, le rayon est en mètres. Conversion nécessaire pour les coordonnées.
			const	earthRadius = 6378137; // Rayon de la Terre en mètres pour EPSG:3857
			const	toRadians = (degrees: number) => (degrees * Math.PI) / 180;

			// Conversion de latitude et longitude en coordonnées EPSG:3857
			const	xCenter = (centerLon * earthRadius * Math.PI) / 180;
			const	yCenter = Math.log( Math.tan(( Math.PI / 4 ) + toRadians( centerLat ) / 2 )) * earthRadius;
		
			// Calcul des limites en EPSG:3857
			const	minLat = xCenter - radius;
			const	maxLat = xCenter + radius;
			const	minLon = yCenter - radius;
			const	maxLon = yCenter + radius;
		
			// Retourne dans l'ordre [minX, minY, maxX, maxY] pour EPSG:3857
			this.bbox = [minLat, minLon, maxLat, maxLon];
			return ( [minLat, minLon, maxLat, maxLon] );
		} else {
			throw new Error( `CRS non supporté : ${crs}` );
		};
	};

	abstract wmsrColorUrlBuilder( radius: number, layerName: string, epsg: string, style: string ) : string;

};

export default Source;
