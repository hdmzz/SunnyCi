import * as THREE from "three";
import View from "./View/View";
import Buildings from "./Buildings/Buildings";
import WFSSource from "./Source/WFSSource";
import WMTSSource from "./Source/WMTSSource";
import ElevationLayer from "./Layer/ElevationLayer";
import Extent from "./core/Extent";
import { GeolocationService } from "./Services/GeolocationService";

const	RADIUS = 1;
const	container = document.getElementById('viewerDiv') as HTMLDivElement;

let		CENTER: [lat: number, lon: number] = [45.757674175809704,4.832085939503834];
//const position = await GeolocationService.getCurrentPosition();
//const { latitude, longitude } = position.coords;
//if ( latitude && longitude ) {
//	CENTER = [latitude, longitude];
//};
const view = new View( container, CENTER );
const	gridHelper = new THREE.GridHelper(100)
view.addLayer( "helper", gridHelper );

async function	loadTerrain()
{
	const	extent = new Extent( CENTER, RADIUS, "EPSG:4326" );

	const	testWmts = new WMTSSource( extent, {
		layer: "ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES",
		format: "image/x-bil;bits=32",
		style: "normal",
		tileMatrixSet: "WGS84G",
		neighbors: false,
		zoom: 14,
	});

	const	testTexture = new WMTSSource( extent, {
		layer: "ORTHOIMAGERY.ORTHOPHOTOS",
		format: "image/jpeg",
		style: "normal",
		tileMatrixSet: "PM",
		neighbors: false,
		zoom: 16,
	});

	console.log( testTexture );

	const	eleLayer = new ElevationLayer( testWmts );
	const	terrain = await eleLayer.fetchBil();
	terrain.rotateY( Math.PI);
	view.addLayer( "terrain", terrain );

	const	buildingSource = new WFSSource( CENTER, RADIUS, {
		layer: "BDTOPO_V3:batiment",
	});

	const	buildings = await new Buildings(CENTER, RADIUS, 0, view, buildingSource, terrain.children as THREE.Mesh[], extent ).Building();
	buildings.rotateY( Math.PI );
	
	
	view.addLayer( "buildings", buildings );
};


		loadTerrain();

		const goButton = document.getElementById("goButton") as HTMLButtonElement;
		const coordsInput = document.getElementById("coordsInput") as HTMLInputElement;

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
