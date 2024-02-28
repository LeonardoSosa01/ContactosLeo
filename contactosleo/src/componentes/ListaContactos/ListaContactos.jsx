import React, { useState, useEffect } from 'react';
import './ListaContactos.css';

const ListaContactos = ({ contactos, eliminarContacto, filtro }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const contactosFiltrados = contactos.filter(contacto =>
        contacto.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        contacto.telefono.includes(filtro)
    );



    return (
        <>
            <h2>Tus Contactos guardados</h2>
            <div className='lista-main'>

                {contactosFiltrados.map((contacto, index) => (

                    <div className='card-completo' key={index}>

                        <div className='card-parametro'>
                            <p>Nombre: {contacto.nombre}</p>
                            <p>Teléfono: {contacto.telefono}</p>
                            <p>Email: {contacto.email}</p>
                            <p>Cumpleaños: {formatDate(contacto.cumpleanos)}</p>
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

export { ListaContactos }
