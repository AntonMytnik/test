<?php
$json = $_POST['json'];
$json_obj = json_decode($json, true);
// var_dump( $json_obj['element']);
foreach ($json_obj['element'] as &$value) {
      echo($value['name']);
      echo(' стоит ');
      echo($value['price']);
      echo('  ');
}
?>