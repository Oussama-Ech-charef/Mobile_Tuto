<?php

class Categorie {

    public $id;
    public $nom;
    public $couleur;
    public $icon;

    public function __construct($id, $nom, $couleur, $icone){
        $this->id = $id;
        $this->nom = $nom;
        $this->couleur = $couleur;
        $this->icon = $icone;
    }



    public function afficher() {
        echo $this->nom . " - " . $this->couleur . " - " . $this->icon;
    }
}

?>