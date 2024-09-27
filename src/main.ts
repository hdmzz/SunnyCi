import View from "./View";

const	viewerDiv = document.getElementById( 'viewerDiv' );

const	view = new View( window.innerWidth, window.innerHeight, viewerDiv );
view.setUpTerrain();
