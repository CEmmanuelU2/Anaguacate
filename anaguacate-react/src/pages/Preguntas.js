// src/pages/Preguntas.js
// ============================================================
// Componente de Preguntas Frecuentes (FAQ).
// Mantiene el estilo corporativo y estructura consistente.
// Si la lista crece, debería cargarse desde un archivo externo
// o base de datos para mejor mantenimiento.
// ============================================================

import React from 'react';
import TituloSeccion from '../components/TituloSeccion'; // Verificar ruta real
import '../css/Preguntas.css'; // Debe contener estilos para .preguntas-page, .faq-list, etc.

const Preguntas = () => {
  return (
    <div className="preguntas-page">
      {/* ==== Encabezado reutilizable ==== */}
      <TituloSeccion titulo="Preguntas Frecuentes" />

      {/* ==== Lista de FAQs ==== */}
      <div className="faq-list">
        <div className="faq-item">
          <h3 className="faq-pregunta">¿Cómo me afilio a la asociación?</h3>
          <p className="faq-respuesta">
            Puede completar el formulario de contacto y nos pondremos en contacto con usted.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-pregunta">¿Qué beneficios tengo al unirme?</h3>
          <p className="faq-respuesta">
            Acceso a capacitación, certificaciones, ferias, y más.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preguntas;