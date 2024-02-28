import React, { useState, useEffect } from 'react';
import FormularioContacto from './componentes/FormularioContacto/FormularioContacto';
import { Filtro, ListaContactos } from './componentes/index';
import './App.css';




const App = () => {
  const [contactos, setContactos] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    const storedContactos = JSON.parse(localStorage.getItem('contactos')) || [];
    setContactos(storedContactos);
  }, []);

  const agregarContacto = (contacto) => {
    const newContactos = [...contactos, contacto];
    setContactos(newContactos);
    localStorage.setItem('contactos', JSON.stringify(newContactos));
  };

  const eliminarContacto = (index) => {
    const newContactos = [...contactos];
    newContactos.splice(index, 1);
    setContactos(newContactos);
    localStorage.setItem('contactos', JSON.stringify(newContactos));
  };

  const filtrarContactos = (filtro) => {
    setFiltro(filtro);
  };

  const limpiarLocalStorage = () => {
    localStorage.clear();
    setContactos([]);
  };

  return (
    <div className='main'>
      <h2>Formulario de Contacto</h2>

      <div className='main-gestion'>
        <FormularioContacto onAgregarContacto={agregarContacto} />
      </div>

      <div className='main-route'>
        <button >
          Tu Lista de Contactos
        </button>
        <div className='main-filtro'>
          <h2>Filtro</h2>
          <Filtro onFiltrar={filtrarContactos} />
        </div>

        <div className='main-lista'>
          <ListaContactos contactos={contactos} eliminarContacto={eliminarContacto} filtro={filtro} />
        </div>

        <button onClick={limpiarLocalStorage}>Eliminar Todos Los contactos</button>
      </div>
    </div>
  );
};

export default App;
