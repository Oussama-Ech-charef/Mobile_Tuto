<?php
require_once 'User.php';

class Auteur extends User {
    private string $nom;
    private string $prenom;
    private string $biographie;

    // Surcharge de la méthode du parent
    public function getRoleName(): string {
        return "Auteur publié";
    }
}
?>