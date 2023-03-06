import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Itens() {
  const { filtrao } = useContext(StarWarsContext);

  const data = () => filtrao.map((item, index) => (
    <tr key={ index }>
      <td>{ item.climate }</td>
      <td>{ item.diameter }</td>
      <td>{ item.gravity }</td>
      <td>{ item.name }</td>
      <td>{ item.orbital_period }</td>
      <td>{ item.population }</td>
      <td>{ item.rotation_period }</td>
      <td>{ item.surface_water }</td>
      <td>{ item.terrain }</td>
    </tr>
  ));

  return (
    <tbody>
      { filtrao.length > 0 ? data() : null }
    </tbody>
  );
}

export default Itens;
