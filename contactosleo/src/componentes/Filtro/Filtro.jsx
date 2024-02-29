import React from 'react';
import './Filtro.css'

const Filtro = ({ onFiltrar }) => {
  const handleFiltroChange = (e) => {
    onFiltrar(e.target.value);
  };

  return (
    <div className='boton'>
      <input
        type="text"
        placeholder="Buscar por nombre o número"
        onChange={handleFiltroChange}
      />
    </div>
  );
};

export default Filtro;
