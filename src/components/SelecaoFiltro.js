import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SelectFilter() {
  const {
    column, columnFilter, comparison, comparisonFilter, handleClick,
    setFilterV, setColunaV,
    setComparsionV, valueFilter,
  } = useContext(StarWarsContext);

  const handleColuna = (event) => {
    setColunaV(event.target.value);
  };

  const handleComparison = (event) => {
    setComparsionV(event.target.value);
  };

  const handleChange = (event) => {
    setFilterV(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClick();
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label>
        Column:
        <select
          name="column"
          data-testid="column-filter"
          value={ columnFilter }
          onChange={ handleColuna }
        >
          {column.map((columnName) => (
            <option key={ columnName } value={ columnName }>
              {columnName}
            </option>
          ))}
        </select>
      </label>
      <label>
        Comparison:
        <select
          name="comparison"
          data-testid="comparison-filter"
          value={ comparisonFilter }
          onChange={ handleComparison }
        >
          {comparison.map((operator) => (
            <option key={ operator } value={ operator }>
              {operator}
            </option>
          ))}
        </select>
      </label>
      <label>
        Value:
        <input
          type="number"
          value={ valueFilter }
          onChange={ handleChange }
          data-testid="value-filter"
        />
      </label>
      <button data-testid="button-filter" type="submit">
        Filter
      </button>
    </form>
  );
}

export default SelectFilter;
