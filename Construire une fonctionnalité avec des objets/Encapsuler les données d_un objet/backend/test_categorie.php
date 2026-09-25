

<?php

require_once 'Categorie.php';




$cat = new Categorie(1, "Web", "Bleu", "fa-code");


echo "Nom initial: " . $cat->getNom() . "<br>";


$cat->setNom("Developpement Web");

echo "Nouveau nom: " . $cat->getNom() . "<br>";



$cat->setNom("A");