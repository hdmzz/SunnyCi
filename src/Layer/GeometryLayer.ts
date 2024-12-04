import proj4 from "proj4";
import Source from "../Source/Source";

function convertLatLonToWebMercator(lat: number, lon: number): [number, number] {
	const webMercator = proj4('EPSG:4326', 'EPSG:3857', [lon, lat]);
	return [webMercator[0], webMercator[1]];
}

class GeometryLayer {
	source: Source;

	constructor( source: Source ) {
		this.source = source;
	};


};
