<?php


require_once '../../backend/classes/User.php';
require_once '../../backend/classes/Auteur.php';

$user = new User();
$auteur = new Auteur();

echo $user->getRoleName() . "<br>";
echo $auteur->getRoleName() . "<br>";




