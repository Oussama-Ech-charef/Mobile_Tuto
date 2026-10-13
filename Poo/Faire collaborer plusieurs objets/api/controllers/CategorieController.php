<?php


require_once '../../backend/classes/GestionCategorie.php';


class CategorieController {
    public function listerCategories(): void {
        $gestion = new GestionCategorie();
        $categories = $gestion->getAll();

        foreach ($categories as $cat) {
            echo $cat->getNom() . "<br>";
        }
    }
}



$controller = new CategorieController();
$controller->listerCategories();