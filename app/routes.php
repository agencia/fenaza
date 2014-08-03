<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('indexapp');
});

Route::Controller("user","UserController");
Route::resource("portada","PortadaController");
Route::Controller("redes","RedesController");
Route::resource("apartados","ApartadosController");
Route::resource("eventos","EventosController");
Route::get('/api/{since?}','WebserviceController@get');
Route::get('/zip/{since?}','WebserviceController@zip');
Route::get('/check/{since?}','WebserviceController@check');
