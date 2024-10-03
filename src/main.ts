import ThreeGeo from "./ThreeGeo";

const	tgeo = new ThreeGeo({
	tokenMapBox: 'pk.eyJ1IjoiZWwtb3NvIiwiYSI6ImNsbzRhbXhzcDAwMzMydXBoYmJxbW11ZjMifQ.fw-spr6aqF4LYqfNKiGw_w'
});

const	terrain = tgeo.getTerrainRgb(
	[46.5763, 7.9904],
	5.0,
	12
);

