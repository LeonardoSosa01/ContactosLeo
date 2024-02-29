import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import FormularioContacto from './componentes/FormularioContacto/FormularioContacto';
import Filtro from './componentes/Filtro/Filtro';
import ListaContactos from './componentes/ListaContactos/ListaContactos';
import './App.css';

const App = () => {
  const [contactos, setContactos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [listaAbierta, setListaAbierta] = useState(false);

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

  const toggleLista = () => {
    setListaAbierta(!listaAbierta);
  };

  return (
    <Router>
      <div className='main'>
        <h2>Formulario de Contacto</h2>

        <div className='main-gestion'>
          <FormularioContacto onAgregarContacto={agregarContacto} />
        </div>

        <div className='main-route'>
          <button onClick={toggleLista}>
            {listaAbierta ? 'Cerrar Lista' : 'Tu Lista de Contactos'}
          </button>
          <div className='main-filtro'>
            <h2>Filtro</h2>
            <Filtro onFiltrar={filtrarContactos} />
          </div>

          {listaAbierta && ( // Mostrar ListaContactos solo si listaAbierta es true
            <div className='main-lista'>
              <Routes>
                <Route path="/lista" element={<ListaContactos contactos={contactos} eliminarContacto={eliminarContacto} filtro={filtro} />} />
              </Routes>
            </div>
          )}

          <button onClick={limpiarLocalStorage}>Eliminar Todos Los contactos</button>
        </div>
      </div>
    </Router>
  );
};

export default App;
