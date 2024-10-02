class Fetch {
	static	getZoomPositionElevation(zoomPosEl: Array<Array<number>>) {
		const	elevations: Map<string, Array<Array<number>>> = new Map();

		zoomPosEl.forEach(( zoompos ) => {
			let	grandparent = [
				zoompos[0]-2, Math.floor(zoompos[1]/4), Math.floor(zoompos[2]/4)];

			const	key = grandparent.join(',');

			if (elevations.has(key)) {
				elevations.get(key)!.push(zoompos);
			} else {
				elevations.set(key, [zoompos]);
			};
		});

		return (
			Object.keys(elevations)
			.map(triplet => triplet.split(',').map(num => parseFloat(num)))
		);
	};

	static	fetchTile( zoomPos: Array<Array<number>>, api: string, token: string, ) {

	}
//https://docs.mapbox.com/data/tilesets/guides/access-elevation-data/#mapbox-terrain-rgb
	static	getUri( token: string, zoomPos: Array<Array<number>>): string {
		const	prefix = 'https://api.mapbox.com/v4/mapbox.terrain-rgb';
		const	resFormat = '@2x.pngraw';
		
	};
};
export default	Fetch;
