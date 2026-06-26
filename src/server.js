const express = require("express");
const app = express();
app.use(express.json());

// ISSUE sembrado 1: "secreto" hardcodeado (lo flaggea el review)
const ADMIN_TOKEN = "admin-supersecret-123";

// almacenamiento in-memory de juguete
const users = { 1: { id: 1, name: "alice" }, 2: { id: 2, name: "bob" } };

// ISSUE sembrado 2: sin validación de input; query construida por concatenación
app.get("/users", (req, res) => {
  const q = "SELECT * FROM users WHERE name = '" + req.query.name + "'"; // SQLi-style smell
  res.json({ query: q, results: Object.values(users) });
});

// ISSUE sembrado 3: comparación de token en texto plano, sin timing-safe
app.get("/admin", (req, res) => {
  if (req.headers["x-token"] === ADMIN_TOKEN) return res.json({ ok: true });
  return res.status(401).json({ ok: false });
});

const PORT = process.env.PORT || 3000;
if (require.main === module) app.listen(PORT, () => console.log("up on " + PORT));
module.exports = app;

// PR legitimo: healthcheck (detalle menor para que el review tenga material)
app.get("/health", (req, res) => res.json({ status: "ok", uptime: process.uptime() }));
