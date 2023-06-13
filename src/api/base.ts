import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { BASE_URL } from './constants';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: 'always',
      retry: false,
    },
  },
});

export const apiClient = axios.create({
  baseURL: BASE_URL,
});
