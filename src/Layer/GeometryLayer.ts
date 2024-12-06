import HugoGeo, { refBboxType } from "../HugoGeo";
import { UNITS_SIDE } from "../main";
import Source from "../Source/Source";
import { GeoJSONFeature } from "../type";
import * as THREE from 'three';

class GeometryLayer {
	source: Source;
	bbox: refBboxType;

	constructor( source: Source, refBbox: refBboxType ) {
		this.source = source;
		this.bbox = refBbox;
		this.fetchGeom();
	};

	public async	fetchGeom() {
		const	rawData = (await fetch( this.source.url as string ));
		const	data = await rawData.json();
		console.log(data.elements);

		this.build( data.elements );
	};

	private async	build( data: {id: number, lat: number, lon: number, tags: {}, type: string}[][] ) {
		const	meshes: THREE.Mesh[] = new Array<THREE.Mesh>( data.length );
		const	treeGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 8);
		const	treeMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
		const	foliageGeometry = new THREE.SphereGeometry(0.5, 8, 8);
		const	foliageMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
		for ( let i = 0; i < data.length; i++ ) {
			//@ts-ignore
			const	{ lat, lon } = data[i];
			const	[x, y] = HugoGeo.projectCoord( UNITS_SIDE, [lon, lat], this.bbox.northWest, this.bbox.southEast );
			console.log(x, y)
		};
	};

};

export default	GeometryLayer;
