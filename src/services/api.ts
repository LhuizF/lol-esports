import axios from 'axios';

const apiKey = '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z';

const params = { hl: 'pt-BR' };

export const api = axios.create({
  baseURL: 'https://esports-api.lolesports.com/persisted/gw',
  headers: {
    'x-api-key': apiKey
  },
  params
});

export const apiGame = axios.create({
  baseURL: 'https://feed.lolesports.com/livestats/v1',
  headers: {
    'x-api-key': apiKey
  },
  params
});

export const apiDdragon = async (path: string) => {
  const url = 'https://ddragon.leagueoflegends.com/';
  const [version] = await axios.get(url + 'api/versions.json').then((res) => res.data);

  return (await axios.get(`${url}cdn/${version}/data/pt_BR/${path}.json`)).data;
};

export default api;
