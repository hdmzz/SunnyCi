import * as THREE from "three";
import HugoGeo from "./HugoGeo";
import View from "./View/View";
import Buildings from "./Buildings/Buildings";

const	RADIUS = 5.00;
const	CENTER: [lat: number, lon: number] = [45.892014,6.711926];
const	gridHelper = new THREE.GridHelper(60, 150, new THREE.Color(0x555555), new THREE.Color(0x333333));

const	tgeo = new HugoGeo({
	tokenMapBox: 'pk.eyJ1IjoiZWwtb3NvIiwiYSI6ImNsbzRhbXhzcDAwMzMydXBoYmJxbW11ZjMifQ.fw-spr6aqF4LYqfNKiGw_w'
});
const	terrain = await tgeo.getTerrainRgb(
	CENTER,
	RADIUS,
	13,
);

const	container = document.getElementById('viewerDiv') as HTMLDivElement;

const	view =  new View( container )

console.log( terrain );

terrain.rotation.x = -Math.PI/2;


view.addLayer( gridHelper, terrain );
//pb avec chamonix il faut que lq cqerq se repositionne a l'altitude correspondante
const	buildings =  await new Buildings( CENTER, RADIUS, terrain, view ).Building();
//buildings.rotateY(0.1)

view.addLayer( buildings );

