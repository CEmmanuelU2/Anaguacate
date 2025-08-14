// Testimonios.jsx
// ===============================================
// Componente que muestra una lista de testimonios con
// imagen, texto y autor. Las imágenes son responsivas
// y el diseño usa un grid para adaptarse a distintos tamaños.

import React from 'react';
import '../css/App.css';            // Estilos generales y específicos para testimonios
import testimoniosData from './testimoniosData';  // Array con datos de testimonios

const Testimonios = () => {
  return (
    <section className="testimonios" aria-label="Sección de testimonios de clientes">
      {/* Título principal de la sección */}
      <h2 className="titulo">Testimonios</h2>

      {/* Contenedor con grid responsivo para los testimonios */}
      <div className="lista-testimonios">
        {testimoniosData.map((item) => (
          <article key={item.id} className="testimonio" tabIndex={0}>
            {/* Imagen del testimonio, si existe */}
            {item.imagen && (
              <img
                src={item.imagen}
                alt={item.alt || 'Imagen testimonial'}
                className="imagen-testimonio"
                loading="lazy"  // Carga diferida para optimizar rendimiento
              />
            )}

            {/* Texto del testimonio */}
            <p className="texto">“{item.texto}”</p>

            {/* Nombre del autor del testimonio */}
            <p className="autor">— {item.autor}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonios;