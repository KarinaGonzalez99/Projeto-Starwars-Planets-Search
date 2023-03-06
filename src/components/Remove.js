import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Remove() {
  const { filter, setInfo,
    setFiltroAplic, setColunas } = useContext(StarWarsContext);

  const remvoe = (index, coluna) => {
    setColunas((colun) => [coluna, ...colun]);
    setInfo((info) => info.filter((_, i) => i !== index));
    setFiltroAplic((filtroAplic) => filtroAplic.filter((_, i) => i !== index));
  };

  const removerAll = () => {
    setColunas([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
    setInfo([]);
    setFiltroAplic([]);
  };

  return (
    <div>
      {filter.length > 0 && (
        <>
          {filter.map(({ coluna, comparisonFilter, valueFilter }, index) => (
            <div key={ index } data-testid="filter">
              <span>
                {`${coluna} ${comparisonFilter} ${valueFilter}`}
              </span>
              <button
                type="button"
                onClick={ () => remvoe(index, coluna) }
              >
                X
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={ removerAll }
            data-testid="button-remove-filters"
          >
            Remover todos os filtros
          </button>
        </>
      )}
    </div>
  );
}

export default Remove;
