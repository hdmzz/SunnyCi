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

type ProjectCoordsFunction = (coord: [number, number], nw: [number, number], se: [number, number]) => number[];

class	RgbModel {
	public	unitsPerMeter: number;
	public	projectCoords: ProjectCoordsFunction;
	public	mapBoxToken: string;
	public	dataElevationCovered: number[][][];
	public	apiSatellite: string;

	constructor ( units: number, projectCoords: ProjectCoordsFunction, token: string, apiSatellite: string ) {
		this.mapBoxToken = token;
		this.projectCoords = projectCoords;
		this.unitsPerMeter = units;
		this.dataElevationCovered = [];
		this.apiSatellite = apiSatellite;
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

	public	addTile( tile: ndarray.NdArray<Uint8Array>, zoomPositionElevation: number[], zpCovered: number[][], bbox: BboxType ): number[][][] {
		let	elevations =  [];
		//ici extrcction de l'elevation
		if ( tile ) {
			let	R, G, B;
			for ( let i = 0; i < tile.data.length; i += 4 ) {//on avance de 4 car la  quatrieme valeur est la valeur alpha du pixel
				R = tile.data[i];
				G = tile.data[i + 1];
				B = tile.data[i + 2];
				elevations.push( -10000 + ( ( R * 256 ** 2 ) + ( G * 256 ) + B ) * 0.1 );
			};
		} else {
			elevations = new Array(262144).fill(0);
		};

		let	sixteenths = [];
		for ( let col = 0; col < 4; col++ ) {
			for ( let row = 0; row < 4; row++ ) {
				sixteenths.push([
					zoomPositionElevation[0] + 2,
					zoomPositionElevation[1] * 4 + col,
					zoomPositionElevation[2] * 4 + row,
				].join( '/' ));
			};
		};

		let	zpCoveredStr = zpCovered.map(( zp ) => { return zp.join('/'); });

		const	dataElev: number[][][] = [];
		sixteenths.forEach(( zoomPosStr, index ) => {
			if ( !zpCoveredStr.includes( zoomPosStr ) ) return;

			let	zoomPos = zoomPosStr.split( '/' ).map( str => parseInt( str ) );
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
						zoomPos[1] * 128 + col,
						zoomPos[2] * 128 + row
					], zoomPos[0]);

					array.push(
						...this.projectCoords( lonlatPixel, bbox.northWest as [number, number], bbox.southEast as [number, number] ),
						elev[dataIndex] * this.unitsPerMeter);
					dataIndex++;
				}
			}
			dataElev.push([ zoomPos, array, zoomPositionElevation ])
		});
		return ( dataElev );
	};

	public	build() {
		const	meshes = this._build();
	}

	private	_build() {
		const	{ dataElevationCovered: dataEl, apiSatellite, mapBoxToken } = this;

		//first sort the data Ele
		dataEl.sort(( zp1, zp2 ) => {
			return ( zp1[0].join( "/" ) > zp2[0].join( "/" ) ? 1 : -1 );
		});

		//on index chaque valeurn et on les stock dans un tab nommé dataEleIds
		const	dataElIds: { [key: string]: number } = {};
		dataEl.forEach(( data, index ) => { dataElIds[data[0].join('/')] = index });

		dataEl.forEach(([ zoomPos, array, zoomPosEle ]) => {
			const	plane = new THREE.Pla
		})
	};
};


export default	RgbModel;
