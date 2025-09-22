import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 20408;

// Corrige caminho absoluto
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rota para servir o pack.zip
app.get("/pack.zip", (req, res) => {
  res.sendFile(path.join(__dirname, "pack.zip"));
});

app.listen(PORT, () => {
  console.log(`Servidor de resource pack rodando em http://localhost:${PORT}/pack.zip`);
});