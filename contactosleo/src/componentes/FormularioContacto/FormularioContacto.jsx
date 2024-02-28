import React, { useState } from 'react';
import './FormularioContacto.css'

const FormularioContacto = ({ onAgregarContacto }) => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [cumpleanos, setCumpleanos] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedBirthday = formatDate(cumpleanos);
    onAgregarContacto({ nombre, telefono, email, cumpleanos: formattedBirthday });
    setNombre('');
    setTelefono('');
    setCumpleanos('');
    setEmail('');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <>
      <div className='formulariomain' >

        <form onSubmit={handleSubmit} className='formulariobase'>

          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </label>

          <label>
            Teléfono:
            <input
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Cumpleaños:
            <input
              type="date"
              value={cumpleanos}
              onChange={(e) => setCumpleanos(e.target.value)}
              min="1950-01-01"
              max="2024-01-01"
              required
            />
          </label>

          <button type="submit">Agregar Contacto</button>

        </form>
      </div>
    </>
  );
};

export default FormularioContacto;
