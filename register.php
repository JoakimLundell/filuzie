<?php

$values = '';
foreach($_POST as $key=>$value) {
    $values.= $key . "=" . $value . "\t";
}

$filename = './rvsp/rvsp.txt';
$handle = fopen($filename, 'a');
fwrite($handle, $values);
fclose($handle);