import { BboxType } from "../type";
import HugoGeo from "../HugoGeo";
import Source from "./Source";

class	WFSSource extends Source {
	center: [lat: number, lon: number];
	radius: number;
	layerName: string;

	constructor( center: [lat: number, lon: number], radius: number, opts: {
		layer: string,
	} ) {
		super(center, radius, "" )
		this.center = center;
		this.radius = 0.005;
		super.generateBboxFromCenter( "EPSG:4326", ...center, this.radius );
		this.layerName = opts.layer;
		this.url = this.wfsUrlBuilder();
	};

//source of  feature to fecth  https://data.geopf.fr/wfs/ows?SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities
//ELEVATION.CONTOUR.LINES ==> isohypse elevation ~~
//! interessant BDTOPO_V3:pleins_de_trucs_la_dedans
	private	wfsUrlBuilder() {
		let	url = `https://data.geopf.fr/wfs/ows?SERVICE=WFS&REQUEST=GetFeature&typeName=${this.layerName}&VERSION=2.0.0&SRSNAME=EPSG:4326&outputFormat=application/json&BBOX=${this.bbox[1]},${this.bbox[0]},${this.bbox[3]},${this.bbox[2]},EPSG:4326`;

		return ( url );
	};
};

export default	WFSSource;
