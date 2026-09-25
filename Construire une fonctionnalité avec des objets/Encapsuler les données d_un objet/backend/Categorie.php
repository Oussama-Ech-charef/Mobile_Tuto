

<?php

class Categorie {


    private int $id;
    private string $nom;
    private string $couleur;
    private string $icone;




    public function __construct(int $id, string $nom, string $couleur, string $icone) {
        
        $this->setId($id);
        $this->setNom($nom);
        $this->setCouleur($couleur);
        $this->setIcone($icone);
    }



    public function getId(): int {
        return $this->id;
    }

    public function setId(int $id): void {
        $this->id = $id;
    }

    public function getNom(): string {
        return $this->nom;
    }

    public function setNom(string $nom): void {
        if (strlen($nom) >= 2) {

            $this->nom = $nom;
        } else {
            echo "Erreur: Le nom doit contenir au moins 2 caracteres !<br>";
        }
    }

    //couleur
    public function getCouleur(): string {
        return $this->couleur;
    }
    
    public function setCouleur(string $couleur): void {
        $this->couleur = $couleur;
    }


    //icone
    public function getIcone(): string {
        return $this->icone;
    }

    public function setIcone(string $icone) : void {
        $this->icone = $icone;
    }


    public function afficher(): string {
        return $this->id . " - " . $this->nom . " - " . $this->couleur . " - " . $this->icone;
    }
    
}