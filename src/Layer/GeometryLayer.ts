import Source from "../Source/Source";
import * as THREE from 'three';
import View from "../View/View";
import Extent from "../core/Extent";

class GeometryLayer {
	source: Source;
	view: View;
	terrain: THREE.Mesh[];
	extent: Extent;

	constructor( source: Source, terrain:THREE.Group, view: View, extent: Extent )
	{
		this.source = source;
		this.view = view;
		this.terrain = terrain.children as THREE.Mesh[];
		this.extent = extent;
		this.fetchGeom();
	};

	public async	fetchGeom()
	{
		const	rawData = ( await fetch( this.source.url as string ));
		const	data = await rawData.json();

		this.build( data.elements );
	};

	private async	getAltitude( x: number, y: number ): Promise<number>
	{
		return new Promise( async ( res, rej ) => {
			try {
				await new Promise(( resolve ) => setTimeout( resolve, 0 ));
				const	raycaster = new THREE.Raycaster();
				const	origin = new THREE.Vector3( x, 0, y );//!peut etre inverser
				const	up = new THREE.Vector3( 0, 1, 0 );
	
				const	chunkSize = 2;
				let		altitude = 0;
				for ( let i = 0; i < this.terrain.length; i += chunkSize ) {
					const	terrainChunk = this.terrain.slice( i, i + chunkSize );
					raycaster.set( origin, up );
					const	intersects = raycaster.intersectObjects( terrainChunk );
					if ( intersects.length > 0 ) {
						altitude = intersects[0].point.y;
						break; 
					};
				};
				res( altitude );
			} catch ( error ) {
				rej( error );
			};
		});
	};

	private async	build( data: {id: number, lat: number, lon: number, tags: {}, type: string}[][] )
	{
		const	treeGeometry = new THREE.CylinderGeometry( 1, 1, 10, 8 );
		const	treeMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
		const	foliageGeometry = new THREE.SphereGeometry( 5, 8, 8 );
		const	foliageMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
		const	treeCount = data.length;
		const	treeInstancedMesh = new THREE.InstancedMesh( treeGeometry, treeMaterial, treeCount );
		const	foliageInstancedMesh = new THREE.InstancedMesh( foliageGeometry, foliageMaterial, treeCount );
		const	dummy = new THREE.Object3D();

		for (let i = 0; i < data.length; i++) {
			//@ts-ignore
			const	{ lat, lon } = data[i];
			const	[x, y] = this.extent.getProjectCoords( lat, lon );
			const	altitude = await this.getAltitude( x, y );

			dummy.position.set( x, altitude + 5, y );
			dummy.updateMatrix();
			treeInstancedMesh.setMatrixAt( i, dummy.matrix );

			dummy.position.set( x, altitude + 10, y );
			dummy.updateMatrix();
			foliageInstancedMesh.setMatrixAt( i, dummy.matrix );
		};
		treeInstancedMesh.castShadow = true;
		foliageInstancedMesh.castShadow = true;
		//treeInstancedMesh.rotateY( Math.PI / 2);
		//foliageInstancedMesh.rotateY( Math.PI / 2);
		this.view.addLayer( "treeBase", treeInstancedMesh );
		this.view.addLayer( "foliage", foliageInstancedMesh );
	};
};

export default	GeometryLayer;
