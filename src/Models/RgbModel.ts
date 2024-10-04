import ndarray from "ndarray";
import Fetch from "../Fetcher/Fetch";
import { BboxType } from "../ThreeGeo";
import { SphericalMercator } from '@mapbox/sphericalmercator';

const	constVertices = 128;
//! Attention ll signifi lon lat ici et pas lat lon
const	constTilePixels = new SphericalMercator({size: 128});

const	sixteenthPixelRanges = (() => {
	let cols = 512;
	let rows = 512;
	let scaleFactor = 4;
	let ranges = [];
	for ( let c = 0; c < scaleFactor; c++ ) {
		for ( let r = 0; r < scaleFactor; r++ ) {
			ranges.push([
				[r*(rows/scaleFactor-1)+r, (r+1)*rows/scaleFactor],
				[c*(cols/scaleFactor-1)+c, (c+1)*cols/scaleFactor]
			]);
		}
	};
	return ( ranges );
})();

class	RgbModel {
	public	unitsPerMeter: number;
	public	projectCoords: Function;
	public	mapBoxToken: string;
	public	dataElevationCovered: [];

	constructor ( units: number, projectCoords: Function, token: string ) {
		this.mapBoxToken = token;
		this.projectCoords = projectCoords;
		this.unitsPerMeter = units;
		this.dataElevationCovered = [];
	};

	public	fetch( zpCovered: number[][], bbox: BboxType ): void {
		//calculer le zoomPositionElevation
		const	zoomPositionElevation = Fetch.getZoomPositionElevation( zpCovered );
		let	count = 0;

		zoomPositionElevation.forEach( async zoomPos => {
			const	tile = await Fetch.fetchTile( zoomPos, this.mapBoxToken, 'mapbox-rgb');

			if ( tile !== null ) {
				this.dataElevationCovered = this.dataElevationCovered.concat(this.addTile( tile, zoomPos, zpCovered, bbox ));
			} else {
				throw new Error('no tile addedl 26 RgbModel');
			}
			count++;
			if ( count === zoomPositionElevation.length )
				this.build();
		});
	};

	public	addTile( tile: ndarray.NdArray<Uint8Array>, zoomPos: number[], zpCovered: number[][], bbox: BboxType ): [] {
		let	elevations =  [];

		if ( tile ) {
			let	R, G, B;
			for ( let i = 0; i < tile.data.length; i += 4 ) {//on avance de 4 car la  quatrieme valeur est la valeur alpha du pixel
				R = tile.data[i];
				G = tile.data[i + 1];
				B = tile.data[i + 2];
				elevations.push( -10000 + ( ( R * 256 ** 2 ) + ( G * 256 ) + B ) * 0.1 );
			};
		};

		let	sixteenths = [];
		for ( let col = 0; col < 4; col++ ) {
			for ( let row = 0; row < 4; row++ ) {
				sixteenths.push([
					zoomPos[0] + 2,
					zoomPos[1] * 4 + col,
					zoomPos[2] * 4 + row].join( '/' ));
			};
		};

		let	zpCoveredStr = zpCovered.map(( zp ) => { return zp.join('/'); });

		const	dataElev = [];
		sixteenths.forEach(( zoomposStr, index ) => {
			if ( !zpCoveredStr.includes( zoomposStr ) ) return;

			let	zoompos = zoomposStr.split( '/' ).map( str => parseInt( str ) );
			let	pxRange = sixteenthPixelRanges[index];
			let	elev = [];

			for ( let r = pxRange[0][0]; r < pxRange[0][1]; r++ ) {
				for ( let c = pxRange[1][0]; c < pxRange[1][1]; c++ ) {
					elev.push( elevations[r * 512 + c] );
				}
			}

			let	array = [];
			let	dataIndex = 0;
			for ( let row = 0; row < constVertices; row++ ) {
				for ( let col = 0; col < constVertices; col++ ) {
					let lonlatPixel = constTilePixels.ll([
						zoompos[1] * 128 + col,
						zoompos[2] * 128 + row
					], zoompos[0]);

					array.push(
						...this.projectCoords( lonlatPixel, bbox.northWest, bbox.southEast ),
						elev[dataIndex] * this.unitsPerMeter);
					dataIndex++;
				}
			}
			dataElev.push( [zoompos, array, zoompos] )
		});
		return ( dataElev );
	};

	public	build() {

	}
};


export default	RgbModel;
