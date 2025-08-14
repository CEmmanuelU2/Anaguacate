import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente Navbar
 * Barra de navegación principal con enlaces a las páginas internas de la app.
 */
const Navbar = () => {
  return (
    <nav style={styles.navbar} aria-label="Navegación principal">
      <ul style={styles.navList}>
        {/* Cada elemento de la lista contiene un enlace a una ruta */}
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Inicio</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/mision-vision" style={styles.navLink}>Misión y Visión</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/documentos" style={styles.navLink}>Documentos</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/noticias" style={styles.navLink}>Noticias</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/modulos" style={styles.navLink}>Módulos</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/preguntas" style={styles.navLink}>Preguntas Frecuentes</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contacto" style={styles.navLink}>Contáctanos</Link>
        </li>
      </ul>
    </nav>
  );
};

// Estilos en objeto JavaScript para inline styles
const styles = {
  navbar: {
    backgroundColor: '#228B22', // Verde aguacate fuerte
    padding: '12px 20px',
    marginTop: '15px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Sombra sutil para profundidad
    borderRadius: '6px',
  },
  navList: {
    listStyle: 'none',      // Quita viñetas
    display: 'flex',        // Lista horizontal
    justifyContent: 'center', // Centrado horizontal
    flexWrap: 'wrap',       // Permite que los ítems bajen si no caben en una línea
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '8px 15px',     // Separación entre ítems
  },
  navLink: {
    color: '#fff',          // Texto blanco
    textDecoration: 'none', // Sin subrayado
    fontWeight: '600',      // Negrita media
    fontSize: '1rem',
    transition: 'color 0.3s', // Transición suave para hover (añadir hover abajo)
  },
};

export default Navbar;