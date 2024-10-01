interface GeoJSON {
	type: string;
	features: Feature[];
}

interface Feature {
	type: string;
	properties: Properties;
	geometry: Geometry;
}

interface Properties {
	type: string;
	id: number;
	tags: Tags;
}

interface Tags {
"addr:city": string;
building: string;
"building:levels": string;
name: string;
"name:ko": string;
opening_hours: string;
operator: string;
shop: string;
"toilets:wheelchair": string;
wheelchair: string;
}

interface Geometry {
	type: string;
	coordinates: number[][][];
}
