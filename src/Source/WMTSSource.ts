import Extent, { latLonToTile } from "../core/Extent";
import Source from "./Source";

//https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities
class	WMTSSource extends Source{
	urlZoomPos: {url: string, zoomPos: { zoom: number, tileRow: number, tileCol: number }};
	neighborsUrls: {url: string, zoomPos: { zoom: number, tileRow: number, tileCol: number }}[];
	heightNeighborsCoordinates: { tileX: number, tileY: number }[];
	layer: string
	style: string
	tileMatrixSet: string
	extent: Extent;
	neighbors: boolean;
	zoom: number;

	constructor( extent: Extent, opts: {
		layer: string;
		format: string;
		style: string;
		tileMatrixSet: string;
		zoom: number;
		neighbors: boolean;
	}) {
		super( extent.origin, extent.radius, opts.format )
		this.urlZoomPos = {url: "", zoomPos: {zoom: 0, tileCol: 0, tileRow: 0}};
		this.neighborsUrls = []
		this.heightNeighborsCoordinates = [];
		this.layer = opts.layer ? opts.layer : "HR.ORTHOIMAGERY.ORTHOPHOTOS";
		this.style = opts.style ? opts.style : "normal";
		this.tileMatrixSet = opts.tileMatrixSet ? opts.tileMatrixSet : "PM";
		this.isWmtsSource = true;
		this.extent = extent;
		this.neighbors = opts.neighbors;
		this.zoom = opts.zoom;
		this.wmtsUrlBuilder();
	};

	public	wmtsUrlBuilder()
	{
		const	tileCoord = this.extent.asTile( this.neighbors, this.tileMatrixSet, this.zoom );
		console.log( tileCoord );
		tileCoord.forEach(( coord ) => {
			const	neiUrl = `https://data.geopf.fr/wmts?LAYER=${this.layer}&FORMAT=${this.format}&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&STYLE=${this.style}&TILEMATRIXSET=${this.tileMatrixSet}&TILEMATRIX=${coord.zoom}&TILEROW=${coord.tileRow}&TILECOL=${coord.tileCol}`;
			this.neighborsUrls.push( { url: neiUrl , zoomPos: { zoom: coord.zoom, tileRow: coord.tileRow, tileCol: coord.tileCol }});
		});
		console.log( this.neighborsUrls )
	};
};

export default	WMTSSource;
