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

	constructor( source: Source, refBbox: refBboxType, view: View ) {
		this.source = source;
		this.bbox = refBbox;
		this.fetchGeom();
		this.view = view;
	};

	public async	fetchGeom() {
		const	rawData = (await fetch( this.source.url as string ));
		const	data = await rawData.json();
		console.log(data.elements);

		this.build( data.elements );
	};

	private async	build( data: {id: number, lat: number, lon: number, tags: {}, type: string}[][] ) {
		const	treeGeometry = new THREE.CylinderGeometry( 0.1, 0.1, 1, 8 );
		const	treeMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
		const	foliageGeometry = new THREE.SphereGeometry( 0.5, 8, 8 );
		const	foliageMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
		const	treeCount = data.length;
		const	treeInstancedMesh = new THREE.InstancedMesh( treeGeometry, treeMaterial, treeCount );
		const	foliageInstancedMesh = new THREE.InstancedMesh( foliageGeometry, foliageMaterial, treeCount );
		const	dummy = new THREE.Object3D();

		for (let i = 0; i < data.length; i++) {
			//@ts-ignore
			const { lat, lon } = data[i];
			const [x, y] = HugoGeo.projectCoord( UNITS_SIDE, [lon, lat], this.bbox.northWest, this.bbox.southEast );

			// Positionner le tronc de l'arbre
			dummy.position.set( y, 59.5, x );
			dummy.updateMatrix();
			treeInstancedMesh.setMatrixAt( i, dummy.matrix );

			// Positionner le feuillage de l'arbre
			dummy.position.set( y, 60.5, x );
			dummy.updateMatrix();
			foliageInstancedMesh.setMatrixAt( i, dummy.matrix );
		};

		this.view.addLayer( treeInstancedMesh );
		this.view.addLayer( foliageInstancedMesh );
	};

};

export default	GeometryLayer;
