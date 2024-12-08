import * as THREE from "three";
import HugoGeo from "./HugoGeo";
import View from "./View/View";
import Buildings from "./Buildings/Buildings";
import WFSSource from "./Source/WFSSource";
import { GeolocationService } from "./Services/GeolocationService";
import GeometryLayer from "./Layer/GeometryLayer";
import OSMSource from "./Source/OSMSource";

export const UNITS_SIDE = 1000;
const	RADIUS = 1.00;
const	container = document.getElementById('viewerDiv') as HTMLDivElement;

const	gridHelper = new THREE.GridHelper(60, 150, new THREE.Color(0x555555), new THREE.Color(0x333333));
const	view = new View( container )

view.addLayer( gridHelper );
let	CENTER: [lat: number, lon: number] = [45.7736192,4.8398336];

const	tgeo = new HugoGeo({
	tokenMapBox: 'pk.eyJ1IjoiZWwtb3NvIiwiYSI6ImNsbzRhbXhzcDAwMzMydXBoYmJxbW11ZjMifQ.fw-spr6aqF4LYqfNKiGw_w',
	tokenOpenTopo: '1beba77d1c58069e0c5b7ac410586699',
	unitsSide: UNITS_SIDE,
	center: CENTER,
	radius: RADIUS
});

const	UNITS_PER_METER = HugoGeo.getUnitsPerMeters( UNITS_SIDE , RADIUS );


async function	loadTerrain() {

	const position = await GeolocationService.getCurrentPosition();
	const { latitude, longitude } = position.coords;
	if ( latitude && longitude ) {
		CENTER = [ latitude, longitude ];
	};

	const	terrain = await tgeo.getTerrainRgb( CENTER, RADIUS, 15 )
	const	buildingSource = new WFSSource( CENTER, RADIUS, {
		layer: "BDTOPO_V3:batiment",
	});
	terrain.rotation.x =  -Math.PI/2

	view.addLayer( terrain );

	
	const	geomSource = new OSMSource(CENTER, RADIUS, "tree");
	console.log( geomSource )
	const	geomLayer = new GeometryLayer( geomSource, tgeo.refBbox, view );
	const	buildings =  await new Buildings( CENTER, RADIUS, UNITS_PER_METER, view, buildingSource, terrain, tgeo.refBbox ).Building();
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
		alert('not a valid center bitch!');
	};
});
