import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

function Filter({ remover }) {
  const { filtro = [], setFiltro } = useContext(StarWarsContext);

  const handleRemover = (column) => {
    const novoFiltro = filtro.filter((f) => f.column !== column);
    setFiltro(novoFiltro);
    remover(column);
  };

  return (
    <div>
      <h2>Filtros Aplicados:</h2>
      {filtro.map(({ column, comparison, value }) => (
        <div key={ column } data-testid="filter">
          {`${column} - ${comparison} - ${value}`}
          <button type="button" onClick={ () => handleRemover(column) }>X</button>
        </div>
      ))}
    </div>
  );
}

Filter.propTypes = {
  remover: PropTypes.func.isRequired,
};

export default Filter;
