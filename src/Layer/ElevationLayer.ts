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

		this.parseBil( bilBuffer );

		console.log(bilBuffer);
	};

	private			parseBil( buffer: ArrayBuffer )  {
		const	metadata = {
			ncols: 3601,
			nrows: 3601,
			cellsize: 0.000833333,
			nodata_value: -99999,
		};
		const	size = Math.sqrt( buffer.byteLength / 4 );//! / 4  car bil vient au format32 bits si 16 alors / 2.
		console.log(size);
		const	elevation = new	Int32Array( buffer );

		const	grid = [];
		for ( let y = 0; y < size; y++ ) {
			grid.push( elevation.slice( y * size, ( y + 1 ) * size ) );
		};
	};
};

export default	ElevationLayer;
