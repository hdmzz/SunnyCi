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

const	RADIUS = 5.00;
let	CENTER: [lat: number, lon: number] = [45.7576556,4.8324322];
const	gridHelper = new THREE.GridHelper(60, 150, new THREE.Color(0x555555), new THREE.Color(0x333333));
const	container = document.getElementById('viewerDiv') as HTMLDivElement;

const	view = new View( container )

const	tgeo = new HugoGeo({
	tokenMapBox: 'pk.eyJ1IjoiZWwtb3NvIiwiYSI6ImNsbzRhbXhzcDAwMzMydXBoYmJxbW11ZjMifQ.fw-spr6aqF4LYqfNKiGw_w',
	tokenOpenTopo: '1beba77d1c58069e0c5b7ac410586699',
});

async function	loadTerrain() {
	//let	terrain = await tgeo.getTerrainRgb(
	//	CENTER,
	//	RADIUS,
	//	15,
	//);
	const	elevationSource = new WMSRSource( CENTER, RADIUS, {
		format: "png",
		requestType: "ELEVATION",
	});

	const	colorSource =  new WMSRSource(CENTER, RADIUS, {
		format: "image/jpeg",
		requestType: "",
	});

	//const urlColorOI = colorSource.wmsrColorUrlBuilder( "HR.ORTHOIMAGERY.ORTHOPHOTOS", "EPSG:4326" );

	//console.log(urlColorOI);

	const testWmts = new WMTSSource( CENTER, RADIUS, {
		layer: "ELEVATION.ELEVATIONGRIDCOVERAGE.SRTM3",
		format: "image/x-bil;bits=32",
		style: "normal",
		tileMatrixSet: "WGS84G_1_10",
		zoom: 7,
	});

	const geometry = new THREE.SphereGeometry(100, 16, 16); // Small sphere
	const geometry2 = new THREE.SphereGeometry(100, 16, 16); // Small sphere
	const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red color
	const point = new THREE.Mesh(geometry, material);
	const point2 = new THREE.Mesh(geometry2, new THREE.MeshBasicMaterial({ color: 'green' }));

// Set the position of the point
		point.position.set(-222.63898156654456, -319.16378431660603, 0);
		point2.position.set(222.63898156654456, 319.16378431660603, 0);
		view.addLayer(point, point2);



	const	buildingSource = new WFSSource( CENTER, RADIUS, {
		layer: "BDTOPO_V3:batiment",
	});

	console.log( buildingSource);
	tgeo.addSource( elevationSource );

	
	const	terrain = await tgeo.getTerrainGrey(
		CENTER,
		RADIUS,
	);
	
	//terrain[0].rotation.x = -Math.PI/2;
	//terrain[0].rotateZ(0.185)
	view.addLayer( gridHelper, terrain[0] );
	//const	start = performance.now()
	const	buildings =  await new Buildings( CENTER, RADIUS, terrain as THREE.Mesh[], view, buildingSource ).Building();
	//buildings.rotateY(-0.1)
	//const	end = performance.now()
	
	//console.log("opration took : ", end-start)
	////buildings.rotateY(0.1)
	
	view.addLayer(  buildings );
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
