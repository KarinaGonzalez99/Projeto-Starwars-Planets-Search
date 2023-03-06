// fetch fora
const fetchApi = async () => {
  const url = 'https://swapi.dev/api/planets';
  const { results } = await fetch(url).then((response) => response.json());
  return results.map(({ residents, ...rest }) => rest);
};

export default fetchApi;
