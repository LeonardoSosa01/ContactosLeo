import React, { useState, useEffect } from 'react';
import FormularioContacto from './componentes/FormularioContacto/FormularioContacto';
import ListaContactos from './componentes/ListaContactos/ListaContactos';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

const Home = () => {
  return <div className='home-route'><h3>Puedes navegar por Formulario, donde podras agregar contactos y Tus contactos se guardaran en la lista<br /> Alli podras Buscarlos por Filtro y Eliminar los que ya no necesites </h3></div>;
};


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

  const limpiarLocalStorage = () => {
    localStorage.clear();
    setContactos([]);
  };

  return (
    <BrowserRouter>

      <header className='main'>
        <nav className='main-route'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='formulario'>Formulario</NavLink>
          <NavLink to='TuListaDeContactos'>Lista</NavLink>
        </nav>
      </header>



      <Routes>

        <Route index element={<Home />} />

        <Route path='formulario' element={<FormularioContacto onAgregarContacto={agregarContacto} />} />

        <Route path='TuListaDeContactos' element={<ListaContactos contactos={contactos} eliminarContacto={eliminarContacto} filtro={filtro} limpiarLocalStorage={limpiarLocalStorage} />} />


      </Routes>
    </BrowserRouter>




  );
};

export default App;
