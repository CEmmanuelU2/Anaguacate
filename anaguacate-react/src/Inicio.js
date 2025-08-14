// src/Inicio.js

import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

import "./css/App.css";

import logo from "./assets/logo.png";
import user from "./assets/user.png";

import Testimonios from "./components/Testimonios";
import Documentacion from "./components/Documentacion";
import ContactForm from "./components/ContactForm";
import MapaUbicacion from "./components/MapaUbicacion";

import MisionVision from "./pages/MisionVision";
import Noticias from "./pages/Noticias";
import Modulos from "./pages/Modulos";
import Preguntas from "./pages/Preguntas";
import Contacto from "./pages/Contacto";

import Perfil from "./pages/Perfil";
import Configuracion from "./pages/Configuracion";
import Notificaciones from "./pages/Notificaciones";
import EditarPerfil from "./pages/EditarPerfil";

const Inicio = ({ isAuthenticated, onLogin, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => setMenuOpen(false);
  const toggleProfileMenu = () => setProfileOpen(!profileOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".profile-container")) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="Inicio">
      {/* HEADER */}
      <header className={`Inicio-header ${menuOpen ? "open" : ""}`}>
        <div className="logo-title">
          <img src={logo} alt="Logo Aguacate" className="logo-small" />
          <div>
            <h1>Asociación Nacional de Productores</h1>
            <h1>de Aguacate de Guatemala</h1>
          </div>
        </div>

        <div className="social-links desktop">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook /> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter /> Twitter
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube /> YouTube
          </a>
          <span className="email">info@anaguacate.com</span>

          <div className="profile-container" onClick={toggleProfileMenu}>
            {!isAuthenticated ? (
              <>
                <button style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: "1rem", marginRight: "10px" }}>Iniciar Sesión</button>
                <button style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: "1rem" }}>Registrarse</button>
                {profileOpen && (
                  <ul className="profile-menu">
                    <li>
                      <button
                        onClick={onLogin}
                        style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1rem" }}
                      >
                        ✅ Acceder
                      </button>
                    </li>
                  </ul>
                )}
              </>
            ) : (
              <>
                <img src={user} alt="Usuario" className={`user ${profileOpen ? "active" : ""}`} />
                {profileOpen && (
                  <ul className="profile-menu">
                    <li>
                      <Link to="/perfil" onClick={() => setProfileOpen(false)}>
                        🧑 Mi perfil
                      </Link>
                    </li>
                    <li>
                      <Link to="/configuracion" onClick={() => setProfileOpen(false)}>
                        ⚙️ Configuración
                      </Link>
                    </li>
                    <li>
                      <Link to="/notificaciones" onClick={() => setProfileOpen(false)}>
                        📥 Notificaciones
                      </Link>
                    </li>
                    <li>
                      <Link to="/editar" onClick={() => setProfileOpen(false)}>
                        📝 Editar
                      </Link>
                    </li>

                    <li>
                      <button
                        onClick={onLogout}
                        style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1rem" }}
                      >
                        🚪 Cerrar sesión
                      </button>
                    </li>
                  </ul>
                )}
              </>
            )}
          </div>
        </div>

        {/* MENÚ HAMBURGUESA */}
        <button className="menu-toggle" aria-label="Abrir menú" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

        {menuOpen && (
          <div className="social-links mobile">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /> YouTube</a>
            <span className="email">info@anaguacate.com</span>
            {isAuthenticated && <img src={user} alt="Usuario" className="user" />}
          </div>
        )}
      </header>

      {/* LOGO GRANDE SOLO EN INICIO */}
      {location.pathname === "/" && (
        <main className="main-section">
          <img src={logo} alt="Logo Aguacate Grande" className="logo-large" />
        </main>
      )}

      {/* MENÚ INFERIOR */}
      <nav className="footer-menu">
        <Link to="/" onClick={handleLinkClick}>Inicio</Link>
        <Link to="/mision-vision" onClick={handleLinkClick}>Misión y Visión</Link>
        <Link to="/documentos" onClick={handleLinkClick}>Documentos</Link>
        <Link to="/noticias" onClick={handleLinkClick}>Noticias</Link>
        <Link to="/modulos" onClick={handleLinkClick}>Módulos</Link>
        <Link to="/preguntas" onClick={handleLinkClick}>Preguntas Frecuentes</Link>
        <Link to="/contacto" onClick={handleLinkClick}>Contáctanos</Link>
      </nav>

      {/* CONTENIDO SEGÚN RUTA */}
      <Routes>
        <Route path="/" element={<><Testimonios /><ContactForm /><MapaUbicacion /></>} />
        <Route path="/mision-vision" element={<MisionVision />} />
        <Route path="/documentos" element={<Documentacion />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/modulos" element={<Modulos />} />
        <Route path="/preguntas" element={<Preguntas />} />
        <Route path="/contacto" element={<Contacto />} />

        <Route path="/perfil" element={<Perfil />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/notificaciones" element={<Notificaciones />} />
        <Route path="/editar" element={<EditarPerfil />} />

      </Routes>
    </div>
  );
};

export default Inicio;