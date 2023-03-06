import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Nome() {
  const { planeta, setPlaneta } = useContext(StarWarsContext);

  const handleChange = (event) => {
    setPlaneta(event.target.value);
  };

  return (
    <form>
      <label htmlFor="name-filter">Filtrar por nome:</label>
      <input
        data-testid="name-filter"
        id="name-filter"
        type="text"
        placeholder="Escreva aqui"
        value={ planeta }
        onChange={ handleChange }
      />
    </form>
  );
}

export default Nome;
