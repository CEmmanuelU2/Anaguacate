// src/pages/MisionVision.js

import React from 'react';
import TituloSeccion from '../components/TituloSeccion';
import '../css/MisionVision.css'; // Estilos globales

const MisionVision = () => {
  return (
    <div className="mision-vision-page">
      <TituloSeccion titulo="Misión y Visión" />

      <div className="mision-vision-container">
        {/* Sección Misión */}
        <section className="mv-section">
          <h2 className="mv-title">🌱 Nuestra Misión</h2>
          <p className="mv-text">
            Brindar soporte técnico, información y recursos a los productores de aguacate en Guatemala,
            fomentando prácticas sostenibles, innovación y fortalecimiento del sector agrícola.
          </p>
        </section>

        {/* Sección Visión */}
        <section className="mv-section">
          <h2 className="mv-title">🌎 Nuestra Visión</h2>
          <p className="mv-text">
            Convertirse en la organización líder en el desarrollo y promoción del aguacate guatemalteco,
            reconocida a nivel nacional e internacional por su compromiso con la calidad y la sostenibilidad.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MisionVision;