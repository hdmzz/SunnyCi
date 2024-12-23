import * as THREE from "three";
import View from "./View/View";
import Buildings from "./Buildings/Buildings";
import WFSSource from "./Source/WFSSource";
import WMTSSource from "./Source/WMTSSource";
import WMSRSource from "./Source/WMSRSource";
import ElevationLayer from "./Layer/ElevationLayer";
import Extent from "./core/Extent";
import proj4 from "proj4";

const	RADIUS = 2;
const	container = document.getElementById('viewerDiv') as HTMLDivElement;

const	gridHelper = new THREE.GridHelper(60, 150, new THREE.Color(0x555555), new THREE.Color(0x333333));
const	view = new View( container )

view.addLayer( gridHelper );

let	CENTER: [lat: number, lon: number] = [45.797028770581974,4.830430105427541];
const	extent = new Extent( CENTER, RADIUS, 14, "EPSG:4326" );
extent.asTile();

const WGS84 = "EPSG:4326"; // Latitude/Longitude
const WebMercator = "EPSG:3857"; 
function reproject(lat: number, lon: number): [number, number] {
	return proj4(WGS84, WebMercator, [lon, lat]);
  }
async function	loadTerrain() {

	const testWmts = new WMTSSource( extent, {
		layer: "ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES",
		format: "image/x-bil;bits=32",
		style: "normal",
		tileMatrixSet: "WGS84G",
		zoom: 14,
	});

	const	eleLayer = new ElevationLayer( testWmts );
	const	terrain = await eleLayer.fetchBil();
	terrain.rotateY( Math.PI);
	view.addLayer( terrain );

	// Exemple de projection d'un objet 3D sur le modèle de terrain
	const lat = 45.76231491666253;
	const lon = 4.822574395693264;
	const position = reproject(45.799005450976146,4.836483745754241)
	const center = reproject(...CENTER)
	const boxGeometry = new THREE.BoxGeometry(50, 50, 50);
	const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
	const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

	boxMesh.position.set((position[0] - center[0]), 200, -(position[1] - center[1]));
	boxMesh.rotateZ(Math.PI)
	view.addLayer(boxMesh);
	
	//const	colorLayer = await new ColorLayer( colorLayerSource ).fetchColorWmts();
	
	//const	eleLayerTestWmts = await new ElevationLayer( testWmts ).fetchBil();

	//view.addLayer( eleLayerTestWmts )

	//const	buildingSource = new WFSSource( CENTER, RADIUS, {
	//	layer: "BDTOPO_V3:batiment",
	//});

	//const	buildings =  await new Buildings(CENTER, RADIUS, 0, view, buildingSource, eleLayerTestWmts.children as Mesh ).Building()
	//buildings.rotateY(Math.PI)
	
	
	//view.addLayer( buildings );
};


loadTerrain();

const	goButton = document.getElementById( "goButton" ) as HTMLButtonElement;
const	coordsInput = document.getElementById( "coordsInput" ) as HTMLInputElement;

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
