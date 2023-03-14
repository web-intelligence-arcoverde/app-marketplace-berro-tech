import {IUserInitialState} from './types';

export const initialState: IUserInitialState = {
  user: {
    name: '',
    email: '',
    address: {city: '', uf: '', country: ''},
    phone: '',
    avaliation_rate: '',
    photo: '',
  },
  loading: false,
  step_edit_profile: 0,
};
