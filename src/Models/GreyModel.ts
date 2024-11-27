import { BufferGeometry, DataTexture, DoubleSide, Material, Mesh, MeshPhongMaterial, NormalBufferAttributes, Object3DEventMap, PlaneGeometry, RGBAFormat } from "three";
import { fromArrayBuffer, ReadRasterResult } from "geotiff";
import WMSSource from "../Source/WMSRSource";
import getPixels from "../Fetcher/GetPixels";
import Fetch from "../Fetcher/Fetch";
import { color } from "three/webgpu";
import WMSRSource from "../Source/WMSRSource";

async function	getPNGPixels( url: string ): Promise<ImageData> {
	try {
		const	imageData = await fetch( url ).then(( res ) => res.blob());
		const	image = await new Promise<HTMLImageElement>((resolve) => {
			const	img = new Image();
			img.src = URL.createObjectURL( imageData );
			img.onload = () => resolve( img );
		});
	
		const	canvas = document.createElement( "canvas" );
		const	ctxt = canvas.getContext( "2d" );
	
		canvas.width = image.width;
		canvas.height = image.height;
		ctxt?.drawImage( image, 0, 0 );
	
		const	imgData = ctxt?.getImageData( 0, 0, image.width, image.height );
	
		return ( imgData as ImageData );
	} catch ( error ) {
		console.log( error );
		throw new Error( "une erreur est survenue getPng Pixel GReyModel" );
	};
};
class	GreyModel {
	private	token: string;
	private	data: ReadRasterResult | undefined;
	private	dataPng: Uint8ClampedArray<ArrayBufferLike> | undefined;
	private	watcher: (payload: { what: string; data: Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>[]; }) => void;
	private	terrainMat: MeshPhongMaterial;
	private	terrainRasterBbox: number[];
	private	center: [lat: number, lon: number];
	private	source: WMSRSource | undefined;

	constructor( token: string, watcher: (payload: { what: string; data: Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>[]; }) => void, center: [lat: number, lon: number], source?: WMSRSource ) {
		this.token = token;
		this.watcher = watcher;
		this.data = undefined;
		this.dataPng = undefined;
		this.terrainMat = new MeshPhongMaterial({ color: 'white', side: 2, wireframe: true });
		this.terrainRasterBbox = [];
		this.center = center;
		this.source = source;
	};
	public async	fetchTIF( url: string ) {
		const	arrayBuffer = await fetch( url ).then(( res ) => {
			if ( !res.ok ) {
				throw new Error( res.statusText );
			};
			const	ret = res.arrayBuffer();
			return ( ret );
		});

		const	rawData = await fromArrayBuffer( arrayBuffer );
		const	tifImg = await rawData.getImage();
		this.terrainRasterBbox = tifImg.getBoundingBox();
		const	data = await tifImg.readRasters({ interleave: true });

		this.data = data;
		if ( this.data ) {
			this.build();
		};
	};

	public async	fetchPNG( url: string ) { //image width et imageheight correpsone au parametre de ll'url
		try {
			const	imgData = await getPNGPixels( url );

			this.dataPng = imgData?.data;

			if ( this.dataPng ) {
				this.build();
			};
		} catch ( err ) {
			console.log( err );
			throw new Error( "Fecth png grey model failed" );
		};
	};

	private async	build() {
		let	mesh: Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>[] = [];

		if  ( this.data !== undefined )
			mesh = await this._build();
		else if ( this.dataPng !== undefined ) {
			mesh = await this._buildPng()
		}

		this.watcher({ what: 'grey-dem', data: mesh });
	};

	private async	_build( heightScale = 30 ): Promise<Mesh[]> {
		if ( !this.data ) {
			throw new Error("Data is undefined");
		};
		const	data = this.data as ReadRasterResult;
		const	{ width, height } = data;

		const	plane = new PlaneGeometry( width, height, width - 1, height - 1 );
		const	arrBuff = new Array( plane.attributes.position.count );//pour la taille de  l'array==> raion de performance autant travailler comme a l'epoque cest bien plus opti
		const	arr = arrBuff.fill( 1 );
		arr.forEach(( _element, index ) => {
			plane.attributes.position.setZ( index, (( data[index] as number / heightScale )) )
		});
		const	mesh = new Mesh( plane, this.terrainMat );
		mesh.userData = {isGrey: true};
		mesh.receiveShadow = true;

		return ([ mesh ]);
	};

	private smoothElevation(x: number, y: number, width: number, height: number): number {
		const getPixel = (i: number, j: number) => {
			const index = (i + j * width) * 4;
			if (i < 0 || i >= width || j < 0 || j >= height) {
				return ( 0 );
			};
			return this.dataPng ? this.dataPng[index] : 0;
		};

		const neighbors = [
			getPixel(x - 1, y - 1), getPixel(x, y - 1), getPixel(x + 1, y - 1),
			getPixel(x - 1, y), getPixel(x, y), getPixel(x + 1, y),
			getPixel(x - 1, y + 1), getPixel(x, y + 1), getPixel(x + 1, y + 1)
		];

		const sum = neighbors.reduce(( a, b ) => a + b, 0);
		const average = sum / neighbors.length;
		return (average / 255 * 100);
	}

	private async	_buildPng() {
		if ( !this.dataPng ) {
			throw new Error("dataPng is undefined");
		};
		const	data = this.dataPng;
		const	width = 512, height = 512;
		const	planeGeom = new PlaneGeometry( width, height, width - 1, height - 1 );
		const	positionAttribute = planeGeom.attributes.position;

		for (let i = 0; i < width; i++) {
			for (let j = 0; j < height; j++) {
				const	index = ( i + j * width ) * 4;
				const	elevation = this.smoothElevation(i, j, width, height);
				//const	elevation = data[index] / 255 * 100;
				const	vertexIndex = i + j * width;
				positionAttribute.setZ( vertexIndex, elevation );
			};
		};

		const	plane = new Mesh( planeGeom, this.terrainMat );
		this.resolveTexture(( tex ) => {
			if ( tex ) {
				plane.material = new MeshPhongMaterial({
					side: DoubleSide,
					map: tex,
					wireframe: false,
				});
			};
		});
		plane.userData = {isGrey: true};
		plane.receiveShadow = true;

		return ([ plane ]);
	};

	private async	resolveTexture( onTex: ( texture: DataTexture ) => void ) {
		const	colorSourceUrl = this.source?.wmsrColorUrlBuilder();
		const	pixels = await Fetch.fetchPngMap( colorSourceUrl as string );
		const	tex = new DataTexture( pixels.data, pixels.shape[0], pixels.shape[1], RGBAFormat );

		tex.flipY = true;
		tex.needsUpdate = true;
		if ( onTex ) {
			onTex( tex );
		};
	};
};

export default	GreyModel;
