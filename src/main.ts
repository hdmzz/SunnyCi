import GeometryLayer from "./Layer/GeometryLayer";
import View from "./View";

const	viewerDiv = document.getElementById( 'viewerDiv' ) as HTMLDivElement;

//const	view = new View( window.innerWidth, window.innerHeight, viewerDiv );

const	ed = (await fetch( "../data/building2.geojson" ).then( res => res.json() ));

console.log( typeof ed )
const	geometryLayer = new GeometryLayer( "cityBuildings", ed );

geometryLayer.buildBuildings();
