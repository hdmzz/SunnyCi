import WMTSSource from "../Source/WMTSSource";
import * as THREE from 'three';
import { Coordinate } from "../Coordinate/Coordinate";

class	ElevationLayer {
	source: WMTSSource;
	terrain: THREE.Mesh | undefined;

	constructor ( source: WMTSSource ) {
		this.source = source;
	};

	public async	fetchBil() {
		return new Promise<THREE.Mesh>( async ( resolve, reject ) => {
			const	bilResponse = await fetch( this.source.url );
			const	bilBuffer = await  bilResponse.arrayBuffer();
	
			const grid = this.parseBil( bilBuffer );
	
			console.log(grid);
			const	mesh = await this.createMesh(grid, resolve);
			if ( mesh === undefined)
				reject();
		})
	};

	private			parseBil( buffer: ArrayBuffer )  {
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
