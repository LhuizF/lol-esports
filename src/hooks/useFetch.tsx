import useSWR from 'swr';
import { getDateFormatted } from '../utils';
const apiKey = '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z';
const dataDragonUrl = 'https://ddragon.leagueoflegends.com/';
const esportsUrl = 'https://esports-api.lolesports.com/persisted/gw';
const feedLol = 'https://feed.lolesports.com/livestats/v1';

interface RequestOptions {
  url: string;
  inTime?: boolean;
  params?: { [x: string]: string };
}

const fetcher = async ({ url, inTime, params }: RequestOptions) => {
  const paramsLang = { hl: 'pt-BR' };
  const searchParams = new URLSearchParams(paramsLang);

  if (inTime) {
    searchParams.set('startingTime', getDateFormatted());
  }

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      searchParams.set(key, value);
    });
  }

  return await fetch(url + '?' + searchParams.toString(), {
    headers: { 'x-api-key': apiKey }
  }).then((res) => res.json());
};

export const getVersion = async () => {
  const [version] = await fetch(dataDragonUrl + 'api/versions.json').then((res) =>
    res.json()
  );
  localStorage.setItem('version', version);
};

export const apiDataDragon = async (path: string) => {
  const version = localStorage.getItem('version');

  return await fetch(`${dataDragonUrl}cdn/${version}/data/pt_BR/${path}.json`).then(
    (res) => res.json()
  );
};

export function useLolEsportsApi<T>(url: string, params?: any) {
  const { data, error, isLoading } = useSWR(
    url,
    async (url) => fetcher({ url: esportsUrl + url, params }),
    { refreshInterval: 6000 }
  );

  const dataResponse = data as T;

  return { data: dataResponse, error, isLoading };
}

export function useFrameApi<T = any>(url: string) {
  const { data, error, isLoading } = useSWR(
    url,
    async (url) =>
      fetcher({
        url: feedLol + url,
        inTime: true
      }).then((res) => res as T),
    { refreshInterval: 1000 }
  );
  const dataResponse = data as T;

  return { data: dataResponse, error, isLoading };
}
