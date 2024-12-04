import TileSource from "./TileSource";

//https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities
class	WMTSSource extends TileSource {
	url: string;
	heightNeighborsCoordinates: { tileX: number, tileY: number }[];
	layer: string
	format: string
	style: string
	isWmtsSource: boolean;

	constructor( center: [lat: number, lon: number], radius: number, opts: {
		layer: string;
		format: string;
		style: string;
		tileMatrixSet: string;
		zoom: number;
	}) {
		super( center, radius, opts.format, opts.zoom, opts.tileMatrixSet );
		this.url = "";
		this.heightNeighborsCoordinates = [];
		this.layer = opts.layer ? opts.layer : "HR.ORTHOIMAGERY.ORTHOPHOTOS";
		this.format = opts.format ? opts.format : "image/jpeg";
		this.style = opts.style ? opts.style : "normal";
		this.zoom = opts.zoom ? opts.zoom : 8;
		this.isWmtsSource = true;
		this.wmtsUrlBuilder();
	};

	//!tile row = y tile col = x
	private	getNeighborsCoordinates( originaleTileRow: number, originaleTileCol: number ): { tileX: number, tileY: number }[] {
		const	neighborsTile: { tileX: number, tileY: number }[] = [];

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
		if ( this.format === "image/jpeg" ) {
			this.heightNeighborsCoordinates = this.getNeighborsCoordinates( this.tileRow, this.tileCol );
			console.log( this.heightNeighborsCoordinates );
		};//!!!!!!!!!!!!!!!!!!!!!!!!!!!proleme de tilematrixset WGS84G et pas PM!!!! Projection mercator !=== a WGS refaire coordonnees de tuile a partir de WGS coords 
		this.url = `https://data.geopf.fr/wmts?LAYER=${this.layer}&FORMAT=${this.format}&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&STYLE=${this.style}&TILEMATRIXSET=${this.tileMatrixSet}&TILEMATRIX=${this.zoom}&TILEROW=${this.tileRow}&TILECOL=${this.tileCol}`;
		console.log( this.url );
		return ( this.url );
	};
};

export default	WMTSSource;


