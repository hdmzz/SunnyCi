import WMTSSource from "../Source/WMTSSource";
import { fromArrayBuffer } from "geotiff";
class	ElevationLayer {
	source: WMTSSource;

	constructor ( source: WMTSSource ) {
		this.source = source;
		this.fetchBil();
	};

	private async	fetchBil() {
		const	bilResponse = await fetch( this.source.url );
		const	bilBuffer = await  bilResponse.arrayBuffer();

		const grid = this.parseBil( bilBuffer );

		console.log(grid);
	};

	private			parseBil( buffer: ArrayBuffer )  {
		const	metadata = {
			ncols: 3601,
			nrows: 3601,
			cellsize: 0.000833333,
			nodata_value: -99999,
			elements: 262144,//ok pas besoin car valeur dans buffer.bytelenght
		};
		const	fileSize = buffer.byteLength / 4;//! / 4  car bil vient au format32 bits si 16 alors / 2; pour connaitre le nombre de row et de col on fait racine carre puisqu fileSize est egat a nrow *  ncol
		const	gridSize = Math.sqrt( fileSize );
		const	data =  buffer ;
		console.log( data );
		
		const	grid = [];
		
		return ( grid );
	};
};

export default	ElevationLayer;
