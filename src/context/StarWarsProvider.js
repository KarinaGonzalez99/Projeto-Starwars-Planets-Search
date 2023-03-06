import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import StarWarsContext from './StarWarsContext';
import filtros from '../helpers/filtros';

function StarWarsProvider({ children }) {
  const [itens, setItens] = useState([]);
  const [planeta, setPlaneta] = useState('');
  const [planets, setplanet] = useState(itens);
  console.log(setplanet);
  const [columnFilter, setColunaV] = useState('population');
  const [comparisonFilter, setComparsionV] = useState('maior que');
  const [valueFilter, setFilterV] = useState(0);
  const [dados, setInfo] = useState([]);
  const [columnValues, setColunas] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filter, setFiltroAplic] = useState([]);
  const [ordem, setOrdem] = useState('');
  const [random, setRandom] = useState('');
  const filterItems = itens.filter((planet) => planet.name.includes(planeta));
  const filtrao = filtros(dados, filterItems);
  const handleClick = useCallback(() => {
    const ramdomColumns = () => columnValues.filter((e) => e !== columnFilter);
    setInfo((state) => [...state, { columnFilter, comparisonFilter, valueFilter }]);
    setColunas(ramdomColumns());
    setColunaV(columnValues[0]);
    setFiltroAplic([...filter, { columnFilter, comparisonFilter, valueFilter }]);
  }, [columnValues, columnFilter, comparisonFilter,
    valueFilter, setInfo, setColunas, setColunaV, filter]);
  const column = columnValues;
  const comparison = useMemo(() => ['maior que', 'menor que', 'igual a'], []);
  const context = useMemo(() => ({
    column,
    columnFilter,
    comparison,
    comparisonFilter,
    dados,
    filtrao,
    filter,
    filterItems,
    handleClick,
    itens,
    ordem,
    planets,
    planeta,
    random,
    setColunaV,
    setColunas,
    setComparsionV,
    setFiltroAplic,
    setInfo,
    setItens,
    setOrdem,
    setPlaneta,
    setRandom,
    setFilterV,
    valueFilter,
  }), [column, columnFilter, comparison,
    comparisonFilter, dados, filtrao,
    filter, filterItems, handleClick,
    itens, ordem, planets, planeta,
    random, setColunaV, setColunas,
    setComparsionV, setFiltroAplic,
    setInfo, setItens, setOrdem, setPlaneta,
    setRandom, setFilterV, valueFilter]);

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf,
}.isRequired;

export default StarWarsProvider;
