<?php

header('Content-Type: application/json');

$fichier = 'categories.json';

$categories = json_decode(file_get_contents($fichier), true);

$method = $_SERVER["REQUEST_METHOD"];


if ($method === "GET") {

    echo json_encode($categories);

}


elseif ($method === "POST") {

    $data = json_decode(file_get_contents("php://input"), true);

    $ids = array_column($categories, "id");

    $data["id"] = max($ids) + 1;

    $categories[] = $data;

    file_put_contents(
        $fichier,
        json_encode($categories)
    );

    echo json_encode($categories);

}


elseif ($method === "PUT") {

    $data = json_decode(file_get_contents("php://input"), true);

    foreach ($categories as &$catg) {

        if ($catg["id"] == $data["id"]) {

            $catg["nom"] = $data["nom"];
            $catg["couleur"] = $data["couleur"];
            $catg["icone"] = $data["icone"];
        }
    }

    file_put_contents(
        $fichier,
        json_encode($categories)
    );

    echo json_encode($categories);

}

elseif ($method === "DELETE"){
    $data = json_decode(file_get_contents("php://input"), true);

    $id = $data['id'];

    $categories = array_filter($categories, function ($category) use ($id) {
        return $category['id'] != $id;
    });

    $categories = array_values($categories);

    file_put_contents($fichier, json_encode($categories));

    echo json_encode([
        "message" => "Catégorie supprimée"
    ]);

}
?>