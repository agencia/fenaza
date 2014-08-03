<?php

class Webservice {
	
	public function get($since){

	}

	private function isNewest($since){
		$last = DB::table('version')->where('last', '>', $since)->first();
		var_dump($last);

	}
}

//Webservice.php