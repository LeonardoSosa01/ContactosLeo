import React from 'react';
import './ListaContactos.css'
import Filtro from '../Filtro/Filtro';

const ListaContactos = ({ contactos, eliminarContacto, limpiarLocalStorage }) => {
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

      <div className='lista-main'>
        <h2> Estos son Tus Contactos Guardados</h2>
        <div className='boton-filtro'>
          <h2>Filtro</h2>
          <button>
            <Filtro onFiltrar={handleFiltrar} />
          </button>
        </div>

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

        <div className='main-reset'>
          <h2>¿Quieres volver a empezar? Aqui puedes eliminar todos tus contactos. </h2>
          <button onClick={limpiarLocalStorage}>Eliminar Todos Los contactos</button>
        </div>
      </div>
    </>
  );
};

export default ListaContactos;
