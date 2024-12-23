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
	zoom: number;
	tileRow: number | undefined;
	tileCol: number | undefined;
	extent: Extent;

	constructor( extent: Extent, opts: {
		layer: string;
		format: string;
		style: string;
		tileMatrixSet: string;
		zoom: number;
	} ) {
		super( extent.origin, extent.radius, opts.format )
		this.urlZoomPos = {url: "", zoomPos: {zoom: 0, tileCol: 0, tileRow: 0}};
		this.neighborsUrls = []
		this.heightNeighborsCoordinates = [];
		this.layer = opts.layer ? opts.layer : "HR.ORTHOIMAGERY.ORTHOPHOTOS";
		this.style = opts.style ? opts.style : "normal";
		this.tileMatrixSet = opts.tileMatrixSet ? opts.tileMatrixSet : "PM";
		this.zoom = opts.zoom ? opts.zoom : 8;
		this.isWmtsSource = true;
		this.extent = extent;
		this.wmtsUrlBuilder();
	};
	//!tile row = y tile col = x 
	//!renoie les coordonnees dest 8 neighbors
	private	getNeighborsCoordinates( originaleTileRow: number, originaleTileCol: number ): { tileX: number, tileY: number }[] {
		const	neighborsTile: { tileX: number, tileY: number }[] = [];

		neighborsTile.push({ tileX: originaleTileCol, tileY: originaleTileRow });
		
		for ( let dx = -1; dx <= 1; dx++ ) {
			for ( let dy = -1; dy <= 1; dy++ ) {
				if ( dx === 0 && dy === 0 ) continue; //original tile coordinate ~~~
				const	tileX = originaleTileCol + dx;
				const	tileY = originaleTileRow + dy;

				neighborsTile.push({ tileX, tileY });
			};
		};

		return ( neighborsTile );
	};

//! Pour la donnees d'elevation il n'est pas necessaire de connaitre les 8 connected tiles, le filtre peux se faire avec le format, en effet les donnees d'elevation sont au format x-bil 32 bits et JAMAIS en jpeg ou png
	public	wmtsUrlBuilder() {
		const	tileCoord = this.extent.asTile();
		console.log( tileCoord );
		tileCoord.forEach(( coord ) => {
			const	neiUrl = `https://data.geopf.fr/wmts?LAYER=${this.layer}&FORMAT=${this.format}&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&STYLE=${this.style}&TILEMATRIXSET=${this.tileMatrixSet}&TILEMATRIX=${coord.zoom}&TILEROW=${coord.tileRow}&TILECOL=${coord.tileCol}`;
			this.neighborsUrls.push( { url: neiUrl , zoomPos: { zoom: coord.zoom, tileRow: coord.tileRow, tileCol: coord.tileCol }});
		});
		console.log( this.neighborsUrls )
	};
};

export default	WMTSSource;
