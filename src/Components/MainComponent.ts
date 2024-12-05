
import { GeolocationService } from "../Services/GeolocationService";
import RgbModel from "../Models/RgbModel";
// ...existing code...

class MainComponent {
	// ...existing code...

	async initialize() {
		try {
			const position = await GeolocationService.getCurrentPosition();
			const { latitude, longitude } = position.coords;
			console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
			
			// Utilisez la latitude et la longitude pour géoréférencer le modèle
			const bbox: BboxType = {
				northWest: [longitude - 0.1, latitude + 0.1],
				southEast: [longitude + 0.1, latitude - 0.1]
			};
			const rgbModel = new RgbModel(/* ...params... */);
			rgbModel.georeference(bbox);
		} catch (error) {
			console.error("Error getting geolocation: ", error);
		}
	}

	// ...existing code...
}
