import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

class	View extends THREE.EventDispatcher {
	scene: THREE.Scene;
	camera: THREE.PerspectiveCamera;
	renderer: THREE.WebGLRenderer;
	controls: OrbitControls;
	container: HTMLDivElement;

	constructor( container: HTMLDivElement ) {
		super();
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color( "white" );
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.001, 100000 );
		this.camera.position.z = 1;
		this.camera.position.y = 1;
		this.renderer = new THREE.WebGLRenderer({
			antialias: true,
		});

		const	animate =  () => {
			this.controls.update();
			this.renderer.render( this.scene, this.camera );
		};

		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.renderer.setAnimationLoop( animate );

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
