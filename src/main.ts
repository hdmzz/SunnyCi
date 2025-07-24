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
import XYZSource from "./Source/XYZSource";

const	container = document.getElementById('viewerDiv') as HTMLDivElement;
let group: THREE.Group = new THREE.Group();

const	RADIUS = 5;
const 	ZOOM = 14;
let	CENTER: [lat: number, lon: number] = [45.757653894601546,4.832152196097046];//remttre a zero
const 	view = new View( container, CENTER,ZOOM );
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
		terrain = await geo.getTerrainRgb(CENTER, 4, 15);
	} else {
		const testWmts = new WMTSSource( extent, {
			layer: "ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES",
			format: "image/x-bil;bits=32",
			style: "normal",
			tileMatrixSet: "WGS84G",
			neighbors: true,
			zoom: ZOOM,
		});
		
		const eleLayer = new ElevationLayer( testWmts );
		terrain = await eleLayer.fetchBil();
		terrain.rotateY( Math.PI );
		group.add(terrain);
	}

	
	//const	buildingSource = new WFSSource( CENTER, RADIUS, {
	//	layer: "BDTOPO_V3:batiment",
	//});
	
	//const	buildings = await new Buildings(CENTER, RADIUS, view, buildingSource, terrain.children as THREE.Mesh[], extent ).Building();
	//group.add(buildings);

	//en fonction de la valeur du zoom a chaque crans les coordonnées font (* 2 ) + 1
	const xyzTest = new XYZSource(CENTER, RADIUS, ZOOM + 3, "https://maps.pole-emploi.fr/styles/klokantech-basic").getUrl();
	console.log(xyzTest);
	

	
	let box = new THREE.Box3().setFromObject(group);
	const center = new THREE.Vector3();
	box.getCenter(center);
	group.position.sub(center);
	view.addLayer("terrain-builing", group);
};

loadTerrain();

const goButton = document.getElementById("goButton") as HTMLButtonElement;
const coordsInput = document.getElementById("coordsInput") as HTMLInputElement;
const sourceSelector = document.getElementById("sourceSelector") as HTMLSelectElement;

goButton?.addEventListener("click", () => {
	const	coords = coordsInput.value.split( ',' ).map( Number );
	if ( coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
		view.removeLayer();
		clearGroup( group );
		
		console.log( group );
		
		CENTER = [coords[0], coords[1]];
		loadTerrain();
	} else {
		alert('not a valid center!');
	};
});

sourceSelector?.addEventListener("change", () => {
	view.removeLayer();
	loadTerrain();
});

function clearGroup( group: THREE.Group ) {
	group.children.forEach(( child ) => {
		if ( child instanceof THREE.Mesh ) {
			child.geometry.dispose();
			child.clear();
		}
		if ( child instanceof THREE.Group ) {
			clearGroup( child );
		}
	})
	group.clear();
}
