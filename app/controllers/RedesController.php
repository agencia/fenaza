<?php

class RedesController extends BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function getIndex()
	{
		$redes = Red::all();
		//print_r($redes);
		return Response::json($redes);
	}

	public function postIndex(){
		$idRed = Input::get("idRed");
		$red = Red::find($idRed);
		$red->url = Input::get("url");
		$red->save();

		return Response::json($red);
	}

}
