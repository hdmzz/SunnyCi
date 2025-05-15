import * as THREE from "three";
import View from "./View/View";
import Buildings from "./Buildings/Buildings";
import WFSSource from "./Source/WFSSource";
import WMTSSource from "./Source/WMTSSource";
import ElevationLayer from "./Layer/ElevationLayer";
import Extent from "./core/Extent";
import { GeolocationService } from "./Services/GeolocationService";
//import OSMSource from "./Source/OSMSource";
//import GeometryLayer from "./Layer/GeometryLayer";
//import RgbModel from "./Models/RgbModel";
import HugoGeo from "./HugoGeo";

const	RADIUS = 5;
const	container = document.getElementById('viewerDiv') as HTMLDivElement;

let		CENTER: [lat: number, lon: number] = [0,0];
const view = new View( container, CENTER );
const	gridHelper = new THREE.GridHelper(100, 100)
view.addLayer( "helper", gridHelper );

const geo = new HugoGeo({
	tokenMapBox: 'pk.eyJ1IjoiYWxhbnRnZW8tcHJlc2FsZXMiLCJhIjoiY2pzcTA4NjRiMTMxczQzcDFqa29maXk3bSJ9.pVYNTFKfcOXA_U_5TUwDWw',
	tokenOpenTopo: '',
	unitsSide: 10000,
});


async function	loadTerrain()
{
	if ( CENTER[0] === 0 && CENTER[1] === 0 ) {
		const position = await GeolocationService.getCurrentPosition();
		const { latitude, longitude } = position.coords;
		if ( latitude && longitude ) {
			CENTER = [latitude, longitude];
		};
	};
	const	extent = new Extent( CENTER, RADIUS, "EPSG:4326" );
	
	// Récupérer la source sélectionnée
	const sourceSelector = document.getElementById("sourceSelector") as HTMLSelectElement;
	const selectedSource = sourceSelector ? sourceSelector.value : "mapbox";
	
	let terrain;
	
	if (selectedSource === "mapbox") {
		// Utiliser Mapbox RGB
		terrain = await geo.getTerrainRgb(CENTER, 5, 15);
	} else {
		// Utiliser BIL DEM
		const testWmts = new WMTSSource( extent, {
			layer: "ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES",
			format: "image/x-bil;bits=32",
			style: "normal",
			tileMatrixSet: "WGS84G",
			neighbors: true,
			zoom: 14,
		});
		
		const eleLayer = new ElevationLayer( testWmts );
		terrain = await eleLayer.fetchBil();
		terrain.rotateY( Math.PI );
	}

	view.addLayer("terrain", terrain)
		
		const	buildingSource = new WFSSource( CENTER, RADIUS, {
			layer: "BDTOPO_V3:batiment",
		});
	
		const	buildings = await new Buildings(CENTER, RADIUS, view, buildingSource, terrain.children as THREE.Mesh[], extent ).Building();
		buildings.rotateY( Math.PI );
		
		view.addLayer( "buildings", buildings );

};

loadTerrain();

const goButton = document.getElementById("goButton") as HTMLButtonElement;
const coordsInput = document.getElementById("coordsInput") as HTMLInputElement;
const sourceSelector = document.getElementById("sourceSelector") as HTMLSelectElement;

goButton?.addEventListener("click", () => {
	const	coords = coordsInput.value.split( ',' ).map( Number );
	if ( coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
		view.removeLayer();
		CENTER = [coords[0], coords[1]];
		loadTerrain();
	} else {
		alert('not a valid center!');
	};
});

// Ajout d'un événement pour le changement de source
sourceSelector?.addEventListener("change", () => {
	view.removeLayer();
	loadTerrain();
});
