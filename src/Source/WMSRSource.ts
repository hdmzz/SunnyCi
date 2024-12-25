import Source from "./Source";
//https://data.geopf.fr/wms-r/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities
class	WMSRSource extends Source {
	url: string | undefined;
	urlColor: string | undefined;
	format: string;

	constructor( center: [lat: number, lon: number], radius: number, opts: { format: string, epsg: string, style: string, layer: string }) {
		super( center, radius, opts.format );
		this.format = opts.format;
		this.url = this.urlBuilder( opts.epsg, opts.layer, opts.style, opts.format );
	};

	public	urlBuilder( epsg: string, layer: string, style: string, format: string ) {
		return ( this.wmsrUrlBuilder( ...this.center, epsg, layer, style, format ));
	};

	private	wmsrUrlBuilder( lat: number, lon: number, epsg: string, layer: string, style: string, format: string ) {
		const	bbox = super.generateBboxFromCenter( epsg, lat, lon, 0.05);
		this.url = `https://data.geopf.fr/wms-r/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=${layer}&STYLES=${style}&CRS=${epsg}&BBOX=${bbox[0]},${bbox[1]},${bbox[2]},${bbox[3]}&WIDTH=512&HEIGHT=512&FORMAT=${format}`;

		return ( this.url );
	};
	
	public	wmsrColorUrlBuilder( radius: number = 0.01, layer: string = "HR.ORTHOIMAGERY.ORTHOPHOTOS", epsg: string = "EPSG:4326", styles: string = "normal" ) {//radius specifi la resolution plus elle est petite plus elle est bonne mais plus limage est petite
		const	bbox = super.generateBboxFromCenter( epsg, ...this.center, radius );
		this.urlColor = `https://data.geopf.fr/wms-r/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=${layer}&STYLES=${styles}&CRS=${epsg}&BBOX=${bbox[0]},${bbox[1]},${bbox[2]},${bbox[3]}&WIDTH=512&HEIGHT=512&FORMAT=image/png`;

		return ( this.urlColor );
	};
};

export default	WMSRSource;
