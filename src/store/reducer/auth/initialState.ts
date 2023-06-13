import {IStateAuth} from './types';

export const initialState: IStateAuth = {
  token: '',
  isLogged: false,
  loading: true,
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
  visibleErrorMessage: false,
  errorMessage: '',
};
