import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import ThreeGeo from "./ThreeGeo";
import { MapControls } from "three/examples/jsm/Addons.js";


const	tgeo = new ThreeGeo({
	tokenMapBox: 'pk.eyJ1IjoiZWwtb3NvIiwiYSI6ImNsbzRhbXhzcDAwMzMydXBoYmJxbW11ZjMifQ.fw-spr6aqF4LYqfNKiGw_w'
});

const	terrain = await tgeo.getTerrainRgb(
	[46.5872, 7.9383],
	3.00,
	15
);


const	container = document.getElementById('viewerDiv');

const scene = new THREE.Scene();

//scene.background = new THREE.Color("white")

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.01, 1000 );
camera.position.z = 1;
//camera.lookAt( terrain.position );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
container?.appendChild( renderer.domElement );
const	controls = new OrbitControls( camera, renderer.domElement );
//controls.target.set(terrain.position.x, terrain.position.y, terrain.position.z);
//controls.update();

scene.add( terrain );

function animate() {
	
	controls.update()
	renderer.render( scene, camera );
	
}


window.addEventListener( 'resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
})
