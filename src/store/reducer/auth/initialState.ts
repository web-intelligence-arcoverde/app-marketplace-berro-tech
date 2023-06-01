import {IStateAuth} from './types';

export const initialState: IStateAuth = {
  token: '',
  isLogged: false,
  filterProducts: [],
  user: {
    id: '',
    avatar_url: '',
    name: '',
    email: '',
    products: [],
    addresses: [],
    contacts: [],
  },
};
