import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import SunPath from './SunPath';
import { CENTER } from '../main';

class	View extends THREE.EventDispatcher {
	scene: THREE.Scene;
	camera: THREE.PerspectiveCamera;
	renderer: THREE.WebGLRenderer;
	controls: OrbitControls;
	container: HTMLDivElement;
	sunLight: THREE.DirectionalLight;
	layers: THREE.Object3D[];
	sunPath: SunPath;

	constructor( container: HTMLDivElement ) {
		super();
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.CubeTextureLoader().setPath('http://localhost:5173/SunnyCi/').load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100000 );
		this.camera.position.z = 5;
		this.camera.position.y = 10;
		this.renderer = new THREE.WebGLRenderer({
			antialias: true,
		});
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		this.sunLight = new THREE.DirectionalLight( 'white', 4 );
		this.scene.add( new THREE.AmbientLight( 'white', 0.5 ))

		this.sunPath = new SunPath( 500, this.sunLight, CENTER );//maybe passer center en argument
		this.sunLight.castShadow = true;
		this.sunLight.shadow.camera.left = -1000;
		this.sunLight.shadow.camera.right = 1000;
		this.sunLight.shadow.camera.top = 1000;
		this.sunLight.shadow.camera.bottom = -1000;
		this.sunLight.shadow.camera.near = 0.5;
		this.sunLight.shadow.camera.far = 1000;
		this.sunLight.shadow.bias = -0.005;
		this.sunLight.shadow.mapSize.width = 2048;
		this.sunLight.shadow.mapSize.height = 2048;
		
		this.layers = [];
		const	lightHelper = new THREE.DirectionalLightHelper( this.sunLight, 1 );
	
		const	animate =  () => {
			this.controls.update();
			this.renderer.render( this.scene, this.camera );
		};

		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.renderer.setAnimationLoop( animate );
		const axesHelper = new THREE.AxesHelper( 1000 );
		this.scene.add( axesHelper, this.sunLight, lightHelper );

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
