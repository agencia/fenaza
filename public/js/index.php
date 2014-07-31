<?php 
header('Content-type: text/javascript');

$files = array(
        "js/lib/jquery-2.1.1.min.js",
        "js/lib/underscore-min.js",
        "js/lib/backbone-min.js",
        "js/lib/bootstrap.min.js",
        "js/lib/serializeObject.js",
        "js/init.js",
		"js/views/login.js",
        "js/router.js",
        "js/views/home.js",
        "js/views/login.js",
        "js/views/red.js",
        "js/models/red.js",
        "js/models/apartado.js",
        "js/models/evento.js",
        "js/models/portada.js",
        "js/views/evento-new.js",
        "js/views/evento.js",
        "js/views/layout.js",
        "js/views/apartado.js",
        "js/views/apartado-list.js",
        "js/views/apartado-new.js",
        "js/views/redes.js",
        "js/views/apartado-edit.js",
        "js/views/apartado-detail.js"
	);

    foreach($files as $file)
    {
        if ($file != "." && $file != ".." && strtolower(substr($file, strrpos($file, '.') + 1)) == 'js')
        {
            //$thelist .= '<li><a href="'.$file.'">'.$file.'</a></li>';
            echo "\r\n";
            echo file_get_contents('../' . $file, FILE_USE_INCLUDE_PATH);
        }
    }