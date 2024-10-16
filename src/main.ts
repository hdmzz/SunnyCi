import * as THREE from "three";
import HugoGeo from "./HugoGeo";
import View from "./View/View";
import Buildings from "./Buildings/Buildings";

const	RADIUS = 5.00;
const	gridHelper = new THREE.GridHelper(60, 150, new THREE.Color(0x555555), new THREE.Color(0x333333));

const	tgeo = new HugoGeo({
	tokenMapBox: 'pk.eyJ1IjoiZWwtb3NvIiwiYSI6ImNsbzRhbXhzcDAwMzMydXBoYmJxbW11ZjMifQ.fw-spr6aqF4LYqfNKiGw_w'
});
const	terrain = await tgeo.getTerrainRgb(
	[46.5872, 7.9383],
	RADIUS,
	13
);

terrain.rotation.x = -Math.PI/2;

const	container = document.getElementById('viewerDiv') as HTMLDivElement;

const	view =  new View( container )

//view.addLayer( terrain );

view.addLayer( gridHelper );

const building = await new Buildings([45.77369876, 4.83607042], RADIUS).Building();


view.addLayer( building, terrain );
