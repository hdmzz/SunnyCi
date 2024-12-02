[1mdiff --git a/src/Buildings/Buildings.ts b/src/Buildings/Buildings.ts[m
[1mindex bb3e2a1..cb7ea5d 100644[m
[1m--- a/src/Buildings/Buildings.ts[m
[1m+++ b/src/Buildings/Buildings.ts[m
[36m@@ -187,7 +187,7 @@[m [mclass	Buildings {[m
 		return new Promise( async ( resolve ) => {[m
 			const	geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );[m
 			[m
[31m-			geometry.rotateX(Math.PI / 2);[m
[32m+[m			[32m//geometry.rotateX(Math.PI / 2);[m
 			geometry.rotateZ(Math.PI);[m
 			geometry.computeBoundingSphere();[m
 			//geometry.rotateY(-0.01)[m
[1mdiff --git a/src/Models/GreyModel.ts b/src/Models/GreyModel.ts[m
[1mindex 93cad24..6e1be4f 100644[m
[1m--- a/src/Models/GreyModel.ts[m
[1m+++ b/src/Models/GreyModel.ts[m
[36m@@ -1,5 +1,6 @@[m
 import { BufferGeometry, DataTexture, DoubleSide, Material, Mesh, MeshPhongMaterial, NormalBufferAttributes, Object3DEventMap, PlaneGeometry, RGBAFormat } from "three";[m
 import { fromArrayBuffer, ReadRasterResult } from "geotiff";[m
[32m+[m[32mimport * as THREE from 'three';[m
 import WMSSource from "../Source/WMSRSource";[m
 import getPixels from "../Fetcher/GetPixels";[m
 import Fetch from "../Fetcher/Fetch";[m
[36m@@ -148,10 +149,8 @@[m [mclass	GreyModel {[m
 [m
 		console.log( this.source?.bbox);[m
 		const	projectedMin = new Coordinate({latitude: this.source?.bbox[0] as number, longitude: this.source?.bbox[1] as number, altitude: 0}, this.center).ComputeWorldCoordinate();[m
[31m-		const	projectedMax = new Coordinate({latitude: this.source?.bbox[2] as number, longitude: this.source?.bbox[3] as number, altitude: 0}, this.center).ComputeWorldCoordinate();[m
[31m-[m
[31m-		[m
[31m-		console.log(projectedMin.world, projectedMax.world);[m
[32m+[m		[32mconst	projectedMax = new Coordinate({latitude: this.source?.bbox[2] as number, longitude: this.source?.bbox[3] as number, altitude: 0}, this.center).ComputeWorldCoordinate()[m
[32m+[m		[32mconsole.log(projectedMax.world, projectedMin.world);[m
 		const	data = this.dataPng;[m
 		const	width = 512, height = 512;[m
 		const	planeGeom = new PlaneGeometry( width, height, width - 1, height - 1 );[m
[1mdiff --git a/src/main.ts b/src/main.ts[m
[1mindex d35e7ac..28acc83 100644[m
[1m--- a/src/main.ts[m
[1m+++ b/src/main.ts[m
[36m@@ -50,6 +50,18 @@[m [masync function	loadTerrain() {[m
 		zoom: 7,[m
 	});[m
 [m
[32m+[m	[32mconst geometry = new THREE.SphereGeometry(100, 16, 16); // Small sphere[m
[32m+[m	[32mconst geometry2 = new THREE.SphereGeometry(100, 16, 16); // Small sphere[m
[32m+[m	[32mconst material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red color[m
[32m+[m	[32mconst point = new THREE.Mesh(geometry, material);[m
[32m+[m	[32mconst point2 = new THREE.Mesh(geometry2, new THREE.MeshBasicMaterial({ color: 'green' }));[m
[32m+[m
[32m+[m[32m// Set the position of the point[m
[32m+[m		[32mpoint.position.set(-222.63898156654456, -319.16378431660603, 0);[m
[32m+[m		[32mpoint2.position.set(222.63898156654456, 319.16378431660603, 0);[m
[32m+[m		[32mview.addLayer(point, point2);[m
[32m+[m
[32m+[m
 [m
 	const	buildingSource = new WFSSource( CENTER, RADIUS, {[m
 		layer: "BDTOPO_V3:batiment",[m
[36m@@ -64,7 +76,7 @@[m [masync function	loadTerrain() {[m
 		RADIUS,[m
 	);[m
 	[m
[31m-	terrain[0].rotation.x = -Math.PI/2;[m
[32m+[m	[32m//terrain[0].rotation.x = -Math.PI/2;[m
 	//terrain[0].rotateZ(0.185)[m
 	view.addLayer( gridHelper, terrain[0] );[m
 	//const	start = performance.now()[m
