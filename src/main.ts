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

const	RADIUS = 5.00;
let	CENTER: [lat: number, lon: number] = [45.7736192,4.8398336];
const	gridHelper = new THREE.GridHelper(60, 150, new THREE.Color(0x555555), new THREE.Color(0x333333));
const	container = document.getElementById('viewerDiv') as HTMLDivElement;

const	view = new View( container )



const	tgeo = new HugoGeo({
	tokenMapBox: 'pk.eyJ1IjoiZWwtb3NvIiwiYSI6ImNsbzRhbXhzcDAwMzMydXBoYmJxbW11ZjMifQ.fw-spr6aqF4LYqfNKiGw_w',
	tokenOpenTopo: '1beba77d1c58069e0c5b7ac410586699',
	
});


async function	loadTerrain() {
	
	const	elevationSource = new WMSRSource( CENTER, RADIUS, {
		format: "png",
		requestType: "ELEVATION",
	});
	
	const testWmts = new WMTSSource( CENTER, RADIUS, {
		layer: "ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES",
		format: "image/x-bil;bits=32",
		style: "normal",
		tileMatrixSet: "WGS84G",
		zoom: 14,
	});

	const	eleLayerTestWmts = await new ElevationLayer( testWmts ).fetchBil();

	//view.addLayer(eleLayerTestWmts.terrain as THREE.Mesh)

	const	buildingSource = new WFSSource( CENTER, RADIUS, {
		layer: "BDTOPO_V3:batiment",
	});

	const	buildings =  await new Buildings( CENTER, RADIUS, view, buildingSource ).Building();
	buildings.rotateY(Math.PI)
	//buildings.rotateY(Math.PI)
	
	view.addLayer( buildings, eleLayerTestWmts);
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
		alert('not a valid center bitch!');
	};
});
