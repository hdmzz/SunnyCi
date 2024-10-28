import * as THREE from 'three';
import { GeoJSONFeature, GeoJSONFeatureCollection } from '../type';
import HugoGeo from '../HugoGeo';
import { Coordinate } from '../Coordinate/Coordinate';
import Fetch from '../Fetcher/Fetch';
import View from '../View/View';

const	coordinateCahe: { [key: string]: Coordinate } = {};

export function	getWorldCoords( lat: number, lon: number, alt: number, center: [number, number] ) {
	const	cacheKey: string = `${lat},${lon},${alt},${center[0]},${center[1]}`;

	if ( coordinateCahe[cacheKey] ) {
		return ( coordinateCahe[cacheKey] );
	} else {
		coordinateCahe[cacheKey] = new Coordinate({ latitude: lat, longitude: lon, altitude: alt }, center as [number, number]).ComputeWorldCoordinate();
		return	( coordinateCahe[cacheKey] );
	};
};

class	Buildings {
	data: GeoJSONFeature | {};
	buildingsArray: [];
	center: [lat: number, lon: number];
	radius: number;
	terrain: THREE.Mesh[];
	view: View;

	constructor( center: [lat:number, lon: number], radius: number, terrain: THREE.Group, view: View ) {
		this.data = {};
		this.buildingsArray = [];
		this.center = center;
		this.radius = radius;
		this.terrain = terrain.children as THREE.Mesh[];
		this.view = view;
	};

	public async	getBuildings( url: string ): Promise<GeoJSONFeature[]> {
		if ( !url ) {
			throw new Error( 'No url given!! getBuilding Function' );
		};

		const	data: GeoJSONFeatureCollection = await fetch( url ).then(( res ) => {
			if ( !res.ok ) {
				throw new Error( `Something happened maybe the url Given is not correct: ${res.status}` );
			};

			return ( res.json() )
		});

		return ( data.features );
	};

	public async	getAltitude( building: THREE.ExtrudeGeometry ): Promise<number> {
		const	raycaster = new THREE.Raycaster();
		const	up = new THREE.Vector3( 0, 1, 0 );
		let	altitude = 0;

		console.log( building );
		for ( const mesh of this.terrain) {

			raycaster.set(( building.boundingSphere?.center as THREE.Vector3 ), up );

			const	intersects = await new Promise<THREE.Intersection[]>(( resolve ) => {
				const	res = raycaster.intersectObject( mesh );
				resolve( res );
			});
			
			if ( intersects.length > 0 ) {
				altitude = intersects[0].point.y;
				console.log( "intersection ici: %f", altitude );
				break;
			};
		};

		return ( altitude );
	};

	public async	Building() {
		const	mat = new THREE.MeshBasicMaterial({ color: 'red', side: 2, wireframe: false });
		const	url = Fetch.urlBuilder(HugoGeo.getBbox( [...this.center], 0.5 ));
		const	buildings = await this.getBuildings( url );
		const	geometries: THREE.ExtrudeGeometry[] = [];
		const	meshes: THREE.Mesh[] = [];
		const	unitsPerMeters = HugoGeo.getUnitsPerMeters( 10, 5.00 );
		for ( let i = 0; i < buildings.length; i++ ) {
			const	featureElement = buildings[i];
			const	height = featureElement.properties.hauteur ? featureElement.properties.hauteur / 100 : 0.01;
			const	building = await this.addBuilding( featureElement.geometry.coordinates, height );

			geometries.push( building );
		};

		for ( let i = 0; i < geometries.length; i++ ) {
			const	mesh = new THREE.Mesh( geometries[i], mat );
			meshes.push( mesh );
		};

		const	buildingGroup = HugoGeo.createDemGroups( 'Buildings', meshes );

		return ( buildingGroup );
	};

	public async	addBuilding( coords: number[][][][], height: number ): Promise<THREE.ExtrudeGeometry> {
		const	holes = [];
		let		shape: THREE.Shape | undefined;

		for ( let i = 0; i < coords.length; i++ ) {//ex 2
			const	el = coords[i];

			if ( i === 0 ) {
				shape = this.genShape( el );
			} else {
				holes.push( this.genShape( el ) );
			};
		};

		if ( shape ) {
			for ( let i = 0; i < holes.length; i++ ) {
				shape?.holes.push( holes[i] );
			};
		} else {
			throw new Error( "Shape was not init" );
		};

		const	geometry = await this.genGeometry( shape, { curveSegment: 1, depth: 0.1 * height, bevelEnabled: false } );

		return ( geometry );
	};

	public	genShape( points: number[][][] ): THREE.Shape {
		const	shape = new THREE.Shape();

		for ( let i = 0; i < points.length; i++ ) {
			const	elPoint = points[i];//

			elPoint.forEach(( point, y ) => {
				const	normPnt = getWorldCoords( point[1], point[0], point[2], this.center );

				if ( y === 0 ) {
					shape.moveTo( normPnt.world.x, normPnt.world.y );
				} else {
					shape.lineTo( normPnt.world.x, normPnt.world.y );
				};
			});
		};

		return ( shape );
	};

	public async	genGeometry( shape: THREE.Shape, extrudeSettings: { curveSegment: number, depth: number, bevelEnabled: boolean } ): Promise<THREE.ExtrudeGeometry> {
		const	geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
		
		geometry.rotateX(Math.PI / 2);
		geometry.rotateZ(Math.PI);
		geometry.computeBoundingSphere();
		const	altitude = await this.getAltitude( geometry );
		console.log(altitude);
		geometry.translate(0, altitude, 0);

		return ( geometry );
	};

};

export default	Buildings;
