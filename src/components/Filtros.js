import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import fetchApi from '../helpers/fetchApi';
import Itens from './Itens';

function Filtros() {
  const { itens, setItens } = useContext(StarWarsContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchApi();
        setItens(result);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar os dados.');
        setLoading(false);
      }
    };

    fetchData();
  }, [setItens]);

  if (loading) {
    return (
      <div className="progress-bar">
        <div className="progress-bar-fill" />
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          {itens[0] && Object.keys(itens[0]).map((key, index) => (
            <th key={ index }>{key}</th>
          ))}
        </tr>
      </thead>
      <Itens />
    </table>
  );
}

export default Filtros;
