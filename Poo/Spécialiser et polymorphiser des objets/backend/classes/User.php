<?php
class User {
    protected int $id;
    protected string $email;
    protected string $password;
    protected string $role;

    public function getRoleName(): string {
        return "Visiteur anonyme";
    }
}
?>