import TileSource from "./TileSource";

class XYZSource extends TileSource {
    public baseUrl: string;

    constructor(center: [lat: number, lon: number], radius: number, zoom: number, baseUrl: string) {
        // Le format est généralement image/png ou image/jpeg pour l'imagerie
        super(center, radius, "image/png", zoom, "PM"); // "PM" (Pseudo-Mercator) est un choix courant
        this.baseUrl = baseUrl;
    }

    public getUrl(): string {
        return `${this.baseUrl}/${this.zoom}/${this.tileCol}/${this.tileRow}.png`;
    }
}

export default XYZSource;
