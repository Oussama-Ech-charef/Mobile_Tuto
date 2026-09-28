







<?php

// Déclarer que la réponse est du JSON
header('Content-Type: application/json');

// 2. Préparer les données (Simulation de BDD)

$categories = [
    ["id" => 1, "nom" => "Developpement Web"],
    ["id" => 2, "nom" => "Design UE/UX"]
];

// 3. Convertir le tableau PHP en JSON et l'afficher

echo json_encode($categories);

?>