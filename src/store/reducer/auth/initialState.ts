import { UserState } from './types';

export const initialState: UserState = {
  token: '',
  lastSearchs: [],
  isLogged: false,
  userSignUp: {
    email: '',
    name: '',
    phone: '',
    password: '',
    confirmationPassword: ''
  }
};
