import axios from 'axios';

const apiKey = '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z';

export const api = axios.create({
  baseURL: 'https://esports-api.lolesports.com/persisted/gw',
  headers: {
    'x-api-key': apiKey
  },
  params: {
    hl: 'pt-BR'
  }
});

export const apiGame = axios.create({
  baseURL: 'https://feed.lolesports.com/livestats/v1',
  headers: {
    'x-api-key': apiKey
  }
});

export default api;
