const filtros = (dados, filterData) => {
  if (dados.length === 0) {
    return filterData;
  }

  return filterData.filter((planet) => dados.every(({ columnFilter,
    comparisonFilter, valueFilter }) => {
    const planetValue = Number(planet[columnFilter]);

    switch (comparisonFilter) {
    case 'maior que':
      return planetValue > Number(valueFilter);
    case 'menor que':
      return planetValue < Number(valueFilter);
    case 'igual a':
      return planetValue === Number(valueFilter);
    default:
      return false;
    }
  }));
};

export default filtros;
