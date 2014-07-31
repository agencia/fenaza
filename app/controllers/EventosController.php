<?php

class EventosController extends BaseController {


	public function store(){
		$e = new Evento;
		$e->evento = Input::get("evento");
		$e->idApartado = Input::get("idApartado");
		$e->fecha = Input::get("fecha");
		$e->etiqueta1 = Input::get("etiqueta1");
		$e->etiqueta2 = Input::get("etiqueta2");
		$e->save();

		return Response::json($e);
	}

	public function update($id){
		$e = Evento::find($id);
		$e->evento = Input::get("evento");
		$e->idApartado = Input::get("idApartado");
		$e->fecha = Input::get("fecha");
		$e->etiqueta1 = Input::get("etiqueta1");
		$e->etiqueta2 = Input::get("etiqueta2");
		$e->save();
	}

	public function destroy($id){
			Evento::destroy($id);

			return Response::json(array("ok"=>"ok"));
	}
}
