import WMTSSource from "../Source/WMTSSource";
import { fromArrayBuffer } from "geotiff";
import * as THREE from 'three';
import { Coordinate } from "../Coordinate/Coordinate";
import Source from "../Source/Source";

class	ElevationLayer {
	source: Source;
	terrain: THREE.Mesh | undefined;

	constructor ( source: Source ) {
		this.source = source;
	};

	public async	fetchBil() {
		return new Promise<THREE.Mesh>( async ( resolve, reject ) => {

			if ( this.source.isWmtsSource ) {
				const	bilResponse = await fetch( this.source.url );
				const	bilBuffer = await  bilResponse.arrayBuffer();
		
				const grid = this.parseBil( bilBuffer );
		
				console.log(grid);
				const	mesh = await this.createMesh(grid, resolve);
			} else if ( this.source.isWmsrSource ) {

			};
		});
	};

	private		parseBil( buffer: ArrayBuffer )  {
		const	elevationData = new DataView(buffer);
		const	grid = [];
		const	ncols = 256;
	
		for (let row = 0; row < ncols; row++) {
			const rowArray = [];
			for (let col = 0; col < ncols; col++) {
				const	index = (row * ncols + col) * 4; // 4 bytes per float32 value
				const	value = elevationData.getFloat32(index, true); // Little-endian
				rowArray.push( value / 255 * 50 );
			}
			grid.push(rowArray);
		}
	
		return ( grid );
	};

	private createMesh(grid: number[][], res: (payload : THREE.Mesh) => void) {
		const	ncols = grid[0].length;
		const	nrows = grid.length;
		const geometry = new THREE.PlaneGeometry( 256, 256, ncols - 1, ncols - 1 );
		const	bbox = this.source.tileToBBox();

		const	lonRange = bbox.maxLon - bbox.minLon;
		const	latRange = bbox.maxLat - bbox.minLat;

		for ( let i = 0; i < ncols; i++ ) {
			for ( let j = 0; j < ncols; j++ ) {
				const	vertexIndex = j * ncols + i;
				const	lon = bbox.minLon + ( i / 256 ) * lonRange;
				const	lat = bbox.minLat + ( j / 256 ) * latRange;
				const	mercator = new Coordinate({ latitude: lat, longitude: lon, altitude: 0 }, this.source.center ).ComputeWorldCoordinate();
				if ( j === 127 ) console.log( mercator );
				geometry.attributes.position.setXYZ( vertexIndex, mercator.world.x, mercator.world.y, grid[j][i] );
			};
		};
		const	material = new THREE.MeshBasicMaterial({ color: "white", wireframe: true });
		const	mesh = new THREE.Mesh( geometry, material );
		mesh.rotation.x = -Math.PI / 2;
		mesh.rotateZ( Math.PI );
		console.log( mesh );
		this.terrain = mesh
		res( mesh );
	};
};

export default	ElevationLayer;

/**
 * Calcule la bounding box d'une tuile dans EPSG:4326.
 * @param x Indice de la tuile (colonne).
 * @param y Indice de la tuile (ligne).
 * @param z Niveau de zoom.
 * @returns Bounding box au format [lonMin, latMin, lonMax, latMax].
 */
function calculateBoundingBox(x: number, y: number, z: number): [number, number, number, number] {
	// Largeur d'une tuile en degrés de longitude
	const deltaLon = 360 / Math.pow(2, z);
	// Hauteur d'une tuile en degrés de latitude
	const deltaLat = 180 / Math.pow(2, z);

	// Calcul de la longitude minimale et maximale
	const lonMin = -180 + x * deltaLon;
	const lonMax = lonMin + deltaLon;

	// Calcul de la latitude maximale et minimale
	const latMax = 90 - y * deltaLat;
	const latMin = latMax - deltaLat;

	return [lonMin, latMin, lonMax, latMax];
}
