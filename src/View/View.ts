import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SunPath from './SunPath';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { AxesHelper, ArrowHelper, Vector3 } from 'three';

const	sunParams = {
	minute: new Date().getMinutes(),
	hour: new Date().getHours(),
	day: new Date().getDate(),
	month: new Date().getMonth() + 1,
	radius: 1500,
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
	sunSphere!: THREE.Mesh;
	compass!: THREE.ArrowHelper;

	constructor( container: HTMLDivElement, center: [lat: number, lon: number] ) {
		super();
		this.center = center
		this.scene = new THREE.Scene();
		//!!changer url local host ou github pour deploy
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
		this.scene.add( new THREE.AmbientLight( 'white' ))

		this.initSun();
		this.createGUI();

		this.layers = [];

		let	dir = new THREE.Vector3();
		let	sph = new THREE.Spherical();
		const	compass = document.getElementById("compassContainer");

		const	animate =  () => {
			this.camera.getWorldDirection( dir );
			sph.setFromVector3( dir );
			let	thetaDegree = sph.theta * ( 180 / Math.PI );
			compass!.style.transform = `rotate(${thetaDegree - 180}deg)`;
			this.controls.update();
			this.renderer.render( this.scene, this.camera );
			this.sunSphere.position.copy(this.sunLight.position); // Mettre à jour la position de la sphère
		};

		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.renderer.setAnimationLoop( animate );
		const axesHelper = new THREE.AxesHelper( 1000 );
		this.scene.add( axesHelper, this.sunLight );

		this.controls = new OrbitControls( this.camera, this.renderer.domElement );
		container.appendChild( this.renderer.domElement );
		this.container = container;

		this.initListener();
	};

	private	initListener() {

		window.addEventListener( 'resize', () => {
			this.onResize();
		});
	};

	private	onResize() {
			this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize( window.innerWidth, window.innerHeight );
		};

	public	addLayer(...layers: THREE.Object3D[]) {
		layers.forEach(( layer ) => {
			this.scene.add( layer );
			this.layers.push( layer );
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

	private	createGUI() {
		const	gui = new GUI();
		const	sunLightFolder = gui.addFolder( 'SunLight' );

		sunLightFolder.add( sunParams, 'minute', 0, 60, 1 ).onChange(() => this.sunPath.updateHour()).listen();
		sunLightFolder.add( sunParams, 'hour', 0, 24, 1 ).onChange(() => this.sunPath.updateHour()).listen();
		sunLightFolder.add( sunParams, 'day', 1, 30, 1 ).onChange(() => this.sunPath.updateMonth()).listen();
		sunLightFolder.add( sunParams, 'month', 1, 12, 1 ).onChange(() => this.sunPath.updateMonth()).listen();

	};

	private	initCompass() {
		const	compass = new THREE.ConeGeometry( 0.5, 2, 32 );
		const	compassMaterial = new THREE.MeshBasicMaterial({ color: "red" });
		const	compassMesh = new THREE.Mesh( compass, compassMaterial );

		
		this.scene.add( compassMesh );
	};

	private	initSun() {
		this.sunPath = new SunPath( sunParams, this.sunLight, this.center );
		this.sunLight.shadow.mapSize.height = 2048;
		this.sunLight.shadow.mapSize.width = 2048;
		this.sunLight.shadow.camera.left = -2500;
		this.sunLight.shadow.camera.top = 2500;
		this.sunLight.shadow.camera.right = 2500;
		this.sunLight.shadow.camera.bottom = -2500;
		this.sunLight.shadow.camera.near = 0.5;
		this.sunLight.shadow.camera.far = 2500;
		this.sunLight.castShadow = true;
		this.sunLight.shadow.bias = -0.005;

		const sunGeometry = new THREE.SphereGeometry( 50, 32, 32 );
		const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
		this.sunSphere = new THREE.Mesh( sunGeometry, sunMaterial );
		this.sunSphere.position.copy( this.sunLight.position );
		this.scene.add(this.sunSphere);
	};

	public	centerCameraOnGroup( group: THREE.Group ) {
		const	box = new THREE.Box3().setFromObject( group );
		const	center = box.getCenter( new THREE.Vector3() );
		const	size = box.getSize( new THREE.Vector3() );
		
		this.camera.position.setY( center.y + size.y * 0.1 );
	}

	private	render() {
		this.renderer.render( this.scene, this.camera );
	};
};

export default	View;
