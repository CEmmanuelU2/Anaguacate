// src/pages/Noticias.js
// ============================================================
// Componente que muestra la sección de noticias.
// Usa TituloSeccion para mantener consistencia visual.
// Incluye artículos simples. Si la lista crece, considerar
// extraerlos a un archivo JSON o base de datos.
// ============================================================

import React from 'react';
import TituloSeccion from '../components/TituloSeccion'; // Ruta debe ser correcta
import '../css/Noticias.css'; // Debe contener clases: .noticias-page, .contenido-scroll, etc.

const Noticias = () => {
  return (
    <div className="noticias-page">
      {/* ==== Título de la sección ==== */}
      <TituloSeccion titulo="Noticias" />

      {/* ==== Contenedor de artículos ==== */}
      <div className="contenido-scroll">
        <article className="noticia-item">
          <div className="noticia-fecha">15 Ago 2025</div>
          <h2 className="noticia-titulo">¡Lanzamiento del nuevo sistema de trazabilidad!</h2>
          <p className="noticia-texto">
            La Asociación ha implementado un nuevo sistema para rastrear la producción del aguacate desde su origen.
          </p>
        </article>

        <article className="noticia-item">
          <div className="noticia-fecha">01 Sep 2025</div>
          <h2 className="noticia-titulo">Reunión Nacional de Productores 2025</h2>
          <p className="noticia-texto">
            Únete a nosotros en septiembre para discutir retos y oportunidades del sector.
          </p>
        </article>

      </div>
    </div>
  );
};

export default Noticias;