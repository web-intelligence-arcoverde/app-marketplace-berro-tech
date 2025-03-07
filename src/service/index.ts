import axios from 'axios';
import {store} from '../store';
import {storeData} from '../hooks/useAsyncStorage';

export const local = 'http://localhost:3333/v1';
export const dev = 'https://berro-tech-api.herokuapp.com/v1';

const api = axios.create({baseURL: dev});

api.interceptors.request.use(
  (config: any) => {
    const {token} = store.getState().auth;
    const headers = {
      ...config.headers,
    };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    return {
      ...config,
      headers,
    };
  },
  error => {
    throw new Error(error.response.data.message);
  },
);

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      storeData('');
    }
    throw new Error(error.response.data.message);
  },
);

export default api;
