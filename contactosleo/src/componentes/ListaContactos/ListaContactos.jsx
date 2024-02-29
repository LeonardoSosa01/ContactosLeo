import React from 'react';
import './ListaContactos.css'
import Filtro from '../Filtro/Filtro'; // Asegúrate de que la ruta del import sea correcta

const ListaContactos = ({ contactos, eliminarContacto }) => {
  const [filtro, setFiltro] = React.useState('');

  const handleFiltrar = (value) => {
    setFiltro(value);
  };

  const contactosFiltrados = contactos.filter(contacto =>
    contacto.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    contacto.telefono.includes(filtro)
  );



  return (
    <>
      <h2>Tus Contactos guardados</h2>
      <div className='lista-main'>
        <button className='boton-filtro'>
        <Filtro onFiltrar={handleFiltrar} /></button>
        {contactosFiltrados.map((contacto, index) => (
          <div className='card-completo' key={index}>
            <div className='card-parametro'>
              <p>Nombre: {contacto.nombre}</p>
              <p>Teléfono: {contacto.telefono}</p>
              <p>Email: {contacto.email}</p>
              <p>Cumpleaños: {contacto.cumpleanos}</p>
            </div>
            <div className='card-eliminar'>
              <button onClick={() => eliminarContacto(index)}>
                <i className="bi bi-trash3-fill"></i> Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default ListaContactos;
