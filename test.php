<?php
$json = $_POST['json'];
$json_obj = json_decode($json, true);
echo $json_obj['secretIdentity']['a'];
?>