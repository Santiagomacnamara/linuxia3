// server/server.js
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // si querés restringir, pasá opciones aquí

const API_KEY = process.env.GEMINI_API_KEY; // variable en .env del servidor
if (!API_KEY) {
  console.error("Falta GEMINI_API_KEY en .env del servidor");
  process.exit(1);
}

// Endpoint para listar modelos (útil para debug)
app.get("/api/list-models", async (req, res) => {
  try {
    const r = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${API_KEY}`);
    const j = await r.json();
    return res.status(r.status).json(j);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "error list models" });
  }
});

// Endpoint que recibe prompt y reenvía a Gemini
app.post("/api/gemini", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "missing prompt" });

    // Usamos v1 y el modelo gemini-1.5-flash (ruta correcta)
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    const body = {
      // cuerpo básico para generateContent — lo adaptás según lo que quieras
      prompt: {
        messages: [
          { role: "system", content: "Eres un experto en Linux que responde en español." },
          { role: "user", content: prompt }
        ]
      },
      // opcionales: temperatura, max output tokens, etc.
      temperature: 0.2
    };

    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const j = await r.json();
    return res.status(r.status).json(j);
  } catch (e) {
    console.error("Error proxy:", e);
    return res.status(500).json({ error: "server error" });
  }
});

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => console.log(`Proxy server listening on ${PORT}`));
