import { OrbitControls } from "three/examples/jsm/Addons.js";
import ThreeGeo from "./ThreeGeo";
import * as THREE from "three";

const	tgeo = new ThreeGeo({
	tokenMapBox: 'pk.eyJ1IjoiZWwtb3NvIiwiYSI6ImNsbzRhbXhzcDAwMzMydXBoYmJxbW11ZjMifQ.fw-spr6aqF4LYqfNKiGw_w'
});

const	terrain = await tgeo.getTerrain(
	[46.5763, 7.9904],
	5.0,
	12
);

window.addEventListener( 'resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
})

const scene = new THREE.Scene();

scene.background = new THREE.Color("white")

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );
camera.position.z = 5;
//camera.lookAt( terrain.position );

const	light = new THREE.AmbientLight();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const	controls = new OrbitControls( camera, renderer.domElement );

setTimeout(() => {
	const	groupMesh = ThreeGeo.createDemGroups("name", terrain );
	console.log( groupMesh );
	scene.add( groupMesh );

}, 2000)

function animate() {

	controls.update()
	renderer.render( scene, camera );

}
