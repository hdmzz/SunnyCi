import ndarray from 'ndarray';
import getPixels from './GetPixels';

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
/**
 * !Un peu CallBack HEll NON??!!
 * @param uri du DEM de Mapbox.
 * @returns une promesse contenant les valeur rgb des pixels du raster
 */
	static async	getRgbTile( uri: string ): Promise<ndarray.NdArray<Uint8Array>> {
		return new Promise(( res, rej ) => {
			getPixels( uri, ( err: any, pixels: ndarray.NdArray<Uint8Array> ) => {
				if ( err ) {
					rej( err );
				} else {
					res( pixels );
				};
			});
		});
	};

	static async	fetchTile( zoomPos: number[], token: string, _api?: string ) {
		const	uri: string  = this.getUri( zoomPos, token);
		let		ret = await this.getRgbTile( uri );
		console.log( ret );
		return ( ret );
	};
};
export default	Fetch;
