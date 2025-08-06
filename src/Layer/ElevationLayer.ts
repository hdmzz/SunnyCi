import WMTSSource from "../Source/WMTSSource";
import * as THREE from 'three';
import Extent from "../core/Extent";
import proj4 from "proj4";

const WGS84 = "EPSG:4326"; // Latitude/Longitude
const WebMercator = "EPSG:3857"; 

function reproject(lat: number, lon: number): [number, number] {
	return proj4(WGS84, WebMercator, [lon, lat]);
};

class	ElevationLayer {
	source: WMTSSource;
	terrain: THREE.Mesh[] | undefined;
	centerWm: [x: number, y: number]
	gridTexture!: { tileRow: number, tileCol: number, zoom: number }[];

	constructor ( source: WMTSSource )
	{
		this.source = source;
		console.log(this.source.bbox)
		this.centerWm = reproject( ...source.center );
	};

	public async	fetchBil()
	{
		return new Promise<THREE.Group>( async ( resolve ) => {
			const urls = this.source.neighborsUrls;
			const group = this.createGroup([]);
			let pending = urls.length;
	
			if ( pending === 0 ) {
				this.terrain = [];
				resolve( group );
				return;
			};
			
			urls.forEach( async ( url ) => {
				try {
					const bilResponse = await fetch( url.url );
	
					if ( !bilResponse.ok ) {
						throw new Error( `failed to fetch ${url.url}: ${bilResponse.statusText}` );
					};
					const bilBuffer = await bilResponse.arrayBuffer();
					const meshPrecursor =  this.parseBil( bilBuffer, url.zoomPos );
					const mesh = this.createMesh( meshPrecursor );
					group.add( mesh );	
				} catch ( err ) {
					console.error( err );
				} finally {
					pending--;
					if ( pending === 0) {
						this.terrain = group.children as THREE.Mesh[];
						const box = new THREE.Box3().setFromObject(group);
						const center = new THREE.Vector3();
						box.getCenter(center);
						group.position.sub(center);
						resolve( group );
					};
				};
			});
		});
	};

	private	createGroup( meshes: THREE.Mesh[] ): THREE.Group
	{
		const	group = new THREE.Group();
		meshes.forEach( mesh => group.add( mesh ));

		return ( group );
	};

	private		parseBil( buffer: ArrayBuffer, zoomPos: { zoom: number, tileCol: number, tileRow: number })
	{
		const	elevationData = new Float32Array( buffer );
		const	grid = [];
		const	ncols = 256;
		const	bbox = Extent.tileToBBox( zoomPos.tileCol, zoomPos.tileRow, zoomPos.zoom );
		const	lonRange = bbox.maxLon - bbox.minLon;
		const	latRange = bbox.maxLat - bbox.minLat;

		for ( let row = 0; row < ncols; row++ ) {
			const	rowArray = [];
			for ( let col = 0; col < ncols; col++ ) {
				const	index = ( row * ncols + col );
				const	value = elevationData[index];
				const	lon = bbox.minLon + ( col / ( ncols - 1 )) * lonRange;
				const	lat = bbox.maxLat - ( row / ( ncols - 1 )) * latRange;
				const	[px, py] = reproject( lat, lon );
				const	x = px - this.centerWm[0];
				const	y = py - this.centerWm[1];
				rowArray.push({ elevation: value, y, x });
			};
			grid.push( rowArray );
		};

		return ( grid );
	};

	//private createMesh( grid: { elevation: number, x: number, y: number }[][]): THREE.Mesh
	//{
	//	const	ncols = grid[0].length;
	//	const	geometry = new THREE.PlaneGeometry(256, 256, ncols -1, ncols - 1);


	//	for ( let i = 0; i < ncols; i++ ) {
	//		for ( let j = 0; j < ncols; j++ ) {
	//			const	vertexIndex = j * ncols + i;

	//			geometry.attributes.position.setXYZ( vertexIndex, grid[j][i].x, grid[j][i].y, grid[j][i].elevation );
	//		};
	//	};
	//	const	material = new THREE.MeshStandardMaterial({ color: "#ECEBE9FF", wireframe: true, side:2 });
	//	const	mesh = new THREE.Mesh( geometry, material );
	//	mesh.castShadow = true;
	//	mesh.receiveShadow = true;
	//	mesh.rotation.x = -Math.PI / 2;
	//	mesh.rotateZ( Math.PI );

	//	return ( mesh );
	//};

	private createMesh( grid: { elevation: number, x: number, y: number }[][]): THREE.Mesh
	{
		const	rows = grid.length;
		const	cols = grid[0].length;
		const	geometry = new THREE.BufferGeometry();
		const	vertices = [];
		const	indices = [];

		for ( let j = 0; j < rows; j++ ) {
			for ( let i = 0; i < cols; i++ ) {
				const { x, y, elevation } = grid[j][i];
				vertices.push( x, elevation, -y ); // Y est la hauteur, Z est -y pour l'orientation
			}
		}

		for ( let j = 0; j < rows - 1; j++ ) {
			for ( let i = 0; i < cols - 1; i++ ) {
				const a = j * cols + i;
				const b = a + 1;
				const c = (j + 1) * cols + i;
				const d = c + 1;

				indices.push( a, c, b );
				indices.push( b, c, d );
			}
		}

		geometry.setIndex( indices );
		geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ));
		geometry.computeVertexNormals();

		const	material = new THREE.MeshStandardMaterial({ color: "#ECEBE9FF", wireframe: true, side: THREE.DoubleSide });
		const	mesh = new THREE.Mesh( geometry, material );
		mesh.castShadow = true;
		mesh.receiveShadow = true;

		return ( mesh );
	};
};

export default ElevationLayer;
