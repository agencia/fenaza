<?php

class EventosController extends BaseController {

	public function getIndex($idApartado){

	}

	public function index()
	{
		$e = Evento::all();

		return Response::json($e);
	}

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
}
