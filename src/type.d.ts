export type	BboxType = {
	feature: {
		type: string;
		geometry: {
			properties: {};
			type: string;
			coordinates: [number[][]];
		};
	};
	northWest: number[];
	southEast: number[];
};

export type	PolygonFeature = {
	type: string;
	geometry: {
		properties: {};
		type: string;
		coordinates: [number[][]];
	};
};
