<?php

class CSSModules 
{
    public function cssModules($file) {
        $path = './dist/css/json/'. $file .'.json';
        $getFile = file_get_contents($path);
        return json_decode($getFile);
    }
    
    public function getCSSClass($scope, $classes) {
        $result = '';
        $i = 0;
    
        foreach($classes as $class) {        
            if ($i > 0) {
                $result .= ' ';
            }
            $result .= $scope->$class;       
            $i++;
        }
    
        return $result;
    }
}