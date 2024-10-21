import * as THREE from 'three';
import { GeoJSONFeature, GeoJSONFeatureCollection } from '../type';
import HugoGeo from '../HugoGeo';
import { Coordinate } from '../Coordinate/Coordinate';
import Fetch from '../Fetcher/Fetch';

class	Buildings {
	
	data: GeoJSONFeature | {};
	buildingsArray: [];
	center: [lat: number, lon: number];
	radius: number;
	
	constructor( center: [lat:number, lon: number], radius: number ) {
		this.data = {};
		this.buildingsArray = [];
		this.center = center;
		this.radius = radius;
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

	
	public async	Building() {
		const	meshes: THREE.Mesh[] = [];
		const	url = Fetch.urlBuilder(HugoGeo.getBbox( [...this.center], 1 ));
		const	buildings = await this.getBuildings( url );
		//const	buildings = await fetch("../../data/onlyOneBuilding.json").then(res => res.json())
		const	geometries: THREE.ExtrudeGeometry[] = [];
		const	mat = new THREE.MeshBasicMaterial({ color: 'red', side: 2, wireframe: false });


		for ( let i = 0; i < buildings.length; i++ ) {
			const	featureElement = buildings[i];
			const	height = featureElement.properties.hauteur ? featureElement.properties.hauteur / 100 : 0.01;
			const	groundAltitude = featureElement.properties.altitude_minimale_sol ? featureElement.properties.altitude_minimale_sol / 705.9 : 1;
			const	building = this.addBuilding( featureElement.geometry.coordinates, height, groundAltitude );
			geometries.push( building );
		};

		for ( let i = 0; i < geometries.length; i++ ) {
			const	mesh = new THREE.Mesh( geometries[i], mat ); 
			meshes.push(mesh);
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
				const	normPnt = new Coordinate({ latitude: point[1], longitude: point[0] }, this.center as [number, number]).ComputeWorldCoordinate();
				console.log( normPnt );//normpnt contient les valurs xzy du point dans une instance de la classe Coordinate avec un objet world
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
		geometry.translate(-0.01, -0.005, altitude);
		geometry.rotateX(Math.PI / 2);
		geometry.rotateZ(Math.PI);
		geometry.computeBoundingSphere();
		return ( geometry );
	};

};

export default	Buildings;


/* 
	un building == {
    "type": "Feature",
    "id": "batiment.18362875",
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [ // number[][][][]
            [
                [
                    [
                        4.83607042,
                        45.77369876,
                        238.6
                    ],
                    [
                        4.8361345,
                        45.77376798,
                        238.6
                    ],
                    [
                        4.83617462,
                        45.77381326,
                        238.6
                    ],
                    [
                        4.83624813,
                        45.77377874,
                        238.6
                    ],
                    [
                        4.83626207,
                        45.7737722,
                        238.6
                    ],
                    [
                        4.83615921,
                        45.77365949,
                        238.6
                    ],
                    [
                        4.83607042,
                        45.77369876,
                        238.6
                    ]
                ]
            ]
        ]
    },
    "geometry_name": "geometrie",
    "properties": {
        "cleabs": "BATIMENT0000000240879442",
        "nature": "Indifférenciée",
        "usage_1": "Résidentiel",
        "usage_2": "Annexe",
        "construction_legere": false,
        "etat_de_l_objet": "En service",
        "date_creation": "2010-07-15T07:31:40.330Z",
        "date_modification": "2019-03-15T08:13:01.848Z",
        "date_d_apparition": "1790-01-01Z",
        "date_de_confirmation": null,
        "sources": null,
        "identifiants_sources": "",
        "methode_d_acquisition_planimetrique": "BDParcellaire recalée",
        "methode_d_acquisition_altimetrique": "Corrélation",
        "precision_planimetrique": 3,
        "precision_altimetrique": 1,
        "nombre_de_logements": 8,
        "nombre_d_etages": 6,
        "materiaux_des_murs": "20",
        "materiaux_de_la_toiture": "10",
        "hauteur": 25.6,
        "altitude_minimale_sol": 213.1,
        "altitude_minimale_toit": 238.6,
        "altitude_maximale_toit": 239.5,
        "altitude_maximale_sol": 218.5,
        "origine_du_batiment": "Cadastre",
        "appariement_fichiers_fonciers": "A 1.0",
        "identifiants_rnb": "ZWHEZKQSSXSC"
    },
    "bbox": [
        4.83607042,
        45.77365949,
        4.83626207,
        45.77381326
    ]
}
*/
