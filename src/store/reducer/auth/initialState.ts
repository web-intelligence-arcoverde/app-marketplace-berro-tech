import {IUser} from './types';

export const initialState: IUser = {
  token: '',
  isLogged: false,
  loading: true,
  id: '',
  name: '',
  email: '',
  products: [],
  addresses: [],
  contacts: [],
};
