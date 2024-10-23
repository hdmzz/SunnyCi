import * as THREE from "three";
import HugoGeo from "./HugoGeo";
import View from "./View/View";
import Buildings from "./Buildings/Buildings";

const	RADIUS =5.00;
const	CENTER: [lat: number, lon: number] = [45.7736192,4.8431104];
const	gridHelper = new THREE.GridHelper(60, 150, new THREE.Color(0x555555), new THREE.Color(0x333333));

const	tgeo = new HugoGeo({
	tokenMapBox: 'pk.eyJ1IjoiZWwtb3NvIiwiYSI6ImNsbzRhbXhzcDAwMzMydXBoYmJxbW11ZjMifQ.fw-spr6aqF4LYqfNKiGw_w'
});
const	terrain = await tgeo.getTerrainRgb(
	CENTER,
	RADIUS,
	15,
);

const	container = document.getElementById('viewerDiv') as HTMLDivElement;

const	view =  new View( container )

terrain.children.forEach(( mesh ) => {
	console.log( mesh );
});

console.log( terrain );

terrain.rotation.x = -Math.PI/2;


view.addLayer( gridHelper );

const building = await new Buildings( CENTER, RADIUS, terrain ).Building();

view.addLayer( terrain, building );//pb avec chamonix il faut que lq cqerq se repositionne a l'altitude correspondante
