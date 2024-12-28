import WMTSSource from "../Source/WMTSSource";
import * as THREE from 'three';
import Extent, { latLonToTile } from "../core/Extent";
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
		this.centerWm = reproject( ...source.center );
	};

	public async	fetchBil()
	{
		return new Promise<THREE.Group>( async ( resolve ) => {
			const	urls = this.source.neighborsUrls;
			const	results: { elevation: number, x: number, y: number }[][][] = [];

			const promises = urls.map( async ( url ) => {
				const	bilResponse = await fetch( url.url );
				const	bilBuffer = await bilResponse.arrayBuffer();
				results.push( this.parseBil( bilBuffer, url.zoomPos ));
			});
			await Promise.all( promises );

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

	private		parseBil( buffer: ArrayBuffer, zoomPos: { zoom: number, tileCol: number, tileRow: number })
	{
		const	elevationData = new DataView( buffer );
		const	grid = [];
		const	ncols = 256;
		const	bbox = Extent.tileToBBox( zoomPos.tileCol, zoomPos.tileRow, zoomPos.zoom );
		const	lonRange = bbox.maxLon - bbox.minLon;
		const	latRange = bbox.maxLat - bbox.minLat;
		let		topLeft: {x: number, y: number} = {x:0, y:0};
		let		bottomRight: {x: number, y: number} = {x:0, y:0};

		for ( let row = 0; row < ncols; row++ ) {
			const	rowArray = [];

			for ( let col = 0; col < ncols; col++ ) {
				const	index = ( row * ncols + col ) * 4;
				const	value = elevationData.getFloat32( index, true );
				const	lon = bbox.minLon + ( col / ( ncols - 1 )) * lonRange;
				const	lat = bbox.maxLat - ( row / ( ncols - 1 )) * latRange;
				const	[px, py] = reproject( lat, lon );
				if ( row === 0 && col === 0 ) topLeft = {x: px, y: py};
				if ( row === ncols - 1 && col === ncols - 1 ) bottomRight = {x: px, y: py};

				const	x = px - this.centerWm[0];
				const	y = py - this.centerWm[1];
				rowArray.push({ elevation: value, y, x });
			};
			grid.push( rowArray );
		};

		return ( grid );
	};

	/**
	 * @param bbox boundingBox en wgs84 de la tuile delevation, la source d'elevation convient super bien pour la france donc pas besoin 
	 * pour le moment de s'inquieter de savoir si cest generique 
	 */
	private async	resolveTexture( bbox: { minLat: number; minLon: number; maxLat: number; maxLon: number; })
	{
		const	tileCoord = Extent.bboxAsTile(bbox, 16, "PM");
		const	urls: string[] = [];
		tileCoord.forEach(( coord ) => {
			const	neiUrl = `https://data.geopf.fr/wmts?LAYER=ORTHOIMAGERY.ORTHOPHOTOS&FORMAT=image/jpeg&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&STYLE=normal&TILEMATRIXSET=PM&TILEMATRIX=${coord.zoom}&TILEROW=${coord.tileRow}&TILECOL=${coord.tileCol}`;
			urls.push( neiUrl );
			//this.neighborsUrls.push( { url: neiUrl , zoomPos: { zoom: coord.zoom, tileRow: coord.tileRow, tileCol: coord.tileCol }});
		});

	};

	private createMesh( grid: { elevation: number, x: number, y: number }[][]): THREE.Mesh
	{
		const	ncols = grid[0].length;
		const	geometry = new THREE.PlaneGeometry( 256, 256, ncols - 1, ncols - 1 );

		for ( let i = 0; i < ncols; i++ ) {
			for ( let j = 0; j < ncols; j++ ) {
				const	vertexIndex = j * ncols + i;

				geometry.attributes.position.setXYZ( vertexIndex, grid[j][i].x, grid[j][i].y, grid[j][i].elevation );
			};
		};
		const	material = new THREE.MeshPhysicalMaterial({ color: "#ECEBE9FF", wireframe: false, side:0 });
		const	mesh = new THREE.Mesh( geometry, material );
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		mesh.rotation.x = -Math.PI / 2;
		mesh.rotateZ( Math.PI );

		return ( mesh );
	};
};

export default	ElevationLayer;
