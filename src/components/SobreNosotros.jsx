import React from 'react';
import macfoto from '../components/mac.jpg';
import cintifoto from '../components/cintimaricon.jpg';

const SobreNosotros = () => {
  return <div className="sobre-container">
  <div className="sobre-hero">
    <h1 className="sobre-title">Sobre Nosotros</h1>
    <p className="sobre-subtitle">El equipo detrás de LinuxHub</p>
  </div>

  <div className="developers-section">
    <div className="developer-card">
      <div className="dev-image-container">
        <img 
          src= {macfoto} 
          alt="Desarrollador 1" 
          className="dev-image"
        />
        <div className="dev-overlay"></div>
      </div>
      <div className="dev-info">
        <h2 className="dev-name">Santiago Omar Mac Namara</h2>
        <p className="dev-role">calenton</p>
        <p className="dev-description">
          Especialista en perder el control a causas del trabajo cotidiano, ludopata en potencia, especialista en todos los tipos de femboys y goticas. Sobre todas las cosas ginefobico. Tambien le gusta un poco el linux
        </p>
        <div className="dev-skills">
          <span className="skill-tag">Linux</span>
          <span className="skill-tag">Python</span>
          <span className="skill-tag">Docker</span>
          <span className="skill-tag">Bash</span>
        </div>
      </div>
    </div>

    <div className="developer-card">
      <div className="dev-image-container">
        <img 
          src={cintifoto}
          alt="Desarrollador 2" 
          className="dev-image"
        />
        <div className="dev-overlay"></div>
      </div>
      <div className="dev-info">
        <h2 className="dev-name">Santino Cinti</h2>
        <p className="dev-role">Acosador sexual</p>
        <p className="dev-description">
          Orientado a ganar cada vez mas perimetrales (de menores), siempre en busca de mas victimas. Su vida cotidiana se basa en el CP y actualmente esta profugo por berazategui tiene una recompensa de 10 pesos. Tambien tiene una licenciatura en Linux.
        </p>
        <div className="dev-skills">
          <span className="skill-tag">React</span>
          <span className="skill-tag">UI/UX</span>
          <span className="skill-tag">CSS</span>
          <span className="skill-tag">Arch Linux</span>
        </div>
      </div>
    </div>
  </div>

  <div className="mission-section">
    <h2 className="mission-title">Nuestra Misión</h2>
    <p className="mission-text">
      Facilitar el aprendizaje de Linux para todos, desde principiantes 
      hasta usuarios avanzados. Creemos que el conocimiento debe ser 
      accesible y que la línea de comandos no tiene por qué ser intimidante. 
      Con LinuxHub, buscamos empoderar a la comunidad con herramientas 
      interactivas y recursos de calidad.
    </p>
  </div>
</div>
};

export default SobreNosotros;
