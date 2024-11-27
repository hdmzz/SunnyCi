import axios from "axios";
import turf from "turf";
import { BboxType } from "../type";
import Utils from "../Utils/geoUtils";
import HugoGeo from "../HugoGeo";

class	WFSSource {
	center: [lat: number, lon: number];
	radius: number;
	url: string | undefined;
	bbox: BboxType;

	constructor( center: [lat: number, lon: number], radius: number ) {
		this.center = center;
		this.radius = radius;
		this.bbox = HugoGeo.getBbox( center, this.radius  );
	};

//source of  feature to fecth  https://data.geopf.fr/wfs/ows?SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities
//ELEVATION.CONTOUR.LINES ==> isohypse elevation ~~
//! interessant BDTOPO_V3:pleins_de_trucs_la_dedans
	public	wfsUrlBuilder( typename: string = "ORTHOIMAGERY.ORTHOPHOTOS.GRAPHE.2016-2020:graphe_bdortho" ) {
		this.url = `https://data.geopf.fr/wfs/ows?SERVICE=WFS
		&REQUEST=GetFeature
		&typeName=${typename}
		&VERSION=2.0.0
		&SRSNAME=EPSG:4326
		&outputFormat=application/json
		&BBOX=${this.bbox.northWest[0]},${this.bbox.southEast[1]},${this.bbox.southEast[0]},${this.bbox.northWest[1]},EPSG:4326`;

		return ( this.url );
	};
};

export default	WFSSource;
