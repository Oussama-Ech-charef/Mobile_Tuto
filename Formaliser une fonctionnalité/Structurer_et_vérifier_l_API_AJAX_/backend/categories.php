<?php

header('Content-Type: application/json');


$categories = [
    ["id" => 1, "nom" => "Developpement Web"],
    ["id" => 2, "nom" => "Design UI/UX"],
    ["id" => 3, "nom" => "Mobile Development "]
];



echo json_encode($categories);