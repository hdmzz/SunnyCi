import * as THREE from "three";
import HugoGeo from "./HugoGeo";
import View from "./View/View";
import Buildings from "./Buildings/Buildings";

const	RADIUS = 5.00;
const	CENTER: [lat: number, lon: number] = [45.76233220461376,4.82276913540574];
const	gridHelper = new THREE.GridHelper(60, 150, new THREE.Color(0x555555), new THREE.Color(0x333333));

const	tgeo = new HugoGeo({
	tokenMapBox: 'pk.eyJ1IjoiZWwtb3NvIiwiYSI6ImNsbzRhbXhzcDAwMzMydXBoYmJxbW11ZjMifQ.fw-spr6aqF4LYqfNKiGw_w',
	tokenOpenTopo: '1beba77d1c58069e0c5b7ac410586699',
});
//const	terrain = await tgeo.getTerrainRgb(
//	CENTER,
//	RADIUS,
//	13,
//);

const	terrain = tgeo.getTerrainGrey(
	CENTER,
	RADIUS
);

const	container = document.getElementById('viewerDiv') as HTMLDivElement;

//const	view =  new View( container )

//terrain.rotation.x = -Math.PI/2;


//view.addLayer( gridHelper, terrain );
//pb avec chamonix il faut que lq cqerq se repositionne a l'altitude correspondante
const	start = performance.now()
//const	buildings =  await new Buildings( CENTER, RADIUS, terrain, view ).Building();
const	end = performance.now()

console.log("opration took : ", end-start)
//buildings.rotateY(0.1)

//view.addLayer( buildings );

