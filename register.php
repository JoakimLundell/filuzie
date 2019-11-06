<?php


$values = '';
foreach($_POST as $key=>$value) {
    $values.= $key . "=" . $value . "\t";
}

print $value;
var_dump($_POST["name"]);
var_dump("Hello");

$filename = './rvsp/rvsp.txt';
$handle = fopen($filename, 'a');
fwrite($handle, $values);
fclose($handle);


return "Thanks";