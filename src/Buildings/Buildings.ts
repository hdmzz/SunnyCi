import * as THREE from 'three';
import { BboxType, GeoJSONFeature, GeoJSONFeatureCollection } from '../type';
import HugoGeo from '../HugoGeo';
import { Coordinate } from '../Coordinate/Coordinate';
import View from '../View/View';
import Source from '../Source/Source';

const	coordinateCache: { [key: string]: Coordinate } = {};

export function	getWorldCoords( lat: number, lon: number, alt: number, center: [number, number] ) {
	const	cacheKey: string = `${lat},${lon},${alt},${center[0]},${center[1]}`;

	if ( coordinateCache[cacheKey] ) {
		return ( coordinateCache[cacheKey] );
	} else {
		coordinateCache[cacheKey] = new Coordinate({ latitude: lat, longitude: lon, altitude: alt }, center as [number, number]).ComputeWorldCoordinate();
		return	( coordinateCache[cacheKey] );
	};
};

class	Buildings {
	data: GeoJSONFeature | {};
	buildingsArray: [];
	center: [lat: number, lon: number];
	radius: number;
	unitsPerMeter: number;
	view: View;
	source: Source;
	bbox: BboxType;
	terrain: THREE.Mesh;
	raycaster: THREE.Raycaster;

	constructor( center: [lat:number, lon: number], radius: number, unitsPerMeter: number,view: View, source: Source, terrain: THREE.Mesh ) {
		this.data = {};
		this.buildingsArray = [];
		this.center = center;
		this.radius = radius;
		this.view = view;
		this.source = source;
		this.bbox = HugoGeo.getBbox( center, radius );
		this.unitsPerMeter  = unitsPerMeter;
		this.terrain = terrain;
		this.raycaster = new THREE.Raycaster();
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

	public	shortest( point: THREE.Vector3, terrain: THREE.Mesh): number {
		const	terrainVertices = terrain.geometry.getAttribute('position').array;
		let		res: number | boolean = 0;
		let		resDis = 100000;
		
		for ( let i = 0; i < terrainVertices.length; i += 3 ) {
			let	dis = Math.sqrt((( point.x - terrainVertices[i] ) ** 2 ) + (( point.z - terrainVertices[i + 1] ) ** 2 ));

			if ( dis <= resDis ) {
				resDis = dis;
				res = terrainVertices[i + 2];
			};
		};

		return ( res );
	};

	public async	Building() {
		const	mat = new THREE.MeshPhongMaterial({ color: 'red', side: 2, wireframe: false });
		const	url = this.source.url;
		const	buildings = await this.getBuildings( url as string );
		const	geometries: THREE.ExtrudeGeometry[] = [];
		const	meshes: THREE.Mesh[] = [];

		for ( let i = 0; i < buildings.length; i++ ) {//!pb a regler asynchrone toute les altitude ne sont pas calcuees du premier coup 
			const	featureElement = buildings[i];
			const	height = featureElement.properties.hauteur ? featureElement.properties.hauteur : 0.01;
			const	altitude = featureElement.properties.altitude_minimale_sol / 255 * 55;
			const	building = await this.addBuilding( featureElement.geometry.coordinates, height, altitude );
			
			geometries.push( building );
		};

		for ( let i = 0; i < geometries.length; i++ ) {
			const	mesh = new THREE.Mesh( geometries[i], mat );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			meshes.push( mesh );
		};

		const	buildingGroup = HugoGeo.createDemGroups( 'Buildings', meshes );

		return ( buildingGroup );
	};

	public async	addBuilding( coords: number[][][][], height: number, altitude: number ): Promise<THREE.ExtrudeGeometry> {
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

		const	geometry = await this.genGeometry( shape, { curveSegment: 1, depth: -0.5 * height, bevelEnabled: false, altitude } );

		return ( geometry );
	};

	public	genShape( points: number[][][] ): THREE.Shape {
		const	shape = new THREE.Shape();

		for ( let i = 0; i < points.length; i++ ) {
			const	elPoint = points[i];

			elPoint.forEach(( point, y ) => {
				const	mercator = new Coordinate({ latitude: point[1], longitude: point[0], altitude: point[2] }, this.center).ComputeWorldCoordinate();

				if ( y === 0 ) {
					shape.moveTo( mercator.world.x, mercator.world.y );
				} else {
					shape.lineTo( mercator.world.x, mercator.world.y );
				};
			});
		};

		return ( shape );
	};

	public async	genGeometry( shape: THREE.Shape, extrudeSettings: { curveSegment: number, depth: number, bevelEnabled: boolean, altitude: number } ): Promise<THREE.ExtrudeGeometry> {
		return new Promise( async ( resolve ) => {
			await new Promise(( resolve ) => setTimeout( resolve, 0 ));
			const	geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
			
			geometry.rotateX(Math.PI / 2 );
			//geometry.rotateZ(Math.PI);
			geometry.rotateY( -Math.PI );
			geometry.computeBoundingSphere();
			const	altitude = await this.getAltitude( geometry );
			//console.log( altitude );
			geometry.translate(0, altitude , 0);
			resolve( geometry );
		});
	};
	public async	getAltitude( building: THREE.ExtrudeGeometry ): Promise<number>
	{
		return new Promise( async ( resolve, reject ) => {
			await new Promise(( resolve ) => setTimeout( resolve, 0 ));
			let		altitude = 0;
			const	up = new THREE.Vector3( 0, 1, 0 );
			//const ray = new THREE.Ray( building.boundingSphere?.center, up );
			//;
			//this.view.addLayer(this.createRayHelper( ray ))
			this.raycaster.set( building.boundingSphere?.center as THREE.Vector3, up );
			const	intersects  = this.raycaster.intersectObject( this.terrain );
			if ( intersects.length > 0) {
				altitude = intersects[0].distance;
				resolve( altitude );
			};
			resolve( altitude );
		});
	};

	private createRayHelper(ray: THREE.Ray): THREE.Line {
		const length = 100; // Longueur du rayon
		const geometry = new THREE.BufferGeometry().setFromPoints([
			ray.origin,
			ray.origin.clone().add(ray.direction.clone().multiplyScalar(length))
		]);
		const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
		return new THREE.Line(geometry, material);
	}
};

export default	Buildings;
