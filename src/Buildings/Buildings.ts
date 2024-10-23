import * as THREE from 'three';
import { GeoJSONFeature, GeoJSONFeatureCollection } from '../type';
import HugoGeo from '../HugoGeo';
import { Coordinate } from '../Coordinate/Coordinate';
import Fetch from '../Fetcher/Fetch';

const	coordinateCahe: { [key: string]: Coordinate } = {};

export function	getWorldCoords( lat: number, lon: number, alt: number, center: [number, number] ) {
	const	cacheKey: string = `${lat},${lon},${center[0]},${center[1]}`;

	if ( coordinateCahe[cacheKey] ) {
		return ( coordinateCahe[cacheKey] );
	} else {
		coordinateCahe[cacheKey] = new Coordinate({ latitude: lat, longitude: lon }, center as [number, number]).ComputeWorldCoordinate();
		return	coordinateCahe[cacheKey];
	};
};

class	Buildings {
	
	data: GeoJSONFeature | {};
	buildingsArray: [];
	center: [lat: number, lon: number];
	radius: number;
	terrain: THREE.Mesh[];
	constructor( center: [lat:number, lon: number], radius: number, terrain: THREE.Group ) {
		this.data = {};
		this.buildingsArray = [];
		this.center = center;
		this.radius = radius;
		this.terrain = terrain.children as THREE.Mesh[];
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

	public	shortest( target: Coordinate , arr: THREE.TypedArray ): number| boolean {
		let	resDis = 10000;
		let	res: number | boolean = false;

		for ( let i  = 0; i < arr.length; i+=3 ) {
			const	dis = Math.sqrt((target.world.x - arr[i])**2 + (target.world.z - arr[i + 2])**2);

			if ( dis <= resDis ) {
				resDis = dis;
				res = arr[i + 1];
			};
		};

		return ( res );
	};

	public async	getAltitude( el: number[][][] ): Promise<number> {
		//je doils trouver la mesh qui contient le point
		const	normpoint = getWorldCoords( el[0][0][1], el[0][0][0], this.center );

		this.terrain.forEach(( mesh, index ) => {
			let	firstX, lastX, firstY, lastY;

			firstX = mesh.geometry.attributes.position.array[0];
			lastX = mesh.geometry.attributes.position.array[mesh.geometry.attributes.position.array.length - 3];
			firstY = mesh.geometry.attributes.position.array[2];
			lastY = mesh.geometry.attributes.position.array[mesh.geometry.attributes.position.array.length - 1];

			if ( normpoint.world.z >= firstX && normpoint.world.z <= lastX ) {
				const	dem = this.shortest( normpoint, mesh.geometry.attributes.position.array );
				if ( dem !== false ) {
					return ( dem );
				}
			};
		});

		return ( 0 );
	};

	public async	Building() {
		const	mat = new THREE.MeshBasicMaterial({ color: 'red', side: 2, wireframe: false });
		const	url = Fetch.urlBuilder(HugoGeo.getBbox( [...this.center], 0.5 ));
		const	buildings = await this.getBuildings( url );
		const	geometries: THREE.ExtrudeGeometry[] = [];
		const	meshes: THREE.Mesh[] = [];

		for ( let i = 0; i < buildings.length; i++ ) {
			const	featureElement = buildings[i];
			const	height = featureElement.properties.hauteur ? featureElement.properties.hauteur / 100 : 0.01;
			const	groundAltitude = featureElement.properties.altitude_minimale_sol ? featureElement.properties.altitude_minimale_sol / 705.9 : 1;
			const	building = this.addBuilding( featureElement.geometry.coordinates, height, groundAltitude );
			const	altitude = await this.getAltitude( featureElement.geometry.coordinates[0] );
			building.translate( 0, 0, altitude );
			geometries.push( building );
		};

		for ( let i = 0; i < geometries.length; i++ ) {
			const	mesh = new THREE.Mesh( geometries[i], mat ); 
			meshes.push( mesh );
		};

		const	buildingGroup = HugoGeo.createDemGroups( 'Buildings', meshes );

		return ( buildingGroup );
	};

	public	addBuilding( coords: number[][][][], height: number, groundAltitude: number ): THREE.ExtrudeGeometry {
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

		const	geometry = this.genGeometry( shape, { curveSegment: 1, depth: 0.1 * height, bevelEnabled: false }, groundAltitude );

		return ( geometry );
	};

	public	genShape( points: number[][][] ): THREE.Shape {
		const	shape = new THREE.Shape();

		for ( let i = 0; i < points.length; i++ ) {
			const	elPoint = points[i];//

			elPoint.forEach(( point, y ) => {
				const	normPnt = getWorldCoords( point[1], point[0], this.center );

				if ( y === 0 ) {
					shape.moveTo( normPnt.world.x, normPnt.world.z );
				} else {
					shape.lineTo( normPnt.world.x, normPnt.world.z );
				};
			});
		};

		return ( shape );
	};

	public	genGeometry( shape: THREE.Shape, extrudeSettings: { curveSegment: number, depth: number, bevelEnabled: boolean }, altitude: number ): THREE.ExtrudeGeometry {
		const	geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );

		geometry.computeBoundingBox();
		//geometry.translate(-0.01, -0.005, altitude);
		geometry.rotateX(Math.PI / 2);
		geometry.rotateZ(Math.PI);
		geometry.computeBoundingSphere();

		return ( geometry );
	};

};

export default	Buildings;
