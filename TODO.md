rendre universel le getBBox
==> marche a suivre: 

1. Latitude : La distance en degrés de latitude est relativement
 constante partout sur le globe. Environ 1 degré de latitude équivaut à 111 km.

 2. Longitude : La distance en degrés de longitude varie en fonction de la latitude. À l'équateur, 
 1 degré de longitude équivaut à environ 111 km, mais cette distance diminue à mesure que vous 
 vous rapprochez des pôles. Pour une approximation, vous pouvez utiliser la formule suivante :


- [ @hdmzz ] degres de longitude = Distancce souhaitee en km / 111 * cos(latitude en radians)
Latitude en radians
=
Latitude en radian = Latitude en degre * PI/180

//ok 

- [ @hdmzz] ==> essayer de trouver la photo corespondante a la bounding box
@hdmzz https://geoservices.ign.fr/documentation/services/services-deprecies/images-tuilees-wmts-ogc

@hdmzz trouver un moyen de rapatrier un fichier d'une autre branche 

@hdmzz trouver  les url utiliser par itowns et recompose celle aui nous interesse
- list
	- https://data.geopf.fr/wmts?LAYER=ORTHOIMAGERY.ORTHOPHOTOS&FORMAT=image/jpeg&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&STYLE=normal&TILEMATRIXSET=PM&TILEMATRIX=15&TILEROW=11736&TILECOL=16964
	
	-https://data.geopf.fr/wmts?LAYER=ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES.MNS&FORMAT=image/x-bil;bits=32&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&STYLE=normal&TILEMATRIXSET=WGS84G&TILEMATRIX=17&TILEROW=32487&TILECOL=135697
	

