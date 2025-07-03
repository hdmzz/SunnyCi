use wasm_bindgen::prelude::*;
use proj4rs::proj::Proj;
use serde::{Serialize, Deserialize};
use serde_wasm_bindgen;

#[derive(Serialize, Deserialize)]
pub struct Point {
    pub x: f64,
    pub y: f64,
}

#[wasm_bindgen]
pub fn gen_shape_wasm( points: JsValue, center: JsValue ) -> Result<JsValue, JsValue> 
{
    let points: Vec<Vec<Vec<f64>>> = serde_wasm_bindgen::from_value( points )?;
    let center: Vec<f64> = serde_wasm_bindgen::from_value( center )?;
    let center_coords = ( center[1], center[0] );
    let center_proj = reproject(center_coords);
    let mut result = Vec::new();

    for point_group in points {
        let mut group_result = Vec::new();
        for point in point_group {
            let ( lon, lat ) = ( point[0], point[1] );
            let mut coords = ( lon, lat );
            
            web_sys::console::log_1(&format!("Coords avant reprojection: ({}, {})", coords.0, coords.1).into());
			coords = reproject(coords);
            web_sys::console::log_1(&format!("Coords après reprojection: ({}, {})", coords.0, coords.1).into());
            
            let projected = coords;
            group_result.push( Point { x: projected.0 - center_proj.0, y: -( projected.1 - center_proj.1 ) });
        }
        result.push( group_result );
    }

    Ok( serde_wasm_bindgen::to_value( &result )? )
}

pub fn reproject( mut coords: ( f64, f64 ))  -> ( f64, f64 )
{
	let from_proj_str = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
    let to_proj_str = "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs";

    let from_proj = Proj::from_proj_string( from_proj_str ).unwrap();
    let to_proj = Proj::from_proj_string( to_proj_str ).unwrap();

	proj4rs::transform::transform( &from_proj, &to_proj, &mut coords ).unwrap();
	coords
}
