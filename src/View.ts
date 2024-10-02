import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as Geotiff from 'geotiff';
import { MapControls } from 'three/examples/jsm/Addons.js';

class	View {
	width: number;
	height: number;
	viewerDiv: HTMLDivElement;
	scene: THREE.Scene;
	camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
	renderer: THREE.WebGLRenderer;
	controls: OrbitControls;
	sun: THREE.DirectionalLight;
	cameraStateChanged: boolean;

	constructor( width: number, height: number, viewerDiv?: HTMLDivElement, helper?: boolean ) {
		this.width = width;
		this.height = height;
		this.cameraStateChanged = false

		if ( viewerDiv ) {
			this.viewerDiv = viewerDiv;
		} else {
			const	div = this.createViewerDiv();
			this.viewerDiv = div;
		};
		this.scene = new THREE.Scene();

		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor( 0xd3d3d3 ); //dark grey...
		this.renderer.setSize( this.width, this.height );
		this.renderer.shadowMap.enabled = true;
		this.viewerDiv.appendChild( this.renderer.domElement );

		this.camera = new THREE.PerspectiveCamera(
			75,
			this.width / this.height,
			1,
			1000
		);
		this.camera.position.set( 500, 500, 500 );

		//const cameraState = localStorage.getItem('cameraState');
		//const savedState = cameraState ? JSON.parse(cameraState) : null;
		//if ( savedState ) {
		//  this.camera.position.fromArray( savedState.position );
		//  this.camera.rotation.fromArray( savedState.rotation );
		//} else {
		//	this.camera.lookAt( this.scene.position );
		//}

		this.controls = new MapControls( this.camera, this.viewerDiv );
		//this.controls.addEventListener( 'change', () => {
		//	this.cameraStateChanged = true;
		//})

		this.sun = new THREE.DirectionalLight( 0xffffff );
		this.sun.position.set( 500, 1000, 250 );
		this.scene.add( this.sun );
		if ( helper ) {
			const	gridhelper = new THREE.GridHelper();
			this.scene.add( gridhelper );
		}
		this.render();
	};

	private createViewerDiv(): HTMLDivElement {
		const	div = document.createElement( 'div' );
		div.setAttribute( 'id', 'viewerDiv' );
		return ( div );
	};

	setUpTerrain() {
		const	readTiff = async () => {
			const	rawData = await Geotiff.fromUrl( "../data/agri-small-dem.tif" );
			const	tifImg = await rawData.getImage();
			const	img = {
				width: tifImg.getWidth(),
				height: tifImg.getHeight(),
			};
			//define a plane Geometry
			const	geometry = new THREE.PlaneGeometry(
				img.width,
				img.height,
				img.width - 1,
				img.height - 1,
			);
			//Now read the image each pixel contains elevation value
			const	data = await tifImg.readRasters({ interleave: true });
			//ok now declare an array the size of the geometry defined in planarGeometry with width and height of the tiff image
			const	arr1 = new Array( geometry.attributes.position.count );
			//then another array is declared to corespond to the count of position filled with 1 value
			const	arr = arr1.fill( 1 );//!==>>>arr est les vertices de la geometr plane maintenant il suffit de leur  donner une  altitude
			console.log( 'parsing' );
			arr.forEach(( _a, index ) => {
				//le goal ici est d'attribuer la valeur d'altitude  contenu dans data[index] au indice des positioons de la geometry plane
				geometry.attributes.position.setZ( index, (( data[index] as number / 10)) * -1 );
			});
			console.log( 'parsed' );
			const	gridhelper = new THREE.GridHelper();

			const	texture = new THREE.TextureLoader().load( '../data/agri-small-autumn.jpg' );
			const	material = new THREE.MeshLambertMaterial({
				wireframe: false,
				side: 2,
				map: texture
			});

			const	moutainMesh = new THREE.Mesh( geometry, material );
			moutainMesh.position.y = 0
			moutainMesh.rotation.x = Math.PI / 2;
			this.scene.add( moutainMesh, gridhelper );
		};
		readTiff();
	};

	render() {
		//if ( this.cameraStateChanged ){
		//	localStorage.setItem('cameraState', JSON.stringify({
		//		position: this.camera.position.toArray(),
		//		rotation: this.camera.rotation.toArray()
		//	}));
		//}
		this.controls.update();
		this.renderer.render( this.scene, this.camera );
		requestAnimationFrame(() => {
			//if ( this.cameraStateChanged ){
			//	localStorage.setItem('cameraState', JSON.stringify({
			//		position: this.camera.position.toArray(),
			//		rotation: this.camera.rotation.toArray()
			//	}));
			//}
			this.render();
		});
	};

	addLayer( layer: THREE.Group ) {
		this.scene.add( layer );
		const box = new THREE.Box3().setFromObject(layer);
		const center = new THREE.Vector3();
		box.getCenter(center);

		const distance = 50; // Ajustez cette valeur selon vos besoins
		const offset = new THREE.Vector3(distance, distance, distance);
		this.camera.position.copy(center).add(offset);

		// Faire en sorte que la caméra regarde vers le centre du groupe
		this.camera.lookAt(center);

		// Mettre à jour les contrôles de la caméra
		this.controls.target.copy(center);
		this.controls.update();
		this.render();
	}
};

export default	( View );
