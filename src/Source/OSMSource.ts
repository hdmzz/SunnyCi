import Source from "./Source";
//https://wiki.openstreetmap.org/wiki/Map_features#Natural

const	OVERPASS_API = "https://overpass-api.de/api/interpreter";

class	OSMSource extends Source {
	constructor( center: [lat: number, lon: number], radius: number, type: string )
	{
		super( center, radius, type );
		this.url = this.osmUrlBuilderCircle( type, center, 500 );
	};

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
