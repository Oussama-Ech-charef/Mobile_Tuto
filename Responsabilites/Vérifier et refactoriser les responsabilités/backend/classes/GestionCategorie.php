<?php



require_once 'Categorie.php';

class GestionCategorie {
    public function getAll(): array {
        return [
            new Categorie(1, "Developpement Web", "blue", "fa-code"),
            new Categorie(2, "Design", "pink", "fa-paint-brush")
        ];
    }
}