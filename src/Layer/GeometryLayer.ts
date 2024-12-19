import HugoGeo, { refBboxType } from "../HugoGeo";
import { UNITS_SIDE } from "../main";
import Source from "../Source/Source";
import { GeoJSONFeature } from "../type";
import * as THREE from 'three';
import View from "../View/View";

class GeometryLayer {
	source: Source;
	bbox: refBboxType;
	view: View;
	terrain: THREE.Mesh[];

	constructor( source: Source, refBbox: refBboxType,  terrain:THREE.Group, view: View ) {
		this.source = source;
		this.bbox = refBbox;
		this.fetchGeom();
		this.view = view;
		this.terrain = terrain.children as THREE.Mesh[];
	};

	public async	fetchGeom() {
		const	rawData = (await fetch( this.source.url as string ));
		const	data = await rawData.json();

		this.build( data.elements );
	};

	private async	getAltitude( x: number, y: number ): Promise<number> 
	{
		return new Promise( async ( res, rej ) => {
			await new Promise(( resolve ) => setTimeout( resolve, 0 ));
			const	raycaster = new THREE.Raycaster();
			const	origin = new THREE.Vector3( x, 0, y );//!peut etre inverser
			const	up = new THREE.Vector3(0, 1, 0);

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
		});
	};

	private async	build( data: {id: number, lat: number, lon: number, tags: {}, type: string}[][] ) {
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
			const	[x, y] = HugoGeo.projectCoord( UNITS_SIDE, [lon, lat], this.bbox.northWest, this.bbox.southEast );
			const	altitude = await this.getAltitude(x, y);
			// Positionner le tronc de l'arbre
			dummy.position.set( y, altitude + 5, x );
			dummy.updateMatrix();
			treeInstancedMesh.setMatrixAt( i, dummy.matrix );

			// Positionner le feuillage de l'arbre
			dummy.position.set( y, altitude + 10, x );
			dummy.updateMatrix();
			foliageInstancedMesh.setMatrixAt( i, dummy.matrix );
		};
		treeInstancedMesh.castShadow = true;
		foliageInstancedMesh.castShadow = true;
		treeInstancedMesh.rotateY( Math.PI / 2);
		foliageInstancedMesh.rotateY( Math.PI / 2);
		this.view.addLayer( treeInstancedMesh );
		this.view.addLayer( foliageInstancedMesh );
	};

};

export default	GeometryLayer;
