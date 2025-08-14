import React, { useState } from 'react';
import '../css/App.css'; // Asegúrate que este archivo contenga estilos específicos para el formulario

const ContactForm = () => {
  // Estado para controlar los datos del formulario
  const [formData, setFormData] = useState({
    firstName: '',    // Nombre
    lastName: '',     // Apellido
    email: '',        // Correo electrónico
    phone: '',        // Teléfono
    message: '',      // Mensaje
    department: ''    // Departamento/dirección al que se envía el mensaje
  });

  // Estado para mostrar mensaje de éxito tras enviar
  const [submitSuccess, setSubmitSuccess] = useState(false);

  /**
   * Actualiza el estado del formulario al cambiar algún campo
   * @param {Event} e - Evento del input
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Maneja el envío del formulario
   * @param {Event} e - Evento submit del formulario
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple extra podría agregarse aquí

    // Simulación de envío (por ejemplo, a backend o API)
    console.log('Formulario enviado:', formData);

    // Mostrar mensaje de éxito y limpiar formulario
    setSubmitSuccess(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      department: ''
    });

    // Ocultar mensaje de éxito después de 5 segundos para mejor UX
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="contact-container">
      {/* Información estática de contacto */}
      <div className="contact-info">
        <h1>Contáctanos Ahora</h1>
        <p>Para más información, contáctanos a través del formulario de contacto.</p>
        <p>
          <strong>Ubicación:</strong><br/>
          Ruta 6, 9 - 21 Zona 4<br/>
          Edificio de Cámara de Industria de Guatemala
        </p>
        <p><strong>Email:</strong> info@anaguacate.com</p>
        <p><strong>Teléfono:</strong> +(502) 3074-3544</p>
      </div>

      {/* Formulario de contacto */}
      <div className="contact-form">
        <h2>Contáctanos:</h2>
        <form onSubmit={handleSubmit} noValidate>
          {/* Campo Nombre */}
          <div className="form-group">
            <label htmlFor="firstName">Nombre:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Ingresa tu nombre"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          {/* Campo Apellido */}
          <div className="form-group">
            <label htmlFor="lastName">Apellido:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Ingresa tu apellido"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          {/* Campo Email - obligatorio */}
          <div className="form-group">
            <label htmlFor="email">Email: *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Campo Teléfono */}
          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Ingresa tu teléfono"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Campo Mensaje - obligatorio */}
          <div className="form-group">
            <label htmlFor="message">Mensaje: *</label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribe tu mensaje..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Selección de Departamento - obligatorio */}
          <div className="form-group">
            <label htmlFor="department">Dirección: *</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un Departamento</option>
              <option value="ventas">Ventas</option>
              <option value="soporte">Soporte</option>
              <option value="general">General</option>
            </select>
          </div>

          {/* Botón enviar */}
          <button type="submit" className="btn-submit">Enviar</button>

          {/* Mensaje de éxito */}
          {submitSuccess && (
            <p className="success-message" role="alert" aria-live="polite">
              ¡Formulario enviado correctamente!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;