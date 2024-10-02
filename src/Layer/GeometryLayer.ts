import * as THREE from 'three';
import Layer from "./Layer";
import Material from '../Materials/Material';
import Coordinates from '../Core/Geographic/Coordinates';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

function	generateGeometry( shape: THREE.Shape, opts: THREE.ExtrudeGeometryOptions ): THREE.ExtrudeGeometry {
	const	geometry = new THREE.ExtrudeGeometry( shape, opts );

	return ( geometry );
}

function latLonToECEF(lat: number, lon: number, alt: number = 0): { x: number, y: number, z: number } {
	// Constants for the WGS84 ellipsoid model
	const	a = 6378137.0; // semi-major axis (in meters)
	const	e = 0.081819190842622; // eccentricity

	// Convert latitude and longitude from degrees to radians
	const	latRad = ( lat * Math.PI ) / 180;
	const	lonRad = ( lon * Math.PI ) / 180;

	// Radius of curvature in the prime vertical
	const	N = a / Math.sqrt(1 - e * e * Math.sin(latRad) * Math.sin(latRad));

	// Calculate the ECEF coordinates
	const	x = ( N + alt ) * Math.cos( latRad ) * Math.cos( lonRad );
	const	y = ( N + alt ) * Math.cos( latRad ) * Math.sin( lonRad );
	const	z = ( N * ( 1 - e * e ) + alt ) * Math.sin( latRad );

	return { x, y, z };
}

function	generateShape( polygonObj: [number, number, number][] ): THREE.Shape {
	const	shape = new THREE.Shape();

	polygonObj.forEach(( [lon, lat, _alt], index ) => {
		const	{ x, y } = latLonToECEF( lat, lon );
		if ( index === 0 ) {
			shape.moveTo( x, y );
		} else {
			shape.lineTo( x, y );
		};
	});

	return ( shape );
}

/**
 * @param polygons == coordonnées d'un building en 2d
 * ==> multipolygon car peut y avoir des trous
 */
function addBuilding(
		polygons: [number, number, number][][][],
		_info: Properties,
		height: number
	): THREE.ExtrudeGeometry {

		let shape;
		const holes = [];

		height = height || 1;

		for (let i = 0; i < polygons.length; i++) {
			const polygon = polygons[i];

			if (i === 0) {
				shape = generateShape( polygon[i] )
			} else {
				holes.push(generateShape( polygon[i] ));
			}
		}

		for (let i = 0; i < holes.length; i++) {
			shape?.holes.push(holes[i]);
		}

		const geometry = generateGeometry(shape as THREE.Shape, {
			curveSegments: 1,
			steps: 1,
			depth: 0.1 * height,
			bevelEnabled: false,
		});

		geometry.rotateX(Math.PI / 2);
		geometry.rotateZ(Math.PI);
		geometry.computeBoundingSphere();

		return geometry;
}
class	GeometryLayer {
	public	geojson: Feature[];
	public	name: string;
	public	layer: Layer;
	public	buildingMaterial: THREE.Material;
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
		this.buildingMaterial = Material.buildingMat();
	};

	public	buildBuildings( _options?: {merge: boolean} ): THREE.Group {
		//par deault les valeurs de material sont definimais on peu custom no problemo
		const	buildingMaterial = Material.buildingMat();
		const	features = this.geojson;//le feauture collection qu l'on recoit
		const	geometries = [];

		this.materials.push( buildingMaterial );

		for ( let i = 0; i < features.length; i++ ){
			console.log( features[i] );
			const	buildingObj = features[i];

			const	info = buildingObj.properties;

			let	height = 1;
			//@ts-ignore
			height = info.hauteur;

			const coordinates = buildingObj.geometry.coordinates as unknown as [number, number, number][][][];
			const	building = addBuilding(
				coordinates,
				info,
				height,
			);

			if ( building ) {
				if ( _options?.merge === true ) {
					geometries.push( building );
				} else {
					this.layer.addGeometry( new THREE.Mesh( building, this.buildingMaterial ) );
				};
			};
		};
		if ( _options?.merge === true ) {
			const	mergedGeometry = mergeGeometries( geometries );
			const	buildingMesh = new THREE.Mesh( mergedGeometry, this.buildingMaterial );
			this.layerObjects.addGeometry( buildingMesh );
		};
		return ( this.layerObjects.layer );
	};
};

export default	( GeometryLayer );
