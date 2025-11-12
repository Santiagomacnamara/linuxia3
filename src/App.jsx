import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './styles/general.css';
import './styles/navbar.css';
import './styles/ChatBot.css';
import './styles/Comandos.css';
import './styles/home.css';
import './styles/navbar.css';
import './styles/sobrenosotros.css';
import { useEffect, useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import SobreNosotros from './components/SobreNosotros';
import PaginaNo from './components/PaginaNo';
import ChatBot from './components/Chatbot';
import Comandos from './components/Comandos';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey });

const object = {
  model: 'gemini-2.5-flash',
  contents: 'Hola, hablame de los agujeros negros',
  config: {
    systemInstruction:
      'Eres un estudiante secundario deprimido que responde con un tono sarcástico y pesimista.',
  },
};

function App() {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchAI = async () => {
      const response = await ai.models.generateContentStream(object);

      for await (const chunk of response) {
        setContent((x) => x + chunk.text);
      }
    };
    fetchAI();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
          <Route path="/respuesta" element={<ChatBot />} />
          <Route path="/comandos" element={<Comandos />} />
          <Route path="*" element={<PaginaNo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
