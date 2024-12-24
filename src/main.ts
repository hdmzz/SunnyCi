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

let	CENTER: [lat: number, lon: number] = [45.757674175809704,4.832085939503834];
const	extent = new Extent( CENTER, RADIUS, 14, "EPSG:4326" );
extent.asTile();

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

	const	buildingSource = new WFSSource( CENTER, RADIUS, {
		layer: "BDTOPO_V3:batiment",
	});

	const	buildings =  await new Buildings(CENTER, RADIUS, 0, view, buildingSource, terrain.children as THREE.Mesh[], extent ).Building()
	buildings.rotateY(Math.PI)
	
	
	view.addLayer( buildings );
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
