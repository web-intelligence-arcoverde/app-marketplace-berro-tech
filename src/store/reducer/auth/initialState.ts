import {IStateAuth} from './types';

export const initialState: IStateAuth = {
  token: '',
  isLogged: false,
  loading: true,
  user: {
    id: '',
    avatar_url: '',
    name: '',
    email: '',
    products: [],
    addresses: [],
    contacts: [],
  },

  filterProducts: [],

  stepRecoveryAccount: 0,
  recoveryAccountEmail: '',
  tokenRecoveryAccount: '',
};
