import Fetch from "../Fetcher/Fetch";
import { BboxType } from "../ThreeGeo";

class	RgbModel {
	public	unitsPerMeter: number;
	public	projectCoords: Function;
	public	mapBoxToken: string;

	constructor ( units: number, projectCoords: Function, token: string ) {
		this.mapBoxToken = token;
		this.projectCoords = projectCoords;
		this.unitsPerMeter = units;
	};

	public	fetch( zpCovered: number[][], bbox: BboxType ): void {
		//calculer le zoomPositionElevation
		const	zoomPositionElevation = Fetch.getZoomPositionElevation( zpCovered );
		let	count = 0;

		zoomPositionElevation.forEach( async zoomPos => {
			const	tile = await Fetch.fetchTile( zoomPos, this.mapBoxToken, 'mapbox-rgb');

			count++;
		});
	};
};


export default	RgbModel;
