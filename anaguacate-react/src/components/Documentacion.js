import React from 'react';
import '../css/Documentacion.css'; // Estilos generales, verifica que contenga reglas para esta sección

// Importación de imágenes usadas para cada documento
import estatutosImg from '../assets/doc1.png';
import juridicaImg from '../assets/doc2.png';
import individualImg from '../assets/doc3.png';

const Documentacion = () => {
  return (
    <section className="documentacion">
      {/* Título de la sección con un emoji para llamar la atención */}
      <h2 className="titulo">📄 Documentación Oficial</h2>

      {/* Descripción general de la sección */}
      <p className="descripcion">
        Descarga aquí los documentos oficiales que respaldan las funciones estatutarias de la Asociación de Productores de Aguacate de Guatemala.
      </p>

      {/* Grid que contiene las tarjetas de documentos */}
      <div className="doc-grid">

        {/* Tarjeta para Estatutos */}
        <div className="doc-card">
          {/* Imagen representativa */}
          <img src={estatutosImg} alt="Estatutos de la Asociación" />
          <div className="doc-info">
            <h3>📘 Estatutos</h3>
            <p>PDF · 1.2 MB · Estatutos y Fundación</p>
            {/* Enlace para descargar el PDF; asegúrate que la ruta sea correcta en tu servidor */}
            <a href="/docs/estatutos.pdf" download className="btn-descargar" aria-label="Descargar Estatutos">
              ⬇ Descargar
            </a>
          </div>
        </div>

        {/* Tarjeta para Ficha Jurídica */}
        <div className="doc-card">
          <img src={juridicaImg} alt="Ficha Jurídica de la Asociación" />
          <div className="doc-info">
            <h3>🏛️ Ficha Jurídica</h3>
            <p>PDF · 750 KB · Persona Jurídica</p>
            <a href="/docs/ficha-juridica.pdf" download className="btn-descargar" aria-label="Descargar Ficha Jurídica">
              ⬇ Descargar
            </a>
          </div>
        </div>

        {/* Tarjeta para Ficha Individual */}
        <div className="doc-card">
          <img src={individualImg} alt="Ficha Individual" />
          <div className="doc-info">
            <h3>👤 Ficha Individual</h3>
            <p>PDF · 540 KB · Persona Individual</p>
            <a href="/docs/ficha-individual.pdf" download className="btn-descargar" aria-label="Descargar Ficha Individual">
              ⬇ Descargar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentacion;