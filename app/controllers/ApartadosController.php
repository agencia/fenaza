<?php

class ApartadosController extends BaseController {

	public function putIndex($id){
			//	$id = Input::get("id");
			$apartado = Apartado::find($id);
			$apartado->img = Input::get("img");
			$apartado->key = Input::get("key");
			$apartado->apartado = Input::get("apartado");
			//$apartado->updated_at = Input::get("updated_at");
			$apartado->save();

			return Response::json($apartado);
	}


}
