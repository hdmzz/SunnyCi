import * as THREE from 'three';
import Utils from './Utils/geoUtils';
import cover from '@mapbox/tile-cover';
import RgbModel from './Models/RgbModel';
import { rgb } from 'geotiff';

export type	BboxType = {
	feature: {
		type: string;
		geometry: {
			properties: {};
			type: string;
			coordinates: [number[][]];
		};
	};
	northWest: number[];
	southEast: number[];
};

type	PolygonFeature = {
	type: string;
	geometry: {
		properties: {};
		type: string;
		coordinates: [number[][]];
	};
};

class	ThreeGeo {
	public	unitsSide: number;
	public	isNode: boolean;
	public	apiVector: string;
	public	apiRgb: string;
	public	apiSatellite: string;
	private	tokenMapBox: string;

	constructor( opts: { tokenMapBox: string } ) {
		this.unitsSide = 1;
		this.isNode = false;
		this.apiVector = "mapbox-terrain-vector";
		this.apiRgb = "mapbox-terrain-rgb";
		this.apiSatellite = "mapbox-satellite";
		this.tokenMapBox = opts.tokenMapBox;
	};

	public async	getTerrainRgb( origin: [lat: number, lon:  number], radius: number, zoom: number ): Promise<THREE.Group> {
		const	meshes = await this.getTerrain(origin, radius, zoom);

		return (ThreeGeo.createDemGroups( "dem-rgb", meshes ));
	}

	/**
	 * @origin = lat lon coordonnées
	 * @radius dans l'exemple 5 corresond au rayon de la tuile en km
	 * @zoom dans l'exemple 12 correspond a la valeur du zoom de la camera
	 */
	private async	getTerrain( origin: [lat: number, lon:  number], radius: number, zoom: number ): Promise<THREE.Mesh[]>{
		return new Promise(async ( res, rej ) => {
			try {
				const	unitsSide = this.unitsSide;
				const	unitsPerMeters = ThreeGeo.getUnitsPerMeters( this.unitsSide, radius );
				const	projectCoords = ( coord: [number, number], nw: [number, number], se: [number, number] ) => {
					return ThreeGeo.projectCoord( unitsSide, coord, nw, se );
				};
				const	{ tokenMapBox: token, apiSatellite } = this;
				const	bbox = ThreeGeo.getBbox( origin, radius );
				const	zoomPositionCovered = ThreeGeo.getZoomPositionCovered( bbox.feature, zoom );
				const	rgbModel = new RgbModel(unitsPerMeters, projectCoords, token, apiSatellite );
				const terrain = await rgbModel.fetch( zoomPositionCovered, bbox );

				res ( terrain );
			} catch ( error ) {
				console.log( error );
				rej( error );
			};
		});
	};

	static	createDemGroups( name: string, objects: THREE.Mesh[] ): THREE.Group {
		const	group = new THREE.Group();

		if (!objects || objects.length === 0) {
			console.warn('No objects provided to createDemGroups');
			return group;
		}

		for ( let i = 0; i < objects.length; i++ ) {
			if (objects[i] instanceof THREE.Mesh) {
				objects[i].name = name;
				group.add( objects[i] );
			} else {
				console.warn(`Object at index ${i} is not a THREE.Mesh`);
			}
		}

		return group;
	};

	static	getUnitsPerMeters( unitsSide: number, radius: number ): number {
		return ( unitsSide / ( radius * Math.pow( 2, 0.5 ) * 1000 ) );
	};

	static	projectCoord( unitsSide: number, coord: [number, number], nw: [number, number], se: [number, number]) {
		return [ // lng, lat -> px, py
			unitsSide * (-0.5 + (coord[0]-nw[0]) / (se[0]-nw[0])),
			unitsSide * (-0.5 - (coord[1]-se[1]) / (se[1]-nw[1]))
		];
	};

	static	getBbox( origin: [number, number], radius: number ): {
		feature: {
			type: string;
			geometry: {
				properties: {};
				type: string;
				coordinates: [number[][]];
			};
		};
		northWest: number[];
		southEast: number[];
	} {
		const testPolygon = {
			"type": "FeatureCollection",
			"features": [{
				"type": "Feature",
				"geometry": {
					"properties": {},
					"type": "Polygon",
					"coordinates": [[]] as unknown as [number[][]]
				}
			}]
		};
		const polygon = testPolygon.features[0];
		const [w, s, e, n] = Utils.originRadiusToBbox(origin, radius);
		const nw = [w, n], se = [e, s];
		polygon.geometry.coordinates[0] = [
			nw, [se[0], nw[1]], se, [nw[0], se[1]], nw
		];
		return {
			feature: polygon,
			northWest: nw,
			southEast: se,
		};
	};

	static	getZoomPositionCovered( polygon: PolygonFeature, zoom: number ): Array<Array<number>> {
		const	limits = {
			min_zoom: zoom,
			max_zoom: zoom,
		};

		console.log( cover )

		return ( cover.tiles( polygon.geometry as GeoJSON.Geometry, limits ) )
		.map(( [x, y, z] ) => [z, x, y]);
	}
}

export default	ThreeGeo;
