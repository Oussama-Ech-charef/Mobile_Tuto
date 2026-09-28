<?php


require_once 'Categorie.php';


$cat1 = new Categorie(1, "Developpement Web", "Bleu", "fa-code");
$cat2 = new Categorie(2, "Design UI/UX ", "Rouge", "fa-paint-brush");




$cat1->afficher();

echo "<br>";

$cat2->afficher();