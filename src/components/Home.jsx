import React from 'react'

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="glitch" data-text="LinuxHub">LinuxHub</h1>
          <p className="subtitle">Tu guía interactiva para dominar Linux</p>
        </div>
      </div>

      <div className="content-section">
        <div className="info-card">
          <div className="card-header">
            <span className="terminal-icon">$</span>
            <h2>¿Qué es LinuxHub?</h2>
          </div>
          <p>
            LinuxHub es tu compañero digital para navegar el mundo de Linux. 
            Ofrecemos una plataforma interactiva con comandos esenciales, 
            un chatbot inteligente para resolver tus dudas, y recursos 
            curados para que tu experiencia con Linux sea más fluida y productiva.
          </p>
        </div>

        <div className="info-card">
          <div className="card-header">
            <span className="terminal-icon">&gt;_</span>
            <h2>¿Qué es Linux?</h2>
          </div>
          <p>
            Linux es un sistema operativo de código abierto, potente y flexible, 
            utilizado en servidores, supercomputadoras, dispositivos móviles y 
            sistemas embebidos. Basado en Unix, ofrece control total sobre tu 
            sistema, seguridad robusta y una comunidad global de desarrolladores.
          </p>
        </div>

        <div className="info-card">
          <div className="card-header">
            <span className="terminal-icon">⚡</span>
            <h2>¿Por qué puede ser complicado?</h2>
          </div>
          <p>
            Linux utiliza principalmente la línea de comandos, lo que puede 
            intimidar a usuarios nuevos acostumbrados a interfaces gráficas. 
            La variedad de distribuciones, la gestión de permisos, y la 
            necesidad de memorizar comandos específicos crean una curva de 
            aprendizaje inicial. ¡Pero no te preocupes! Con práctica y las 
            herramientas adecuadas, dominarás Linux más rápido de lo que piensas.
          </p>
        </div>
      </div>

      <div className="cta-section">
        <h3>¿Listo para comenzar?</h3>
        <p>Explora nuestros comandos esenciales o chatea con nuestro asistente AI</p>
      </div>
    </div>
  )
}

export default Home