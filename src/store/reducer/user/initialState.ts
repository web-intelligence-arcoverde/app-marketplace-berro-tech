import {IUserInitialState} from './types';

export const initialState: IUserInitialState = {
  user: {
    name: '',
    email: '',
    address: {city: '', uf: '', country: ''},
    phone: '',
    photo: '',
  },
  loading: true,
  step_edit_profile: 0,
  bottom_sheet_index: 0,
  token: '',

  seller: {
    name: '',
    email: '',
    address: {city: '', uf: '', country: ''},
    phone: '',
    photo: '',
    products: [],
  },

  userSignUp: {
    email: '',
    name: '',
    phone: '',
    password: '',
    confirmationPassword: '',
  },

  loadingSeller: true,
};
