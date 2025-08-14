// src/pages/Contacto.js
import React, { useState } from 'react';
import TituloSeccion from '../components/TituloSeccion';
import '../css/Contacto.css';

const Contacto = () => {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  // Estado para errores de validación
  const [errors, setErrors] = useState({});

  // Estado para mostrar mensaje de éxito
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Maneja cambios en inputs y textarea
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Limpiar error al escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Validación sencilla
  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio.';
    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = 'El correo no es válido.';
    }
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es obligatorio.';
    return newErrors;
  };

  // Maneja el submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitSuccess(false);
      return;
    }

    // Aquí conectarías con backend o API real
    console.log('Formulario enviado:', formData);

    // Mostrar mensaje de éxito y limpiar formulario
    setSubmitSuccess(true);
    setFormData({ nombre: '', correo: '', mensaje: '' });
    setErrors({});

    // Ocultar mensaje después de 5 segundos
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="contacto-page" style={{ maxWidth: 600, margin: '0 auto' }}>
      <TituloSeccion titulo="Contáctanos" />
      <form className="contacto-formulario" onSubmit={handleSubmit} noValidate>
        <label htmlFor="nombre">
          Nombre:
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            aria-invalid={!!errors.nombre}
            aria-describedby="error-nombre"
            required
          />
          {errors.nombre && (
            <span id="error-nombre" style={{ color: 'red', fontSize: '0.85rem' }}>
              {errors.nombre}
            </span>
          )}
        </label>

        <label htmlFor="correo">
          Correo:
          <input
            id="correo"
            name="correo"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            value={formData.correo}
            onChange={handleChange}
            aria-invalid={!!errors.correo}
            aria-describedby="error-correo"
            required
          />
          {errors.correo && (
            <span id="error-correo" style={{ color: 'red', fontSize: '0.85rem' }}>
              {errors.correo}
            </span>
          )}
        </label>

        <label htmlFor="mensaje">
          Mensaje:
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escribe tu mensaje..."
            value={formData.mensaje}
            onChange={handleChange}
            aria-invalid={!!errors.mensaje}
            aria-describedby="error-mensaje"
            required
          />
          {errors.mensaje && (
            <span id="error-mensaje" style={{ color: 'red', fontSize: '0.85rem' }}>
              {errors.mensaje}
            </span>
          )}
        </label>

        <button type="submit" className="btn-submit" style={{ marginTop: 16 }}>
          Enviar
        </button>

        {submitSuccess && (
          <p
            role="alert"
            style={{
              color: '#375e12',
              backgroundColor: '#dbe7b6',
              padding: '10px',
              borderRadius: '8px',
              marginTop: '20px',
              fontWeight: '600',
            }}
          >
            ¡Formulario enviado correctamente!
          </p>
        )}
      </form>
    </div>
  );
};

export default Contacto;