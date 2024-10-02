import { BboxType } from "../main";

class	RgbModel {
	public	unitsPerMeter: number;
	public	projectCoords: Function;
	public	mapBoxToken: string;

	constructor ( units: number, projectCoords: Function, token: string ) {
		this.mapBoxToken = token;
		this.projectCoords = projectCoords;
		this.unitsPerMeter = units;
	};

	public	fetch( zpCovered: Array<Array<number>>, bbox: BboxType ): void {
		//calculer 
	}

}


export default	RgbModel;
