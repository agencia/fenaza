<?php

class ApartadosController extends BaseController {

	public function update($id){
			$apartado = Apartado::find($id);
			$apartado->key = Input::get("key");
			$apartado->apartado = Input::get("apartado");
			$apartado->status = Input::get("status");
			$apartado->save();

			return Response::json($apartado);
	}
	public function store(){
			$apartado = new Apartado;
			$apartado->key = Input::get("key");
			$apartado->apartado = Input::get("apartado");
			$apartado->save();

			return Response::json($apartado);
	}

	public function destroy($id){
			Apartado::destroy($id);

			return Response::json(array("ok"=>"ok"));
	}


}
