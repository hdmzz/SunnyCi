import getPixels from 'get-pixels';

class Fetch {
	static	getZoomPositionElevation(zpCovered: number[][]) {
		const elevations: { [key: string]: Array<Array<number>> } = {};

		zpCovered.forEach(( zoomPos ) => {
			let	grandparent = [
				zoomPos[0]-2, Math.floor(zoomPos[1]/4), Math.floor(zoomPos[2]/4)];

			const	key = grandparent.join(',');

			if (elevations[key]) {
				elevations[key].push(zoomPos);
			} else {
				elevations[key] = [zoomPos];
			}
		});

		return (
			Object.keys(elevations)
			.map(triplet => triplet.split(',').map(num => parseFloat(num)))
		);
	};

	//https://docs.mapbox.com/data/tilesets/guides/access-elevation-data/#mapbox-terrain-rgb
	static	getUri( zoomPos: number[], token: string, _api?: string): string {
		const	prefix = 'https://api.mapbox.com/v4/mapbox.terrain-rgb';
		const	resFormat = '@2x.pngraw';
		return ( `${prefix}/${zoomPos.join('/')}${resFormat}?access_token=${token}`)
	};

	static async	getRgbTile( uri: string ) {
		console.log(window);
		const	png = getPixels(uri, 'png', (_err, pixels) => {
			console.log(pixels);
		});

		console.log( png );
	};

	static	fetchTile( zoomPos: number[], token: string, _api?: string ) {
		const	uri: string  = this.getUri( zoomPos, token);
		let		ret = this.getRgbTile( uri );

		return ( ret );
	};

	static async	getPixelsModule() {
		if ( window === undefined ){
			return ( await import( "get-pixels" )).default;
		} else {
			return ( await import( "get-pixels" ) ).default;
		};
	};
};
export default	Fetch;
