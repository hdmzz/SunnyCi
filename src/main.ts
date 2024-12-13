import * as THREE from "three";
import HugoGeo from "./HugoGeo";
import View from "./View/View";
import Buildings from "./Buildings/Buildings";
import WFSSource from "./Source/WFSSource";
import { GeolocationService } from "./Services/GeolocationService";

const	RADIUS = 1.0;

async function main() {
	// Assurez-vous que le DOM est complètement chargé
	document.addEventListener('DOMContentLoaded', async () => {
		const container = document.getElementById('viewerDiv') as HTMLDivElement;

		let CENTER: [lat: number, lon: number] = [45.756073929704456,4.8401463179085225];
		const position = await GeolocationService.getCurrentPosition();
		const { latitude, longitude } = position.coords;
		if (latitude && longitude) {
			CENTER = [latitude, longitude];
		};
		const view = new View(container, CENTER)
		const gridHelper = new THREE.GridHelper(60, 150, new THREE.Color(0x555555), new THREE.Color(0x333333));

		const tgeo = new HugoGeo({
			tokenMapBox: 'pk.eyJ1IjoiZWwtb3NvIiwiYSI6ImNsbzRhbXhzcDAwMzMydXBoYmJxbW11ZjMifQ.fw-spr6aqF4LYqfNKiGw_w',
			tokenOpenTopo: '1beba77d1c58069e0c5b7ac410586699',
			unitsSide: 1000,
		});

		const UNITS_PER_METER = HugoGeo.getUnitsPerMeters(1000, RADIUS);

		view.addLayer(gridHelper);

		async function loadTerrain() {
			if (CENTER[0] === 0 && CENTER[1] === 0) {
				const position = await GeolocationService.getCurrentPosition();
				const { latitude, longitude } = position.coords;
				if (latitude && longitude) {
					CENTER = [latitude, longitude];
				};
			};
			const terrain = await tgeo.getTerrainRgb(CENTER, RADIUS, 14);
			view.centerCameraOnGroup( terrain );
			const buildingSource = new WFSSource(CENTER, RADIUS, {
				layer: "BDTOPO_V3:batiment",
			});
			terrain.rotation.x = -Math.PI / 2

			view.addLayer( terrain );

			const buildings = await new Buildings(CENTER, RADIUS, UNITS_PER_METER, view, buildingSource, terrain).Building();

			view.addLayer(buildings);
		};

		loadTerrain();

		const goButton = document.getElementById("goButton") as HTMLButtonElement;
		const coordsInput = document.getElementById("coordsInput") as HTMLInputElement;

		goButton?.addEventListener("click", () => {
			const coords = coordsInput.value.split(',').map(Number);
			if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
				view.removeLayer();
				CENTER = [coords[0], coords[1]];
				loadTerrain();
			} else {
				alert('not a valid center bitch!');
			};
		});
	});
}

main().catch(console.error);
