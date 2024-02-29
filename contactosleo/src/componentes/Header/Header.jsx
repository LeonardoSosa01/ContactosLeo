
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
                    <p>contactos leo es una aplicacion de gestion de contactos</p>
                </div>
                <img src="src/assets/logo2.png" alt="" />
            </div>
        </>
    );
};

export default Header;
