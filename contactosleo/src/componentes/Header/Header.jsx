
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>
            <div className='Header'>
                <img src="src/assets/logo2.png" alt="" />
                <div className='main-bienvenida'>
                    <h1>ContactosLeo</h1>
                    <h2>Bienvenidos a tu gestor de contactos</h2>
                    <p>con contacos leo podras gestionar Tus contactos, empecemos por agendar el primero, luego podras añadir mas, guardarlos y eliminarlos a tu gusto</p>
                </div>
            </div>
        </>
    );
};

export default Header;
