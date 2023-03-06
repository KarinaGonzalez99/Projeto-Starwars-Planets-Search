import React from 'react';
import './App.css';
import DeleteFilters from './components/Remove';
import Nome from './components/Nome';
import SelecaoFiltro from './components/SelecaoFiltro';
import Filtros from './components/Filtros';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Nome />
      <SelecaoFiltro />
      <DeleteFilters />
      <Filtros />
    </StarWarsProvider>

  );
}

export default App;
