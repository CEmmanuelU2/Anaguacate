import React from 'react';
import '../css/App.css'; // Importa estilos específicos para el título de sección

/**
 * Componente TituloSeccion
 * Renderiza un encabezado con un título y una línea horizontal decorativa.
 * @param {string} titulo - Texto que se mostrará como título principal de la sección.
 */

const TituloSeccion = ({ titulo }) => {
  return (
    <header className="titulo-seccion-header" aria-label={`Sección: ${titulo}`}>
      {/* Título principal */}
      <h1 className="titulo-seccion-titulo">{titulo}</h1>

      {/* Línea decorativa debajo del título */}
      <hr className="titulo-seccion-linea" />
    </header>
  );
};

export default TituloSeccion;