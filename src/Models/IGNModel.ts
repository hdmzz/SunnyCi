import proj4 from "proj4";

class	IGNModel {
public	origin: [lat:number, lon:number];

	constructor(origin:[lat: number, lon: number]) {
		this.origin = origin;
	};

	public	toWebMercator( origin: [lat: number,  lon: number] ): [number, number] {
		const	wgs84 = 'EPSG:4326';
		const	webMercator = 'EPSG:3857';

		const	[x, y] = proj4( wgs84, webMercator, [origin[1], origin[0]]);

		return ([ x, y ]);
	};
}
