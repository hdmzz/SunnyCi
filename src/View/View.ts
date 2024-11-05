import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

class	View extends THREE.EventDispatcher {
	scene: THREE.Scene;
	camera: THREE.PerspectiveCamera;
	renderer: THREE.WebGLRenderer;
	controls: OrbitControls;
	container: HTMLDivElement;
	light: THREE.DirectionalLight;

	constructor( container: HTMLDivElement ) {
		super();
		this.scene = new THREE.Scene();
		//this.scene.background = new THREE.Color( "white" );
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.001, 1000 );
		this.camera.position.z = 1;
		this.camera.position.y = 1.5;
		this.renderer = new THREE.WebGLRenderer({
			antialias: true,
		});
		this.renderer.shadowMap.enabled = true;
		this.light = new THREE.DirectionalLight( 0xffffff, 1 );
		this.light.position.set( 10, 20, 10 );
		this.light.castShadow = true;
		this.light.shadow.camera.near = 0.1;
		this.light.shadow.camera.far = 10000;
		this.light.shadow.camera.left = -100;  // Increase shadow area for larger scenes
		this.light.shadow.camera.right = 100;
		this.light.shadow.camera.top = 50;
		this.light.shadow.camera.bottom = -50;
		const	lightHelper = new THREE.DirectionalLightHelper( this.light, 1 );
	
		const	animate =  () => {
			this.controls.update();
			this.renderer.render( this.scene, this.camera );
		};

		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.renderer.setAnimationLoop( animate );
		const axesHelper = new THREE.AxesHelper( 4 );
		this.scene.add( axesHelper, this.light, lightHelper );

		this.controls = new OrbitControls( this.camera, this.renderer.domElement );
		container.appendChild( this.renderer.domElement );
		this.container = container;

		window.addEventListener('resize', () => {
			this.onResize();
		});
	};

	public addLayer(...layers: THREE.Object3D[]) {
		layers.forEach(layer => {
			this.scene.add(layer);
		});
	};

	onResize() {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize( window.innerWidth, window.innerHeight );
	};
};

export default	View;
