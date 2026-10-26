<?php
require_once '../../backend/classes/GestionCategorie.php';

class CategorieController {

    public function listerCategorie(): void {

        $gestion = new GestionCategorie();
        $categories = $gestion->getAll();

        $data = [];
        foreach ($categories as $cat) {
            $data[] = [
                'id' => $cat->getId(),
                'nom' => $cat->getNom(),
                'couleur' => $cat->getCouleur(),
                'icone' => $cat->getIcone()
            ];
        }
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');
        echo json_encode($data);
    }
}
$controller = new CategorieController();
$controller->listerCategorie();