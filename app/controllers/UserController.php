<?php

class UserController extends BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function getIndex()
	{
		if (Auth::check())
		{
			$redes = Red::all();
			$apartados = Apartado::all();
		    return Response::json(array(
		    	"success"=>"Logged in", 
		    	"redes"=>$redes,
		    	"apartados" => $apartados
		    	),200);
		} else {
			return Response::json(array("error"=>"Not logged in"),401);
		}
	}

	private function getSetup(){
		$password = Hash::make('root');
		$user = User::find(1);
		$user->password = $password;
		$user->save();
	}

	public function postLogin(){
		//$response = Input::all();
		$email = Input::get("email");
		$password = Input::get("password");
		if (Auth::attempt(array('email' => $email, 'password' => $password)))
		{
		    //return Response::json(array("ok"=>"ok"),200);
		    return Redirect::action('UserController@getIndex');
		    //$this->getIndex();
		}
		return Response::json(array("ok"=>"no"),400);
	}

	public function getLogout(){
		Auth::logout();
		return Redirect::to("/");
	}
}
