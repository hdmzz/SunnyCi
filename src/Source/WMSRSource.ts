import WMSSource from "./WMSSource";
//https://data.geopf.fr/wms-r/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities
class	WMSRSource extends WMSSource {
	url: string | undefined;
	urlColor: string | undefined;

	constructor( center: [lat: number, lon: number], radius: number, opts: {format: string, requestType: string}) {
		super( center, radius, opts );
		this.url = this.urlBuilder( opts.requestType );
	};

	public	urlBuilder( requestType: string ) {
		return ( this.wmsrUrlBuilder( ...this.center, requestType ));
	};

	private	wmsrUrlBuilder( lat: number, lon: number, _requestType: string ) {
		const	bbox = super.generateBboxFromCenter( "EPSG:4326", lat, lon, 0.01 );
		this.url = `https://data.geopf.fr/wms-r/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES&STYLES=normal&CRS=EPSG:4326&BBOX=${bbox[0]},${bbox[1]},${bbox[2]},${bbox[3]}&WIDTH=512&HEIGHT=512&FORMAT=image/png`;

		return ( this.url );
	};
	
	public	wmsrColorUrlBuilder( radius: number = 0.01 ) {//radius specifi la resolution plus elle est petite plus elle est bonne mais plus limage est petite
		const	bbox = super.generateBboxFromCenter( "EPSG:4326", ...this.center, radius );
		this.urlColor = `https://data.geopf.fr/wms-r/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=HR.ORTHOIMAGERY.ORTHOPHOTOS&STYLES=normal&CRS=EPSG:4326&BBOX=${bbox[0]},${bbox[1]},${bbox[2]},${bbox[3]}&WIDTH=512&HEIGHT=512&FORMAT=image/png`;

		return ( this.urlColor );
	};
};

export default	WMSRSource;
