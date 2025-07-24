import * as THREE from 'three';
import { BboxType, GeoJSONFeature, GeoJSONFeatureCollection } from '../type';
import HugoGeo from '../HugoGeo';
import { Coordinate } from '../Coordinate/Coordinate';
import View from '../View/View';
import Source from '../Source/Source';
import Extent from '../core/Extent';

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
	bbox: BboxType;
	terrain: THREE.Mesh[];
	raycaster: THREE.Raycaster;
	extent: Extent;

	constructor( center: [lat:number, lon: number], radius: number,view: View, source: Source, terrain: THREE.Mesh[], extent: Extent ) {
		this.data = {};
		this.buildingsArray = [];
		this.center = center;
		this.radius = radius;
		this.view = view;
		this.source = source;
		this.bbox = HugoGeo.getBbox( center, radius );
		this.terrain = terrain;
		this.raycaster = new THREE.Raycaster();
		this.extent = extent;
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
		const	mat = new THREE.MeshPhongMaterial({ color: 'green', side: 2, wireframe: false });
		const	url = this.source.url;
		const	buildings = await this.getBuildings( url as string );
		const	meshes: THREE.Mesh[] = [];

		const geometryPromises = buildings.map(( featureElement ) => {
			const	height = featureElement.properties.hauteur ? featureElement.properties.hauteur : 0.01;
			const	altitude = featureElement.properties.altitude_minimale_sol;
			return this.addBuilding( featureElement.geometry.coordinates, height, altitude );
		});

		const geometries: THREE.ExtrudeGeometry[] = await Promise.all( geometryPromises );
			
		for ( let i = 0; i < geometries.length; i++ ) {
			const	mesh = new THREE.Mesh( geometries[i], mat );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			mesh.userData = buildings[i].properties;
			meshes.push( mesh );
		};

		const	buildingGroup = HugoGeo.createThreeGroup( 'Buildings', meshes );

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

		const	geometry = await this.genGeometry( shape, { curveSegment: 1, depth: -height, bevelEnabled: false, altitude } );

		return ( geometry );
	};

	public	genShape( points: number[][][] ): THREE.Shape {
		const	shape = new THREE.Shape();

		for ( let i = 0; i < points.length; i++ ) {
			const	elPoint = points[i];

			elPoint.forEach(( point, idx ) => {
				const	[x, y] = this.extent.getProjectCoords( point[1], point[0] );

				if ( idx === 0 ) {
					shape.moveTo( x, y );
				} else {
					shape.lineTo( x, y );
				};
			});
		};

		return ( shape );
	};

	public	genGeometry( shape: THREE.Shape, extrudeSettings: { curveSegment: number, depth: number, bevelEnabled: boolean, altitude: number } ): THREE.ExtrudeGeometry
	{
		const	geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );

		geometry.rotateX(Math.PI / 2 );
		geometry.rotateY( -Math.PI );
		geometry.translate(0, extrudeSettings.altitude + 0.5 , 0);
		return ( geometry );
	};
};

export default	Buildings;
