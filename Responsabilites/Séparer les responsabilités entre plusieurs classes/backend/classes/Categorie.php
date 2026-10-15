<?php
class Categorie{
    private int $id;
    private string $nom;
    private string $couleur;
    private string $icone;

    public function __construct($id,$nom,$couleur,$icone){
        $this->id = $id;
        $this->nom = $nom;
        $this->couleur = $couleur;
        $this->icone = $icone;
    }
    public function getId(): int{
        return $this->id;
    }
    public function getNom(): string{
        return $this->nom;
    }
    public function SetNom(string $nom): void{
        $this->nom = $nom;
    }
    public function getCouleur(): string{
        return $this->couleur;
    }
    public function SetCouleur(string $couleur): void{
        $this->couleur = $couleur;
    }
    public function getIcone(): string{
        return $this->icone;
    }
    public function SetIcone(string $icone): void{
        $this->icone = $icone;
    }
}
?>