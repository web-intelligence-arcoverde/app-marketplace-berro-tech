import axios from 'axios';
import {store} from '../store';
import {storeData} from '../hooks/useAsyncStorage';

//const local = 'http://127.0.0.1:3333/v1';
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
    console.log(error);
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
  },
);

export default api;
