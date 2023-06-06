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

  states: [],
  loadingStates: true,
  state: '',
  visible_bottom_sheet_states: 0,
  cities: [],
  city: '',
  visible_bottom_sheet_cities: 0,
  loadingCities: true,
};
