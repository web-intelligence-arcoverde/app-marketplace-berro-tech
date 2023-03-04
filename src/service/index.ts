import axios from 'axios';
import {store} from '../store';

const local = 'http://127.0.0.1:3333/api/api';

const api = axios.create({
  baseURL: local,
});

api.interceptors.request.use((config: any) => {
  const {token} = store.getState().auth;
  const headers = {...config.headers};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return {...config, headers};
});

export default api;
