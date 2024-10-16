import * as THREE from 'three';
import Utils from './Utils/geoUtils';
import cover from '@mapbox/tile-cover';
import RgbModel from './Models/RgbModel';
import { PolygonFeature } from './type';

class	HugoGeo {
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
		

		return (HugoGeo.createDemGroups( "dem-rgb", meshes ));
	}

	/**
	 * @origin = lat lon coordonnées
	 * @radius dans l'exemple 5 corresond au rayon de la tuile en km
	 * @zoom dans l'exemple 12 correspond a la valeur du zoom de la camera
	 * le res de la promesse doit etre donne au watcher
	 */
	private	getTerrain( origin: [lat: number, lon:  number], radius: number, zoom: number ): Promise<THREE.Mesh[]>{
		return new Promise(async ( res, rej ) => {
			try {
				const	watcher = this.createWatcher( res );
				const	unitsSide = this.unitsSide;
				const	unitsPerMeters = HugoGeo.getUnitsPerMeters( this.unitsSide, radius );
				const	projectCoords = ( coord: [number, number], nw: [number, number], se: [number, number] ) => {
					return HugoGeo.projectCoord( unitsSide, coord, nw, se );
				};
				const	{ tokenMapBox: token, apiSatellite, apiRgb } = this;
				const	bbox = HugoGeo.getBbox( origin, radius );
				const	zoomPositionCovered = HugoGeo.getZoomPositionCovered( bbox.feature, zoom );
				const	rgbModel = new RgbModel( unitsPerMeters, projectCoords, token, apiSatellite, apiRgb, watcher );

				//la promesse sera resolu par la fonction fetch de rgb model  qui qpplera la finalcallback qui n'est autre que la  resolve qu'on lui a passe a la creation du watcher
				rgbModel.fetch( zoomPositionCovered, bbox );
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
				},
			}],
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

	static	getZoomPositionCovered( polygon: PolygonFeature, zoom: number ): number[][] {
		const	limits = {
			min_zoom: zoom,
			max_zoom: zoom,
		};

		console.log( cover )
		
		return ( cover.tiles( polygon.geometry as GeoJSON.Geometry, limits ) )
		.map(( [x, y, z] ) => [z, x, y]);
	};
	
	private	createWatcher( finalCallBack:(value: THREE.Mesh<THREE.BufferGeometry>[]) => void): (payload: { what: string, data: THREE.Mesh[] }) => void {
		let		isRgbPending: boolean = true;
		const	ret: { value: THREE.Mesh[] } = { value: [] }; // rgbDem will contain all the data
		const	isDone = () => !isRgbPending;

		if ( isDone() ) {
			finalCallBack( ret.value );
		}

		return (( payload: { what: string, data: THREE.Mesh[] } ) => {
			const	{ what, data } = payload;

			if ( what === 'rgb-dem' ) {
				isRgbPending = false;
				ret.value = data;
			};
			if ( isDone() ) {
				console.log( 'watcher says all shit is done' );
				finalCallBack( ret.value );
			};
		});
	};
};

export default	HugoGeo;
