import Source from "./Source";
import WMSSource from "./WMSSource";
//https://data.geopf.fr/wms-r/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities
class	WMSRSource extends WMSSource {
	url: string;
	urlColor: string | undefined;
	format: string;

	constructor( center: [lat: number, lon: number], radius: number, opts: {format: string, requestType: string}) {
		super( center, radius, opts.format );
		this.format = opts.format;
		this.url = this.urlBuilder( opts.requestType );
	};

	public	urlBuilder( requestType: string ) {
		return ( this.wmsrUrlBuilder( ...this.center, requestType ));
	};

	private	wmsrUrlBuilder( lat: number, lon: number, _requestType: string ) {
		const	bbox = super.generateBboxFromCenter( "EPSG:4326", lat, lon, 0.02 );
		this.url = `https://data.geopf.fr/wms-r/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=ELEVATION.ELEVATIONGRIDCOVERAGE.SRTM3&STYLES=normal&CRS=EPSG:4326&BBOX=${bbox[0]},${bbox[1]},${bbox[2]},${bbox[3]}&WIDTH=512&HEIGHT=512&FORMAT=image/png`;

		return ( this.url );
	};
	
	public	wmsrColorUrlBuilder( radius: number = 0.01, layer: string = "HR.ORTHOIMAGERY.ORTHOPHOTOS", epsg: string = "EPSG:4326", styles: string = "normal" ) {//radius specifi la resolution plus elle est petite plus elle est bonne mais plus limage est petite
		const	bbox = super.generateBboxFromCenter( epsg, ...this.center, radius );
		this.urlColor = `https://data.geopf.fr/wms-r/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=${layer}&STYLES=${styles}&CRS=${epsg}&BBOX=${bbox[0]},${bbox[1]},${bbox[2]},${bbox[3]}&WIDTH=512&HEIGHT=512&FORMAT=image/png`;

		return ( this.urlColor );
	};
};

export default	WMSRSource;
