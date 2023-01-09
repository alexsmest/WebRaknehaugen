<?php

$title = $_POST["title"];
$category = $_POST["category"];

$json = file_get_contents("../json/$category.json");
$json = json_decode($json, true);

foreach ($json as $key => $value) {
    if ($value["title"] == $title) {
        unset($json[$key]);
    }
}

$json = array_values($json);
$json = json_encode($json);
file_put_contents("../json/$category.json", $json);

unlink("../posts/$category/$title.html");
unlink("../images/$category/$title.jpg");

?>