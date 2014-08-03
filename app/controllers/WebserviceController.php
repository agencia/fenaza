<?php

class WebserviceController extends BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 1406246400 -> 7 / 25 / 2014 @ 0:0:0 UTC
	 */

	public function get($since = 0)
	{
		$response = array();
			if(is_numeric($since)){
				//find out if there is new data available
				$last = DB::table('version')->whereRaw('UNIX_TIMESTAMP(last) > ' . $since)->count();
				if($last > 0 ){
					if(DB::table('portada')->whereRaw('UNIX_TIMESTAMP(updated_at) > ' . $since)->count()>0){
						$response["po"] = DB::table('portada')->first()->src;
					}
					if(DB::table('apartado')->whereRaw('UNIX_TIMESTAMP(updated_at) > ' . $since)->count()>0){
						$apartados = DB::table('apartado')->whereRaw('UNIX_TIMESTAMP(updated_at) > ' . $since)->get();
						foreach ($apartados as  $a) {
							$response['ap'][$a->key] = array(
								'name'		=> $a->apartado,
								'status' 	=> $a->status
								);
						}
					}

					if(DB::table('evento')->whereRaw('UNIX_TIMESTAMP(updated_at) > ' . $since)->count()>0){
						$eventos = DB::table('evento')->leftJoin('apartado', 'apartado.id', '=', 'evento.idApartado')->whereRaw('UNIX_TIMESTAMP(evento.updated_at) > ' . $since)->get();
						foreach ($eventos as $e) {
							$response['ap'][$e->key]['e'][] = array(
								'id'	=> $e->idEvento,
								'name' 	=> $e->evento,
								'date' 	=> $e->fecha,
								'img'	=> $e->src,
								'lbl1'	=> $e->etiqueta1,
								'lbl2'	=> $e->etiqueta2,
								'sts'	=> $e->status,
								);
						}
					}
					if(DB::table('red')->whereRaw('UNIX_TIMESTAMP(updated_at) > ' . $since)->count()>0){
						$redes = DB::table('red')->whereRaw('UNIX_TIMESTAMP(updated_at) > ' . $since)->get();
						foreach ($redes as $r) {
							$response['rd'][$r->key] = array(
								'name' 	=> $r->red,
								'url' 	=> $r->url
								);
						}
					}
					$response['v'] = time();
					return Response::json($response,200);
				} else {
					return Response::json(array("ok"=>"uptodate"),204);
				}
			} else {
				return Response::json(array("error"=>"format data"),400);
			}
			
	}

	public function zip($since = 0){

			if(is_numeric($since)){
				$last = DB::table('version')->whereRaw('UNIX_TIMESTAMP(last) > ' . $since)->count();
				if($last > 0 ){
					if(DB::table('portada')->whereRaw('UNIX_TIMESTAMP(updated_at) > ' . $since)->count()>0){
						$response[] = "'".DB::table('portada')->first()->src."'";
					}

					if(DB::table('evento')->whereRaw('UNIX_TIMESTAMP(updated_at) > ' . $since)->count()>0){
						$eventos = DB::table('evento')->leftJoin('apartado', 'apartado.id', '=', 'evento.idApartado')->whereRaw('UNIX_TIMESTAMP(evento.updated_at) > ' . $since)->get();
						foreach ($eventos as $e) {
							$response[] = "'".$e->src."'";
						}
					}


					$fp = popen('zip -r - ' . implode(' ', $response), 'r');
					//echo 'zip -r - ' . implode(' ', $response);
					$contents ='';
					// pick a bufsize that makes you happy (8192 has been suggested).
					$bufsize = 8192;
					$buff = '';
					while( !feof($fp) ) {
					   $buff = fread($fp, $bufsize);
					   $contents .= $buff;
					}
					pclose($fp);

					$responses = Response::make($contents, '200');

					$responses->header('Content-Type', 'application/zip');
					$responses->header('Content-disposition', 'attachment; filename="fenaza.zip"');

					return $responses;

					//return Response::json($response,200);
				} else {
					return Response::json(array("ok"=>"uptodate"),204);
				}
			} else {
				return Response::json(array("error"=>"format data"),400);
			}
		}

	public function check($since = 0){
			if(is_numeric($since)){
				$last = DB::table('version')->whereRaw('UNIX_TIMESTAMP(last) > ' . $since)->count();
				if($last > 0 ){
					return Response::json(array("ok"=>"there is new content available"),200);
				} else {
					return Response::json(array("ok"=>"uptodate"),204);
				}
			} else {
				return Response::json(array("error"=>"format data"),400);
			}

	}
}
