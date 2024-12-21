import Source from "../Source/Source";
import WMTSSource from "../Source/WMTSSource";
import * as THREE from 'three';
import { Coordinate } from "../Coordinate/Coordinate";

class ColorLayer {
	source : Source;

	constructor( source: Source ) {
		this.source = source;
	};

	//servira a la bonne comprehension des tuiles 
	public async	fetchColorWmts(): Promise<THREE.Mesh[]> {
		return new Promise( async ( resolve ) => {
			let	textureResult: THREE.Mesh[] = [];
	
			if ( this.source.isWmtsSource ) {
				const urls = ( this.source as WMTSSource ).neighborsUrls;
				const promises = urls.map(async ( url ) => {
					const response = await fetch( url.url );
					const blob = await response.blob();
					const imageBitmap = await createImageBitmap( blob );
					const texture = new THREE.CanvasTexture( imageBitmap );
					const material = new THREE.MeshBasicMaterial({ map: texture });
					const geometry = new THREE.PlaneGeometry( 256, 256 );
					const mesh = new THREE.Mesh( geometry, material );

					// Calculer la position géoréférencée
					const bbox = (this.source as WMTSSource).tileToBBox(url.zoomPos.tileCol, url.zoomPos.tileRow);
					const centerLat = (bbox.minLat + bbox.maxLat) / 2;
					const centerLon = (bbox.minLon + bbox.maxLon) / 2;
					const mercator = new Coordinate({ latitude: centerLat, longitude: centerLon, altitude: 0 }, this.source.center ).ComputeWorldCoordinate();
					const centerMercator = new Coordinate({ latitude: this.source.center[0], longitude: this.source.center[1], altitude: 0 },  [this.source.center[0], this.source.center[1] ]).ComputeWorldCoordinate();
					mesh.position.set(mercator.world.x - centerMercator.world.x, 0, mercator.world.y - centerMercator.world.y);

					textureResult.push( mesh );
				});
	
				await Promise.all( promises );
				console.log( textureResult );
				resolve( textureResult )
			};
		});
	};
};

export default ColorLayer;
