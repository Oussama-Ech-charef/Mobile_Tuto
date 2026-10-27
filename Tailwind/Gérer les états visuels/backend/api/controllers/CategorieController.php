<?php


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

        echo json_encode($data);
    }

    public function ajouterCategorie(): void {

        $nom = trim($_POST['nom'] ?? '');

        if ($nom === '') {
            http_response_code(400);

            echo json_encode([
                'success' => false,
                'message' => 'Le nom est obligatoire'
            ]);

            return;
        }

        echo json_encode([
            'success' => true,
            'message' => 'Catégorie reçue avec succès',
            'nom' => $nom
        ]);
    }
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$controller = new CategorieController();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $controller->ajouterCategorie();
} else {
    $controller->listerCategorie();
}