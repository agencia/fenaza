<?php
/*
 * jQuery File Upload Plugin PHP Example 5.14
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

//error_reporting(E_ALL | E_STRICT);

error_reporting(E_ALL);
ini_set("display_errors", 1);

require('../vendor/uploadfiles/UploadHandler.php');
$upload_handler = new UploadHandler();
