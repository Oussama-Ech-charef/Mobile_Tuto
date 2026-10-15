# Identifier les responsabilités d’une classe

## Pratique

- **Analyse du code :** Examiner la classe `Categorie` du Sprint 1 qui gère les catégories du Blog.
- **Responsabilités métier :** Repérer les propriétés qui représentent une catégorie (`id`, `nom`, `couleur`, `icone`) ainsi que les méthodes qui consultent ou modifient ses données.
- **Responsabilités techniques :** Repérer le code qui lit, écrit ou modifie le fichier `categories.json`, notamment les opérations CRUD.
- **Cohésion :** Constater que la classe regroupe la représentation des données et la gestion du fichier JSON, ce qui révèle un manque de cohésion.
- **Couplage :** Identifier la dépendance directe de la classe envers le fichier `categories.json`.
- **Documentation GitHub :** Ajouter un commentaire d’analyse à l’Issue « Refactoriser la gestion des catégories en POO », en expliquant le mélange entre l’Entité et le Gestionnaire de persistance.

## Livrable

[Lien vers l’Issue « Refactoriser la gestion des catégories en POO »](https://github.com/Oussama-Ech-charef/Projet_technique/issues/2)
