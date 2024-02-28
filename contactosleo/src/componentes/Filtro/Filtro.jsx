import React from 'react';

const Filtro = ({ onFiltrar }) => {
  const handleFiltroChange = (e) => {
    onFiltrar(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre o número"
        onChange={handleFiltroChange}
      />
    </div>
  );
};

export { Filtro }
