import WMTSSource from "../Source/WMTSSource";
import { fromArrayBuffer } from "geotiff";
import * as THREE from 'three';
import { Coordinate } from "../Coordinate/Coordinate";
import Extent from "../core/Extent";

class	ElevationLayer {
	source: WMTSSource;
	terrain: THREE.Mesh[] | undefined;

	constructor ( source: WMTSSource ) {
		this.source = source;
	};

	public async	fetchBil() {
		return new Promise<THREE.Group>( async ( resolve ) => {
			const	urls = this.source.neighborsUrls;
			//const	url = this.source.urlZoomPos;
			const	results: {elevation: number, lat: number, lon: number}[][][] = [];

			const promises = urls.map(async (url) => {
				const	bilResponse = await fetch( url.url );
				const	bilBuffer = await bilResponse.arrayBuffer();
				results.push( this.parseBil( bilBuffer, url.zoomPos ));
			});
			await Promise.all(promises);

			const	meshes: THREE.Mesh[] = [];

			for ( const meshPrecursor of results ) {
				const	mesh = this.createMesh( meshPrecursor );
				meshes.push( mesh );
			};

			const	group = this.createGroup( meshes );
			this.terrain = group.children as THREE.Mesh[];
			resolve( group );
		});
	};

	private	createGroup( meshes: THREE.Mesh[] ): THREE.Group
	{
		const	group = new THREE.Group();
		meshes.forEach( mesh => group.add( mesh ));

		return ( group );
	};

	private		parseBil( buffer: ArrayBuffer, zoomPos: {zoom: number, tileCol: number, tileRow: number })
	{
		const	elevationData = new DataView(buffer);
		const	grid = [];
		const	ncols = 256;
		const	bbox = Extent.tileToBBox( zoomPos.tileCol, zoomPos.tileRow, zoomPos.zoom );
		const	lonRange = bbox.maxLon - bbox.minLon;
		const	latRange = bbox.maxLat - bbox.minLat;

		for (let row = 0; row < ncols; row++) {
			const rowArray = [];
			for (let col = 0; col < ncols; col++) {
				const	index = (row * ncols + col) * 4; // 4 bytes per float32 value
				const	value = elevationData.getFloat32(index, true); // Little-endian
				const	lon = bbox.minLon + (col / (ncols - 1)) * lonRange;
				const	lat = bbox.maxLat - (row / (ncols - 1)) * latRange; // Inverser l'ordre des lignes

				rowArray.push({ elevation: value / 255 * 50, lat, lon });
			};
			grid.push(rowArray);
		};

		return ( grid );
	};

	private createMesh(grid: { elevation: number, lat: number, lon: number }[][]): THREE.Mesh {
		const	ncols = grid[0].length;
		const	geometry = new THREE.PlaneGeometry( 256, 256, ncols - 1, ncols - 1 );

		for ( let i = 0; i < ncols; i++ ) {
			for ( let j = 0; j < ncols; j++ ) {
				const	vertexIndex = j * ncols + i;
				const	lon = grid[j][i].lon;
				const	lat = grid[j][i].lat;
				const	mercator = new Coordinate({ latitude: lat, longitude: lon, altitude: 0 }, this.source.center ).ComputeWorldCoordinate();

				geometry.attributes.position.setXYZ( vertexIndex, mercator.world.x, mercator.world.y, grid[j][i].elevation );
			};
		};
		const	material = new THREE.MeshBasicMaterial({ color: "white", wireframe: true, side:2 });
		const	mesh = new THREE.Mesh( geometry, material );
		mesh.rotation.x = -Math.PI / 2;
		mesh.rotateZ( Math.PI );

		return ( mesh );
	};

	public projectLatLonToTerrain(lat: number, lon: number): THREE.Vector3 {
		if (!this.terrain) {
			throw new Error("Terrain not loaded");
		}

		const mercator = new Coordinate({ latitude: lat, longitude: lon, altitude: 0 }, this.source.center ).ComputeWorldCoordinate();
		const centerMercator = new Coordinate({ latitude: this.source.center[0], longitude: this.source.center[1], altitude: 0 },  [this.source.center[0], this.source.center[1] ]).ComputeWorldCoordinate();
		const x = mercator.world.x - centerMercator.world.x;
		const y = 0;
		const z = mercator.world.y - centerMercator.world.y;

		return new THREE.Vector3(x, y, z);
	}
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
