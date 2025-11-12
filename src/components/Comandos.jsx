import React, { useState } from 'react'

const Comandos = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const comandos = [
    {
      comando: 'ls',
      descripcion: 'Lista archivos y directorios en el directorio actual.',
      ejemplo: 'ls -la',
      categoria: 'Navegación'
    },
    {
      comando: 'cd',
      descripcion: 'Cambia de directorio. Usa "cd .." para retroceder un nivel.',
      ejemplo: 'cd /home/usuario',
      categoria: 'Navegación'
    },
    {
      comando: 'pwd',
      descripcion: 'Muestra la ruta completa del directorio actual.',
      ejemplo: 'pwd',
      categoria: 'Navegación'
    },
    {
      comando: 'mkdir',
      descripcion: 'Crea un nuevo directorio.',
      ejemplo: 'mkdir mi_carpeta',
      categoria: 'Archivos'
    },
    {
      comando: 'rm',
      descripcion: 'Elimina archivos o directorios. Usa -r para directorios.',
      ejemplo: 'rm archivo.txt',
      categoria: 'Archivos'
    },
    {
      comando: 'cp',
      descripcion: 'Copia archivos o directorios.',
      ejemplo: 'cp origen.txt destino.txt',
      categoria: 'Archivos'
    },
    {
      comando: 'mv',
      descripcion: 'Mueve o renombra archivos y directorios.',
      ejemplo: 'mv viejo.txt nuevo.txt',
      categoria: 'Archivos'
    },
    {
      comando: 'cat',
      descripcion: 'Muestra el contenido de un archivo en la terminal.',
      ejemplo: 'cat archivo.txt',
      categoria: 'Visualización'
    },
    {
      comando: 'grep',
      descripcion: 'Busca patrones de texto en archivos.',
      ejemplo: 'grep "texto" archivo.txt',
      categoria: 'Búsqueda'
    },
    {
      comando: 'chmod',
      descripcion: 'Cambia los permisos de archivos y directorios.',
      ejemplo: 'chmod 755 script.sh',
      categoria: 'Permisos'
    },
    {
      comando: 'sudo',
      descripcion: 'Ejecuta comandos con privilegios de superusuario.',
      ejemplo: 'sudo apt update',
      categoria: 'Sistema'
    },
    {
      comando: 'apt / apt-get',
      descripcion: 'Gestor de paquetes para sistemas basados en Debian/Ubuntu.',
      ejemplo: 'sudo apt install paquete',
      categoria: 'Sistema'
    },
    {
      comando: 'ps',
      descripcion: 'Muestra los procesos en ejecución.',
      ejemplo: 'ps aux',
      categoria: 'Procesos'
    },
    {
      comando: 'kill',
      descripcion: 'Termina un proceso usando su ID (PID).',
      ejemplo: 'kill 1234',
      categoria: 'Procesos'
    },
    {
      comando: 'top / htop',
      descripcion: 'Monitor interactivo de procesos del sistema.',
      ejemplo: 'top',
      categoria: 'Procesos'
    },
    {
      comando: 'df',
      descripcion: 'Muestra el uso del espacio en disco.',
      ejemplo: 'df -h',
      categoria: 'Sistema'
    },
    {
      comando: 'du',
      descripcion: 'Muestra el tamaño de archivos y directorios.',
      ejemplo: 'du -sh directorio/',
      categoria: 'Sistema'
    },
    {
      comando: 'tar',
      descripcion: 'Empaqueta y comprime archivos.',
      ejemplo: 'tar -czf archivo.tar.gz carpeta/',
      categoria: 'Archivos'
    },
    {
      comando: 'wget',
      descripcion: 'Descarga archivos desde internet.',
      ejemplo: 'wget https://ejemplo.com/archivo.zip',
      categoria: 'Red'
    },
    {
      comando: 'ssh',
      descripcion: 'Conecta a un servidor remoto de forma segura.',
      ejemplo: 'ssh usuario@servidor.com',
      categoria: 'Red'
    }
  ];

  const filteredComandos = comandos.filter(cmd =>
    cmd.comando.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="comandos-container">
      <div className="comandos-hero">
        <h1 className="comandos-title">Comandos Linux</h1>
        <p className="comandos-subtitle">Guía esencial de comandos más utilizados</p>
      </div>

      <div className="search-section">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Buscar comandos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="comandos-grid">
        {filteredComandos.map((cmd, index) => (
          <div key={index} className="comando-card">
            <div className="comando-header">
              <span className="comando-nombre">$ {cmd.comando}</span>
              <span className="comando-categoria">{cmd.categoria}</span>
            </div>
            <p className="comando-descripcion">{cmd.descripcion}</p>
            <div className="comando-ejemplo">
              <span className="ejemplo-label">Ejemplo:</span>
              <code className="ejemplo-code">{cmd.ejemplo}</code>
            </div>
          </div>
        ))}
      </div>

      {filteredComandos.length === 0 && (
        <div className="no-results">
          <p>No se encontraron comandos que coincidan con tu búsqueda.</p>
        </div>
      )}
    </div>
  )
}

export default Comandos
