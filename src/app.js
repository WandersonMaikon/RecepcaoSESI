const express = require("express");
const path = require("path");

const indexRoutes = require("./routes/index.routes");
const visitantesRoutes = require("./routes/visitantes.routes");

const app = express();

// Form data (POST)
app.use(express.urlencoded({ extended: true }));

// Arquivos estáticos (CSS/JS/imagens)
app.use(express.static(path.join(__dirname, "..", "public")));

// View engine (EJS)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

// Rotas
app.use("/", indexRoutes);
app.use("/visitantes", visitantesRoutes);

// 404 simples
app.use((req, res) => {
    res.status(404).render("index", { title: "Página não encontrada" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));