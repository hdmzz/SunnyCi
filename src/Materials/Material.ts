import * as THREE from 'three';
/**
 *@module Material return le material que je pense pas mal pour le moment
 */
export default {
	basicMat(property = { color: 0xff0000 }) {
		return (new THREE.MeshPhongMaterial( property ));
	},

	buildingMat (property = {
		color: "red",
		specular: 0xfafafa,
		reflectivity: 0.6
	}) {
		return (new THREE.MeshPhongMaterial( property ));
	}
}
