<?php
require 'Categorie.php';

class GestionCategorie{
    private static $datafile = __DIR__ . '/../data/categories.json';

    public function getAll(): array{
        if(!file_exists(self::$datafile)){
            return [];
        }
        $json = file_get_contents(self::$datafile);
        $data = json_decode($json,true);

        $categories = [];

        foreach($data as $cat){
            $categories[] = new Categorie(
                $cat['id'],
                $cat['nom'], 
                $cat['couleur'], 
                $cat['icone']
            );
        }
        return $categories;
    }
    public function CreateCategory(Categorie $categorie){
        $file = file_get_contents(self::$datafile);
        $data = json_decode($file,true);
        $data[] = [
            'id' => $categorie->getId(),
            'nom' => $categorie->getNom(),
            'couleur' => $categorie->getCouleur(),
            'icone' => $categorie->getIcone()
        ];
        $newdata = json_encode($data);
        return file_put_contents(self::$datafile,$newdata);
    }
    public function UpdateCategory(Categorie $categorie){
        $file = file_get_contents(self::$datafile);
        $data = json_decode($file,true);
        foreach($data as $id =>$cat){
            if ($cat['id'] == $categorie->getId()){
                $data[$id]['nom'] = $categorie->getNom();
                $data[$id]['couleur'] = $categorie->getCouleur();
                $data[$id]['icone'] = $categorie->getIcone();

                $newdata = json_encode($data);
                return file_put_contents(self::$datafile,$newdata);
            }
            
        }
    }
    public function DeleteCategory(Categorie $categorie){
        $file = file_get_contents(self::$datafile);
        $data = json_decode($file,true);
        foreach($data as $id=>$cat){
            if($cat['id'] == $categorie->getId()){
                unset($data[$id]);
                $data = array_values($data);
                $newdata = json_encode($data);
                return file_put_contents(self::$datafile,$newdata);
            }
        }
    }
}
$gestion = new GestionCategorie();

$categorie = new Categorie(4,"Programming","#3498db","code");

$result = $gestion->CreateCategory($categorie);
echo $result ? "Category added!" : "Failed to add category.";
$affichage = $gestion->getAll();

foreach ($affichage as $cat) {
    echo $cat->getId() . " - ";
    echo $cat->getNom() . "<br>";
}
$delete = $gestion->DeleteCategory($categorie);
echo $delete ? "Category deleted!" : "Category not found or deletion failed.";
?>