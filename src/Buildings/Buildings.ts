import * as THREE from 'three';
import { GeoJSONFeature, GeoJSONFeatureCollection } from '../type';
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
	view: View;
	source: Source;

	constructor( center: [lat:number, lon: number], radius: number, view: View, source: Source ) {
		this.data = {};
		this.buildingsArray = [];
		this.center = center;
		this.radius = radius;
		this.view = view;
		this.source = source;
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
		console.log(url);
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

		const	geometry = await this.genGeometry( shape, { curveSegment: 1, depth: 0.1 * height, bevelEnabled: false, altitude } );

		return ( geometry );
	};

	public	genShape( points: number[][][] ): THREE.Shape {
		const	shape = new THREE.Shape();

		for ( let i = 0; i < points.length; i++ ) {
			const	elPoint = points[i];

			elPoint.forEach(( point, y ) => {
				const	normPnt = getWorldCoords( point[1], point[0], point[2], this.center );

				if ( y === 0 ) {
					shape.moveTo( normPnt.world.x, normPnt.world.y );
				} else {
					shape.lineTo( normPnt.world.x, normPnt.world.y);
				};
			});
		};

		return ( shape );
	};

	public async	genGeometry( shape: THREE.Shape, extrudeSettings: { curveSegment: number, depth: number, bevelEnabled: boolean, altitude: number } ): Promise<THREE.ExtrudeGeometry> {
		return new Promise( async ( resolve ) => {
			await new Promise(( resolve ) => setTimeout( resolve, 0 ));
			const	geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
			
			geometry.rotateX(Math.PI /2 );
			//geometry.rotateZ(Math.PI / 2);
			//geometry.rotateY(Math.PI * 4);
			geometry.translate(0, extrudeSettings.altitude, 0);

			geometry.computeBoundingSphere();
	
			resolve( geometry );
		});
	};

};

export default	Buildings;
