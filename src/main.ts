import * as THREE from "three";
import HugoGeo from "./HugoGeo";
import View from "./View/View";
import Buildings from "./Buildings/Buildings";
import WFSSource from "./Source/WFSSource";
import WMTSSource from "./Source/WMTSSource";
import WMSSource from "./Source/WMSRSource";
import WMSRSource from "./Source/WMSRSource";
import WMSVSource from "./Source/WMSVSource";
import { color } from "three/webgpu";
import ElevationLayer from "./Layer/ElevationLayer";
import { Coordinate, latLonToMeters } from "./Coordinate/Coordinate";
import { GeolocationService } from "./Services/GeolocationService";
import { center } from "turf";
import ColorLayer from "./Layer/ColorLayer";
import { DragControls } from "three/examples/jsm/Addons.js";

const	RADIUS = 500;
const	container = document.getElementById('viewerDiv') as HTMLDivElement;

const	gridHelper = new THREE.GridHelper(60, 150, new THREE.Color(0x555555), new THREE.Color(0x333333));
const	view = new View( container )

view.addLayer( gridHelper );

const	tgeo = new HugoGeo({
	tokenMapBox: 'pk.eyJ1IjoiZWwtb3NvIiwiYSI6ImNsbzRhbXhzcDAwMzMydXBoYmJxbW11ZjMifQ.fw-spr6aqF4LYqfNKiGw_w',
	tokenOpenTopo: '1beba77d1c58069e0c5b7ac410586699',
	unitsSide: 1000,
	
});

const	UNITS_PER_METER = HugoGeo.getUnitsPerMeters( 1000, RADIUS );

let	CENTER: [lat: number, lon: number] = [45.76825158302504,4.823992989011319];
async function	loadTerrain() {
	
	const	elevationSource = new WMSRSource( CENTER, RADIUS, {
		format: "png",
		epsg: "EPSG:4326",
		layer: "", 
		style: "",
	});
	
	const testWmts = new WMTSSource( CENTER, RADIUS, {
		layer: "ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES",
		format: "image/x-bil;bits=32",
		style: "normal",
		tileMatrixSet: "WGS84G",
		zoom: 13,
	});

	const	eleLayer = new ElevationLayer( testWmts );
	const	terrain = await eleLayer.fetchBil();

	view.addLayer( terrain );

	// Exemple de projection d'un objet 3D sur le modèle de terrain
	const lat = 45.76231491666253;
	const lon = 4.822574395693264;
	const position = eleLayer.projectLatLonToTerrain(lat, lon);
	const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
	const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
	const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
	boxMesh.position.copy(position);
	view.addLayer(boxMesh);
	
	//const	colorLayer = await new ColorLayer( colorLayerSource ).fetchColorWmts();
	
	//const	eleLayerTestWmts = await new ElevationLayer( testWmts ).fetchBil();

	//view.addLayer( eleLayerTestWmts )

	const	buildingSource = new WFSSource( CENTER, RADIUS, {
		layer: "BDTOPO_V3:batiment",
	});

	const	buildings =  await new Buildings(CENTER, RADIUS, 0, view, buildingSource, eleLayerTestWmts.children as Mesh ).Building()
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
