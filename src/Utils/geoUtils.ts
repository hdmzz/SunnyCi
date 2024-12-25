import * as turfHelpers from '@turf/helpers';
import turfDestination from '@turf/destination';

class	Utils {

	static createTurfPoint( latLon: [number, number]) {
		return turfHelpers.point([latLon[1], latLon[0]]);
	};

	/**
	 *	@returns minLat : La latitude minimale est s, qui est la latitude du point sud-est.
				minLon : La longitude minimale est w, qui est la longitude du point nord-ouest.
				maxLat : La latitude maximale est n, qui est la latitude du point nord-ouest.
				maxLon : La longitude maximale est e, qui est la longitude du point sud-est.
	 */
	static	originRadiusToBbox( origin: [lat: number, lon: number], radius: number ): [minlon: number, minLat: number, maxLon: number, maxLat: number]
	{
		const	[w, n] = turfDestination( this.createTurfPoint( origin ), radius, -45, "kilometers" ).geometry.coordinates;
		const	[e, s] = turfDestination( this.createTurfPoint( origin ), radius, 135, "kilometers" ).geometry.coordinates;

		return ([ w, s, e, n ]);
	};

	static	tileToBbox() {
		
	}
};

export default	( Utils );
