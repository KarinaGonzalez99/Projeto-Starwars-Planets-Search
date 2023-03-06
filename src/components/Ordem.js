import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Ordem() {
  const { ordem, setOrdem, random, setRandom } = useContext(StarWarsContext);
  const options = [
    { value: 'diameter', label: 'Diâmetro' },
    { value: 'orbital_period', label: 'Período orbital' },
    { value: 'population', label: 'População' },
    { value: 'rotation_period', label: 'Período de rotação' },
    { value: 'surface_water', label: 'Água na superfície' },
  ];

  return (
    <div>
      <label htmlFor="select-column">Coluna:</label>
      <select
        id="select-column"
        data-testid="column-sort"
        value={ ordem }
        onChange={ ({ target }) => {
          setOrdem(target.value);
        } }
      >
        {options.map((option) => (
          <option
            key={ option.value }
            value={ option.value }
          >
            {option.label}
          </option>
        ))}
      </select>

      <div>
        <label htmlFor="sortOrder">Ordenação:</label>
        <div id="sortOrder">
          <label htmlFor="ASC">
            <input
              id="ASC"
              type="radio"
              name="sortOrder"
              value="ASC"
              data-testid="column-sort-input-asc"
              checked={ random === 'ASC' }
              onChange={ ({ target }) => {
                setRandom(target.value);
              } }
            />
            Ascendente
          </label>

          <label htmlFor="DESC">
            <input
              id="DESC"
              type="radio"
              name="sortOrder"
              value="DESC"
              data-testid="column-sort-input-desc"
              checked={ random === 'DESC' }
              onChange={ ({ target }) => {
                setRandom(target.value);
              } }
            />
            Descendente
          </label>
        </div>
      </div>
    </div>
  );
}

export default Ordem;
