import { BufferGeometry, Material, Mesh, MeshPhongMaterial, NormalBufferAttributes, Object3DEventMap, PlaneGeometry } from "three";
import { fromArrayBuffer, ReadRasterResult } from "geotiff";

class	GreyModel {
	private	token: string;
	private	data: ReadRasterResult;
	private	watcher: (payload: { what: string; data: Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>[]; }) => void;
	private	terrainMat: MeshPhongMaterial;

	constructor( token: string, watcher: (payload: { what: string; data: Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>[]; }) => void ) {
		this.token = token;
		this.watcher = watcher;
		this.data = {} as ReadRasterResult;
		this.terrainMat = new MeshPhongMaterial({ color: 'blue', wireframe: true });
	};

	public async	fetch( url: string ) {
		const	arrayBuffer = await fetch( url ).then( res => {
			if ( !res.ok ) {
				throw new Error( res.statusText );
			};
			const	ret = res.arrayBuffer();
			return ( ret );
		});

		const	rawData = await fromArrayBuffer( arrayBuffer );
		const	tifImg = await rawData.getImage();
		const	data = await tifImg.readRasters({ interleave: true });

		this.data = data;
		if ( this.data ) {
			this.build();
		};
	};

	private async	build() {
		const	mesh = await this._build();

		this.watcher({ what: 'grey-dem', data: mesh })
	};

	private async	_build(): Promise<Mesh[]> {
		const	data = this.data;
		const	{ width, height } = this.data;
		const	plane = new PlaneGeometry( width, height, width-1, height-1 );
		console.log( plane );
		const	arrBuff = new Array( plane.attributes.position.count );//pour la taille de  l'array==> raion de performance autant travailler comme a l'epoque cest bien plus opti
		const	arr = arrBuff.fill( 1 );
		arr.forEach(( _element, index ) => {
			plane.attributes.position.setZ( index, (( data[index] as number / 15 )) )
		});
		const	mesh = new Mesh( plane, this.terrainMat );
		mesh.userData = {isGrey: true};

		return ([ mesh ]);
	};
};

export default	GreyModel;
