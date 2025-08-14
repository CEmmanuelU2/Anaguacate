// src/components/MapaUbicacion.js
import React from 'react';

/**
 * Componente MapaUbicacion
 * Muestra un iframe con un mapa de Google Maps embebido,
 * centrado en la ubicación de la Cámara de Industria de Guatemala.
 */
const MapaUbicacion = () => {
  return (
    <div
      style={{
        width: '100%',       // Ocupa todo el ancho del contenedor padre
        height: '400px',     // Altura fija para buen tamaño visual
        marginTop: '20px'    // Separación superior para no pegar con elementos anteriores
      }}
    >
      <iframe
        title="Ubicación de la empresa"  // Descripción accesible para lectores de pantalla
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.707226926643!2d-90.51694082586722!3d14.615746876707632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a23235d31001%3A0x8f095d0dc487ce53!2sCamara%20De%20Industria%20De%20Guatemala!5e0!3m2!1ses!2sgt!4v1753334261699!5m2!1ses!2sgt"
        width="100%"                   // Ancho completo del contenedor padre
        height="100%"                  // Altura completa definida por el div padre
        style={{ border: 0 }}         // Sin borde para apariencia limpia
        allowFullScreen                // Permite pantalla completa si el usuario lo solicita
        loading="lazy"                 // Carga diferida para mejorar rendimiento
        referrerPolicy="no-referrer-when-downgrade" // Política de referrer segura para seguridad y privacidad
      ></iframe>
    </div>
  );
};

export default MapaUbicacion;