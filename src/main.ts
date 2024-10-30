import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const	controls = new OrbitControls( camera, renderer.domElement );
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.translateY(-5);
scene.add(cube);

const planeGeometry = new THREE.PlaneGeometry(5, 5);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide, wireframe: true });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = - Math.PI / 4;
scene.add(plane);

cube.geometry.computeBoundingSphere();

const rayOrigin = cube.geometry.boundingSphere?.center.clone();
const rayDirection = new THREE.Vector3(0, -1, -1).normalize();

const	position = plane.geometry.attributes.position;
const	worldVertices = []

console.log(position);

for ( let i = 0; i < position.count; i++ ) {
	const	vertex = new THREE.Vector3().fromBufferAttribute( position, i );
	vertex.applyMatrix4( plane.matrixWorld );
	worldVertices.push( vertex );
};

console.log(worldVertices);

function	rayIntersectsTriangle(rayOrigin: THREE.Vector3, rayDirection: THREE.Vector3, v0: THREE.Vector3, v1: THREE.Vector3, v2: THREE.Vector3) {
	const EPSILON = 0.000001;
	const edge1 = new THREE.Vector3().subVectors(v1, v0);
	const edge2 = new THREE.Vector3().subVectors(v2, v0);
	const h = new THREE.Vector3().crossVectors(rayDirection, edge2);
	const a = edge1.dot(h);

	if (a > -EPSILON && a < EPSILON) return null; // Ray is parallel to triangle

	const f = 1.0 / a;
	const s = new THREE.Vector3().subVectors(rayOrigin, v0);
	const u = f * s.dot(h);

	if (u < 0.0 || u > 1.0) return null;

	const q = new THREE.Vector3().crossVectors(s, edge1);
	const v = f * rayDirection.dot(q);

	if (v < 0.0 || u + v > 1.0) return null;

	// Compute intersection point
	const t = f * edge2.dot(q);
	if (t > EPSILON) {
		const intersectionPoint = rayOrigin.clone().add(rayDirection.clone().multiplyScalar(t));
		return intersectionPoint;
	}

	return null; // No intersection
}

for (let i = 0; i < worldVertices.length; i += 3) {
	const v0 = worldVertices[i];
	const v1 = worldVertices[i + 1];
	const v2 = worldVertices[i + 2];

	const intersection = rayIntersectsTriangle(rayOrigin as THREE.Vector3, rayDirection, v0, v1, v2);
	if (intersection) {
		console.log("Intersection found at:", intersection);
		// Break or continue to find all intersections if necessary
	}
}


function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
};

animate();
