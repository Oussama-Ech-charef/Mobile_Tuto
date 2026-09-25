---
marp: true
---




# dépendance fonctionnelles 
---


 * numero_commande -->  date_commande, nom_client, email_client , id_client
 * id_client --> email_client, nom_client
 * id_produit -->  nom_produit , prix_produit
 * id_produit + numero_commande -->  quantite_commmande

---

# Table Client : 
 * Client  (
    id_client
    email_client, 
    nom_client
 )
 ---

# Table Commande: 
 * Commande (
    numero_commande,
    date_commande,
    nom_client, 
    email_client,
    id_client
 )
 ---

# Table Prouit : 
 * Produit(
    id_produit,
    nom_produit,
    prix_produit
 )
 ---
# Table Commande_Produit : 
* Commande_Produit (
    id_produit,
    numero_commande,
    quantite_commmande
)
 ---
# MCD
 * Realisation d'une diagramme MCD
    ![[MCD image]]()