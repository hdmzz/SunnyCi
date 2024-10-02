import * as THREE from 'three';

class	Layer {
	public	name: string;
	public	type: string;
	public	layer: THREE.Group;//to add to the THREE scene 

	constructor( name: string, type: string = 'default' ){
		this.name = name;
		this.layer = new THREE.Group();
		this.type = type;
	};

	addGeometry( object3d: THREE.Mesh ): THREE.Group {
		this.layer.add( object3d );
		return ( this.layer );
	};
};

export default	Layer;
