import useSWR from 'swr';
import { api, apiGame } from '../services/api';
import { getDateFormatted } from '../utils';

export function useLolEsportsApi<T = any>(url: string, params?: any) {
  const { data, error, isLoading } = useSWR(
    url,
    async (url) => await api.get(url, { ...params }).then((res) => res.data as T),
    { refreshInterval: 6000 }
  );

  return { data, error, isLoading };
}

export function useFrameApi<T = any>(url: string) {
  const params = {
    startingTime: getDateFormatted()
  };

  const { data, error, isLoading, mutate } = useSWR(
    url,
    async (url) => await apiGame.get(url, { params }).then((res) => res.data as T),
    { refreshInterval: 1000 }
  );

  return { data, error, isLoading, mutate };
}
