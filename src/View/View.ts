import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

class	View extends THREE.EventDispatcher {
	scene: THREE.Scene;
	camera: THREE.PerspectiveCamera;
	renderer: THREE.WebGLRenderer;
	controls: OrbitControls;
	container: HTMLDivElement;
	light: THREE.DirectionalLight;
	layers: THREE.Object3D[];

	constructor( container: HTMLDivElement ) {
		super();
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.CubeTextureLoader().setPath("http://localhost:5173/SunnyCi/").load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 5000 );
		this.camera.position.z = 5;
		this.camera.position.y = 10;
		this.renderer = new THREE.WebGLRenderer({
			antialias: true,
		});
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		this.scene.add( new THREE.AmbientLight( 'white', 1.7 ));
		this.light = new THREE.DirectionalLight( 'white', 1 );
		this.light.position.set( 300, 300, 300 );
		this.light.castShadow = true;
		this.light.shadow.camera.left = -500;
		this.light.shadow.camera.right = 500;
		this.light.shadow.camera.top = 500;
		this.light.shadow.camera.bottom = -500;
		this.light.shadow.camera.near = 1;
		this.light.shadow.camera.far = 1000;
		this.light.shadow.bias = -0.05;
		this.light.shadow.mapSize.width = 1024;
		this.light.shadow.mapSize.height = 1024;
		this.layers = [];
		const	lightHelper = new THREE.DirectionalLightHelper( this.light, 1 );
	
		const	animate =  () => {
			this.controls.update();
			this.renderer.render( this.scene, this.camera );
		};

		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.renderer.setAnimationLoop( animate );
		const axesHelper = new THREE.AxesHelper( 1000 );
		this.scene.add( axesHelper, this.light, lightHelper );

		this.controls = new OrbitControls( this.camera, this.renderer.domElement );
		container.appendChild( this.renderer.domElement );
		this.container = container;

		window.addEventListener('resize', () => {
			this.onResize();
		});
	};

	private	onResize() {
			this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize( window.innerWidth, window.innerHeight );
		};

	public	addLayer(...layers: THREE.Object3D[]) {
		layers.forEach(layer => {
			this.layers.push(layer);
			this.scene.add(layer);
		});
		this.render();
	};

	public	removeLayer() {
		this.layers.forEach(( layer ) => {
			this.scene.remove( layer );

		});
		this.layers = [];
		this.render();
	};

	private	render() {
		this.renderer.render( this.scene, this.camera );
	};
};

export default	View;
