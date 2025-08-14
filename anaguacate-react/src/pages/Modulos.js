// src/pages/Modulos.js
// =========================================================
// Componente que muestra la lista de módulos de trazabilidad.
// Cada módulo tiene un ícono, un texto descriptivo y un enlace externo.
// Buenas prácticas aplicadas:
// - Uso de `map` con `index` como key (aceptable en listas estáticas).
// - Atributos de accesibilidad (`rel`, `target` seguro).
// - Estructura HTML semántica.
// - Clases CSS organizadas para estilos consistentes.
// =========================================================

import React from 'react';
import '../css/Modulos.css'; // Asegúrate de que este archivo contenga estilos para las clases usadas

const Modulos = () => {
  // Lista de módulos (puede migrarse a un archivo JSON si crece)
  const modulos = [
    {
      icono: '🌱',
      texto: 'Cultivo y manejo del aguacate',
      link: 'https://ejemplo.com/cultivo',
    },
    {
      icono: '🚛',
      texto: 'Logística y distribución',
      link: 'https://ejemplo.com/logistica',
    },
    {
      icono: '🧪',
      texto: 'Control de calidad y normativas',
      link: 'https://ejemplo.com/calidad',
    },
    {
      icono: '📈',
      texto: 'Comercialización nacional e internacional',
      link: 'https://ejemplo.com/comercializacion',
    },
    {
      icono: '🌱',
      texto: 'Variables de Aguacate',
      link: 'https://ejemplo.com/variables',
    },
  ];

  return (
    <section className="modulos-container">
      {/* ==== Título principal ==== */}
      <h2 className="modulos-titulo">Módulos de Trazabilidad</h2>

      {/* ==== Lista de módulos ==== */}
      <ul className="modulos-lista">
        {modulos.map((modulo, index) => (
          <li key={index} className="modulo-item">
            <a
              href={modulo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="modulo-link"
            >
              <span className="modulo-icono" aria-hidden="true">
                {modulo.icono}
              </span>
              <span className="modulo-texto">{modulo.texto}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Modulos;