import ndarray from 'ndarray';
import getPixels from './GetPixels';

class Fetch {
	/**
  * Calculates the unique zoom positions covered by the provided zoom positions.
  *
  * This function groups the provided zoom positions by their grandparent zoom position
  * (two zoom levels higher) and returns the unique grandparent zoom positions.
  *
  * @param zpCovered - An array of zoom position arrays, where each inner array represents a zoom position.
  * @returns An array of unique grandparent zoom position arrays.
  */
 static	getZoomPositionElevation(zpCovered: number[][]) {
		const elevations: { [key: string]: number[][] } = {};

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
 * @param uri du DEM de Mapbox.
 * @returns une promesse contenant les valeur rgb des pixels du raster
 */
	static async	getRgbTile({ uri }: { uri: string; }): Promise<ndarray.NdArray<Uint8Array>> {
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
		let		ret = await this.getRgbTile({ uri });
		return ( ret );
	};
};
export default	Fetch;
