import proj4 from "proj4";

class	WMTSSource {
	center: [lat: number, lon: number];
	radius: number;

	constructor( center: [lat: number, lon: number], radius: number ) {
		this.center = center;
		this.radius = radius;
	};

	public	calculateTileIndices(lat: number, lon: number, zoom: number = 3): { tileRow: number; tileCol: number; zoom: number } {
		const	tileSize = 256; // in pixels
		const	initialResolution = 360 / tileSize; // degrees per pixel at zoom 0
		const	originShift = 180; // Map origin in degrees (EPSG:4326: -180 to 180)
		const	resolution = initialResolution / Math.pow(2, zoom);

		const	tileCol = Math.floor((lon + originShift) / (tileSize * resolution));
		const	tileRow = Math.floor((originShift - lat) / (tileSize * resolution));
	
		return { tileRow, tileCol, zoom };
	};

	public	findTileindex( lat: number, lon: number, zoom = 14 ) {
		const	R = 6378137;
		const	lt = lat * Math.PI / 180;
		const	ln = lon * Math.PI / 180;
		const	x = R * ln;
		const	y = R * Math.log( Math.tan(( Math.PI / 4 ) + ( lt / 2 )));
		const	xTile = Math.floor((( x + R ) / ( 2 * R )) * 2**zoom );
		const	yTile = Math.floor((( R - y ) / ( 2 * R )) * 2**zoom );
		console.log( xTile, yTile );
		return { xTile, yTile, zoom };
	};

	public	wmtsUrlBuilder() {
		const	{ tileRow, tileCol, zoom } = this.calculateTileIndices(...this.center);
		let	ret = `https://data.geopf.fr/wmts?LAYER=ELEVATION.ELEVATIONGRIDCOVERAGE.SRTM3&FORMAT=image/x-bil;bits=32&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&STYLE=normal&TILEMATRIXSET=WGS84G&TILEMATRIX=${zoom}&TILEROW=${tileRow}&TILECOL=${tileCol}`;
		console.log(ret);
	};
};

export default	WMTSSource;
