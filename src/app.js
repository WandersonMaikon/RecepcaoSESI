const express = require("express");
const path = require("path");

const authRoutes = require("./routes/auth.routes");
const dashboardRoutes = require("./routes/dashboard.routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

// Página inicial -> login
app.get("/", (req, res) => res.redirect("/login"));

// Rotas
app.use("/", authRoutes);
app.use("/", dashboardRoutes);

// 404 simples
app.use((req, res) => {
    res.status(404).send("Página não encontrada");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));