const express = require("express");
const router = express.Router();

// Login (tela)
router.get("/login", (req, res) => {
    res.render("auth/login", { title: "Login" });
});

// Login (ação)
router.post("/login", (req, res) => {
    const { usuario, senha } = req.body;

    // Exemplo simples (substitua depois por banco/LDAP/etc.)
    const USUARIO_OK = "admin";
    const SENHA_OK = "1234";

    if (usuario === USUARIO_OK && senha === SENHA_OK) {
        // Sem session por enquanto: redireciona direto
        // (Se você quiser manter “logado”, eu coloco express-session)
        return res.redirect("/visitantes");
    }

    return res.status(401).render("auth/login", {
        title: "Login",
        erro: "Usuário ou senha inválidos",
    });
});

// Logout (só redireciona, porque ainda não temos session)
router.get("/logout", (req, res) => {
    res.redirect("/login");
});

module.exports = router;