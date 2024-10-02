import GeometryLayer from "./Layer/GeometryLayer";
import View from "./View";

const	viewerDiv = document.getElementById( 'viewerDiv' ) as HTMLDivElement;

const	view = new View( window.innerWidth, window.innerHeight, viewerDiv, true );

const	ed = (await fetch( "../data/onlyOneBuilding.json" ).then( res => res.json() ));

const	geometryLayer = new GeometryLayer( "cityBuildings", ed );

const	buildingsLayer = geometryLayer.buildBuildings({ merge: true });



view.addLayer( buildingsLayer );
