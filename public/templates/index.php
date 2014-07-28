<?php 
if ($handle = opendir('.')) {
    while (false !== ($file = readdir($handle)))
    {
        if ($file != "." && $file != ".." && strtolower(substr($file, strrpos($file, '.') + 1)) == 'html')
        {
            //$thelist .= '<li><a href="'.$file.'">'.$file.'</a></li>';
            echo file_get_contents('./' . $file, FILE_USE_INCLUDE_PATH);
        }
    }
    closedir($handle);
}