import {IContact} from '../auth/types';
import {IProduct} from '../product/types';

export interface IUserInitialState {
  user: IUser;
  loading?: boolean;
  step_edit_profile?: number;
  bottom_sheet_index?: number;
  token: string;
  userSignUp?: ISignUp;

  seller?: IUser;
  loadingSeller?: boolean;

  states: any[];
  state: string;
  visible_bottom_sheet_states: number;
  loadingStates: boolean;

  cities: any[];
  city: string;
  visible_bottom_sheet_cities: number;
  loadingCities: boolean;

  image_user: any;
}

export type IUser = {
  id: '';
  avatar_url?: string;
  name: string;
  email: string;
  products: IProduct[];
  addresses: IAddress[];
  contacts: IContact[];
};

interface IAddress {
  city: string;
  uf: string;
  country: string;
}

export interface IChangerStepEditProfile {
  step_edit_profile: number;
}

export interface ISignUp {
  email?: string;
  name?: string;
  phone?: string;
  password?: string;
  confirmationPassword?: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface IRecoveryAccountSendEmail {
  email: string;
}

export interface IRecoveryAccountSendCode {
  code: string;
}

export interface IRecoveryAccount {
  email: string;
}

export interface ISignUp {
  email?: string;
  name?: string;
  phone?: string;
  password?: string;
  confirmationPassword?: string;
}
