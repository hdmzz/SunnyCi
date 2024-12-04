import Source from "./Source";

abstract class WMSSource extends Source {
	constructor(  center: [lat: number, lon: number], radius: number, format: string) {
		super( center, radius, format );
	};

	abstract	wmsrColorUrlBuilder( radius: number, layerName: string, epsg: string, style: string ) : string;
};

export default	WMSSource;
