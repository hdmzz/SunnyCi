import Source from "./Source";
//https://wiki.openstreetmap.org/wiki/Map_features#Natural

const	OVERPASS_API = "https://overpass-api.de/api/interpreter";

class	OSMSource extends Source {
	constructor( center: [lat: number, lon: number], radius: number, type: string ) {
		super( center, radius, type, true );
		this.url = this.osmUrlBuilderCircle( type, center, radius );
	};

	//private	osmUrlBuilder( type: string, bbox: [number, number, number, number], output: string = "json", timeout: number = 30 ): string {
	//	let	query = `[out:${output}][timeout:${timeout}];`;
	//	let	b = `(${bbox[0]}, ${bbox[1]}, ${bbox[2]}, ${bbox[3]})`;

	//	if ( type === "building" ) {
	//		query +=	`(way["building"]${b};` +
	//					`relation["building"]["type"="multipolygon"]${b};` +
	//					`);`
	//	;}

	//	if ( type === "highway" ) {
	//		query +=	`(way["highway"]${b};` +
	//					`);`
	//	};

	//	if ( type === "water" ) {
	//		query +=	`(way["natural"="water"]${b};` +
	//					`relation["natural"="water"]${b};` +
	//					`way["waterway"]${b};` +
	//					`);`
	//	};

	//	if ( type === "tree" ) {
	//		query +=	`(node["natural"="tree"]${b};` +
	//					`);`;
	//	}

	//	query += 'out;>;out qt;'

	//	// encode and return whole url
	//	return ( OVERPASS_API + '?data=' + encodeURI( query ));
	//};

	private osmUrlBuilderCircle(
		type: string, 
		center: [number, number], // [latitude, longitude]
		radius: number, // en mètres
		output: string = "json", 
		timeout: number = 30
	): string 
	{
		let query = `[out:${output}][timeout:${timeout}];`;
		let around = `(around:${radius}, ${center[0]}, ${center[1]})`;
	
		if (type === "building") {
			query += `(way["building"]${around};` +
					 `relation["building"]["type"="multipolygon"]${around};` +
					 `);`;
		}
	
		if (type === "highway") {
			query += `(way["highway"]${around};` +
					 `);`;
		}
	
		if (type === "water") {
			query += `(way["natural"="water"]${around};` +
					 `relation["natural"="water"]${around};` +
					 `way["waterway"]${around};` +
					 `);`;
		}
	
		if (type === "tree") {
			query += `(node["natural"="tree"]${around};` +
					 `);`;
		}
	
		query += 'out;>;out qt;';
	
		// Encode et retourne l'URL complète
		return (OVERPASS_API + '?data=' + encodeURI(query));
	};
	
};

export default	OSMSource;
