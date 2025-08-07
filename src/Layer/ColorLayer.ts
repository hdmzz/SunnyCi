import Source from "../Source/Source";
import WMTSSource from "../Source/WMTSSource";
import * as THREE from 'three';
import { Coordinate } from "../Coordinate/Coordinate";
import Extent from "../core/Extent";
//https://maps.pole-emploi.fr/styles/osm-bright/#12/45.73737/4.85156
//zoom + lat +  lon
class ColorLayer {
	source : Source;

	constructor( source: Source ) {
		this.source = source;
	};

	public async	fetchColorWmts(): Promise<THREE.Group> {
		return new Promise( async ( resolve ) => {
			let	textureResult: THREE.Group = new THREE.Group();
	
			if ( this.source.isWmtsSource ) {
				const urls = ( this.source as WMTSSource ).neighborsUrls;
				const promises = urls.map(async ( url ) => {
					const response = await fetch( url.url );
					const blob = await response.blob();
					const imageBitmap = await createImageBitmap( blob );
					const texture = new THREE.CanvasTexture( imageBitmap );
					
					const bbox = Extent.tileToBBox( url.zoomPos.tileCol, url.zoomPos.tileRow, url.zoomPos.zoom );
					const minMercator = new Coordinate({latitude: bbox.minLat, longitude: bbox.minLon, altitude: 0}).project();
					const maxMercator = new Coordinate({latitude: bbox.maxLat, longitude: bbox.maxLon, altitude: 0}).project();
					const width = maxMercator.x - minMercator.x;
					const height = maxMercator.y - minMercator.y;

					console.log(width, height);
					
					const geometry = new THREE.PlaneGeometry(width, height);
					const material = new THREE.MeshBasicMaterial({ map: texture, side: 2 });
					const mesh = new THREE.Mesh( geometry, material );
					mesh.name = url.url;
					const tileCenterX = minMercator.x + width / 2;
                    			const tileCenterY = minMercator.y + height / 2;

					const viewCenterMercator = new Coordinate({ latitude: this.source.center[0], longitude: this.source.center[1], altitude: 0 }).project();
					mesh.position.set(tileCenterX - viewCenterMercator.x, 0, (tileCenterY - viewCenterMercator.y));
					mesh.rotation.x = -Math.PI / 2;

					textureResult.add( mesh );
				});
				
				await Promise.all( promises );
				const box = new THREE.Box3().setFromObject(textureResult);
				const center = new THREE.Vector3();
				box.getCenter(center);
				textureResult.position.sub(center);
				console.log( textureResult );
				resolve( textureResult )
			};
		});
	};
};

export default ColorLayer;
