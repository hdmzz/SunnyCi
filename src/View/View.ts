import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import SunPath from './SunPath';
import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js';

const	sunParams = {
	minute: new Date().getMinutes(),
	hour: new Date().getHours(),
	day: new Date().getDate(),
	month: new Date().getMonth() + 1,
	radius: 1500,
	bias: -0.005,
};

class	View extends THREE.EventDispatcher {
	scene: THREE.Scene;
	camera: THREE.PerspectiveCamera;
	renderer: THREE.WebGLRenderer;
	controls: OrbitControls;
	container: HTMLDivElement;
	sunLight: THREE.DirectionalLight;
	layers: THREE.Object3D[];
	sunPath!: SunPath;
	center: [lat: number, lon: number];
	sunSphere: THREE.Mesh;

	constructor( container: HTMLDivElement, center: [lat: number, lon: number] ) {
		super();
		this.center = center
		this.scene = new THREE.Scene();
		//!!changer url local host ou github pour deploy
		this.scene.background = new THREE.CubeTextureLoader().setPath('https://hdmzz.github.io/SunnyCi/').load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100000 );
		this.camera.position.z = 5;
		this.camera.position.y = 10;
		this.renderer = new THREE.WebGLRenderer({
			antialias: true,
		});
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		this.sunLight = new THREE.DirectionalLight( 'white', 4 );
		this.scene.add( new THREE.AmbientLight( 'white' ))

		this.initSun();

		this.layers = [];

		// Créer une sphère jaune pour représenter le soleil
		const sunGeometry = new THREE.SphereGeometry(50, 32, 32);
		const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
		this.sunSphere = new THREE.Mesh(sunGeometry, sunMaterial);
		this.sunSphere.position.copy(this.sunLight.position);
		this.scene.add(this.sunSphere);
	
		const	animate =  () => {
			this.controls.update();
			this.renderer.render( this.scene, this.camera );
			this.sunSphere.position.copy(this.sunLight.position); // Mettre à jour la position de la sphère
		};

		const	gui = new GUI();

		const	sunLightFolder = gui.addFolder( 'SunLight' );
		sunLightFolder.add( sunParams, 'minute', 0, 60, 1 ).onChange(() => this.sunPath.updateHour()).listen();
		sunLightFolder.add( sunParams, 'hour', 0, 24, 1 ).onChange(() => this.sunPath.updateHour()).listen();
		sunLightFolder.add( sunParams, 'month', 1, 12, 1 ).onChange(() => this.sunPath.updateMonth()).listen();
		sunLightFolder.add( sunParams, 'day', 1, 30, 1 ).onChange(() => this.sunPath.updateMonth()).listen();

		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.renderer.setAnimationLoop( animate );
		const axesHelper = new THREE.AxesHelper( 1000 );
		this.scene.add( axesHelper, this.sunLight );

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

	private	initSun() {
		this.sunPath = new SunPath( sunParams, this.sunLight, this.center );//la classe modifie  la position de la lumiere du soleildonc ajouter une fonction qui prend en arguent un delta( + || - )
		this.sunLight.castShadow = true;
		this.sunLight.shadow.camera.left = -2500;
		this.sunLight.shadow.camera.right = 2500;
		this.sunLight.shadow.camera.top = 2500;
		this.sunLight.shadow.camera.bottom = -2500;
		this.sunLight.shadow.camera.near = 0.1;
		this.sunLight.shadow.camera.far = 2500;
		this.sunLight.shadow.bias = sunParams.bias;
		this.sunLight.shadow.mapSize.width = 2048;
		this.sunLight.shadow.mapSize.height = 2048;
	};

	private	render() {
		this.renderer.render( this.scene, this.camera );
	};
};

export default	View;
