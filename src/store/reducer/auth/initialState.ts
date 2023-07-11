import {IStateAuth} from './types';

export const initialState: IStateAuth = {
  token: '',
  isLogged: false,

  user: {
    id: '',
    avatar_url: '',
    name: '',
    email: '',
    products: [],
    addresses: [],
    contacts: [],
  },

  loading: true,

  filterProducts: [],

  stepRecoveryAccount: 0,
  recoveryAccountEmail: '',
  tokenRecoveryAccount: '',
  signUpForm: {},
};
