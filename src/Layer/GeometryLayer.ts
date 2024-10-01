import * as THREE from 'three';
import Layer from "./Layer";
import Material from '../Materials/Material';
import Coordinates from '../Core/Geographic/Coordinates';

function	generateGeometry( shape: THREE.Shape, opts: THREE.ExtrudeGeometryOptions ): THREE.ExtrudeGeometry {
	const	geometry = new THREE.ExtrudeGeometry( shape, opts );

	return ( geometry );
}

function	generateShape( points: number[][] ): THREE.Shape {
	const	shape = new THREE.Shape();
	for ( let i = 0; i < points.length; i++ ) {
		const	p = points[i];

		//mP pour mapPoint a revoir la convntion de nommage cest un peu n'importe nawak
		const	mP = new Coordinates(
			"GPS", { lat: p[1], lon: p[0] }
		).computeWorldCoordinate();
		if ( i === 0 ) {
			shape.moveTo( mP.world?.x as number, mP.world?.z as number );
		} else {
			shape.lineTo( mP.world?.x as number, mP.world?.z as number );
		}
	}

	return ( shape );
}

/**
 * @param coords == coordonnées d'un building en 2d
 * autrement dit c'est un polygon ...
 */
function	addBuilding(
		coords: number[][][],
		_info: Properties,
		height: number//height est parfois NaN donc grave probleme l'asignation dans les parametre ne fonctionnait pas 
	): THREE.ExtrudeGeometry {

		let		shape;
		const	holes = [];

		height = height || 1;

		for (let i = 0; i < coords.length; i++) {
			const	polygon = coords[i];

			if ( i === 0 ) {
				shape = generateShape( polygon );
			} else {
				holes.push( generateShape( polygon ) );
			};
		};

		for ( let i = 0; i < holes.length; i++ ) {
			shape?.holes.push( holes[i] );
		};

		const	geometry = generateGeometry( shape as THREE.Shape, {
			curveSegments: 1,
			steps: 1,
			depth: 0.1 * height,
			bevelEnabled: false,
		});

		geometry.rotateX( Math.PI / 2 );
		geometry.rotateZ( Math.PI );
		geometry.computeBoundingSphere();

		return ( geometry );
}

class	GeometryLayer {
	public	geojson: Feature[];
	public	name: string;
	public	layer: Layer;
	public	materials: THREE.Material[];
	public	layerObjects: Layer;
	public	layerBorders: Layer;
	public	layerColliders: Layer;

	constructor( name: string, geojson: GeoJSON ) {
		this.name = name;
		this.layer = new Layer( name, 'GeoLayer' );
		this.geojson = geojson.features;
		this.materials = [];
		this.layerObjects = new Layer( name + 'Objects' );
		this.layerBorders = new Layer( name + 'Border' );
		this.layerColliders = new Layer( name + 'Collider' );
	};

	public	buildBuildings( _options?: any ): Layer {
		//par deault les valeurs de material sont definimais on peu custom no problemo
		const	buildingMaterial = Material.buildingMat();
		const	features = this.geojson;//le feauture collection qu l'on recoit 
		const	geometries = [];

		this.materials.push( buildingMaterial );

		for ( let i = 0; i < features.length; i++ ){
			const	featureElement = features[i];

			const	info = featureElement.properties;

			if (featureElement.geometry.type === "Polygon") {
				let	height = 1;
				//@ts-ignore
				if ( info['building:levels'] !== undefined ) {
					//@ts-ignore
					height = parseInt( info['building:levels'] );
				} else if ( info.tags ) {
					height = parseInt( info.tags['building:levels'] );
				};

				const	buildings = addBuilding(
					featureElement.geometry.coordinates,
					info,
					height,
				);
			};
		};
		return ( this.layer );
	}
};

export default	( GeometryLayer );
