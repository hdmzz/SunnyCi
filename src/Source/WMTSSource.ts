import proj4 from "proj4";

class	WMTSSource {
	center: [lat: number, lon: number];
	radius: number;

	constructor( center: [lat: number, lon: number], radius: number ) {
		this.center = center;
		this.radius = radius;
	};

	public	findTileindex( lat: number, lon: number, zoom = 18 ) {
		const	R = 6378137;
		const	lt = lat * Math.PI / 180;
		const	ln = lon * Math.PI / 180;
		const	x = R * ln;
		const	y = R * Math.log( Math.tan(( Math.PI /  4 ) + ( lt / 2 )));
		const	xTile = Math.floor((( x + R ) / ( 2 * R )) * 2**zoom );
		const	yTile = Math.floor((( R - y ) / ( 2 * R )) * 2**zoom );
		console.log( xTile, yTile );
		return { xTile, yTile, zoom };
	};

	public	urlBuilder() {
		const	{ xTile, yTile, zoom } = this.findTileindex(...this.center);
		let	ret = `https://data.geopf.fr/wmts?LAYER=ORTHOIMAGERY.ORTHOPHOTOS&FORMAT=image/jpeg&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&STYLE=normal&TILEMATRIXSET=PM&TILEMATRIX=${zoom}&TILEROW=${xTile}&TILECOL=${yTile}`;
		console.log(ret);
	};
};

export default	WMTSSource;
