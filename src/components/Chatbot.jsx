import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const ChatBot = () => {
  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState([
    { type: "bot", text: "¡Hola! Soy tu asistente Linux con Gemini (vía proxy)." }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  // Inicializar chat solo una vez
  useEffect(() => {
    const initChat = async () => {
      const newChat = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      }).startChat({
        history: [
          { role: "user", parts: [{ text: "Hola" }] },
          { role: "model", parts: [{ text: "Ok, tirame tus dudas" }] }
        ],
        generationConfig: { temperature: 0.9 },
      });
      setChat(newChat);
    };
    initChat();
  }, []);

  const handleSend = async () => {
    if (!inputValue.trim() || !chat) return;

    const userMessage = { type: "user", text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setLoading(true);

    try {
      // ✅ IMPORTANTE: Gemini espera un objeto con `contents`, no `message`
      const result = await chat.sendMessage([{ text: userMessage.text }]);
      const response = await result.response;
      const reply = response.text();

      setMessages(prev => [...prev, { type: "bot", text: reply }]);
    } catch (err) {
      console.error("Error al enviar mensaje:", err);
      setMessages(prev => [...prev, { type: "bot", text: "⚠️ Error con la IA." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-hero">
        <h1>Asistente Linux (Gemini via proxy)</h1>
      </div>

      <div className="chat-wrapper">
        <div className="chat-box">
          <div className="messages-container" style={{ maxHeight: 400, overflowY: "auto" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ margin: "8px 0" }}>
                <strong>{m.type === "bot" ? "Gemini: " : "Tú: "}</strong>
                <span> {m.text}</span>
              </div>
            ))}
            {loading && <div>🤖 Escribiendo...</div>}
          </div>

          <div className="input-container">
            <input
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribí tu pregunta..."
            />
            <button onClick={handleSend}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
