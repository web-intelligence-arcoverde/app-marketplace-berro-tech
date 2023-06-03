import {IUserInitialState} from './types';

export const initialState: IUserInitialState = {
  user: {
    id: '',
    name: '',
    email: '',
    addresses: [{city: '', uf: '', country: ''}],
    contacts: [{phone_number: ''}],
    avatar_url: '',
    products: [],
  },
  loading: true,
  step_edit_profile: 0,
  bottom_sheet_index: 0,
  token: '',

  seller: {
    id: '',
    name: '',
    email: '',
    addresses: [{city: '', uf: '', country: ''}],
    contacts: [{phone_number: ''}],
    avatar_url: '',
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
