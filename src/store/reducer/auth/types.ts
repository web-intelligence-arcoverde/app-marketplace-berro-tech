import {IProduct} from '../product/types';

export type IStateAuth = {
  user: IUser;
  token: string;
  isLogged: boolean;
  filterProducts: IProduct[];
  loading: boolean;

  stepRecoveryAccount: number;
  recoveryAccountEmail: string;
  tokenRecoveryAccount: string;

  signUpForm: ISignUpForm;
};

export type IUser = {
  id: '';
  avatar_url?: string;
  name: string;
  email: string;
  products: IProduct[];
  addresses: IAddress[];
  contacts: IContact[];
};

export type IAddress = {
  id?: number;
  state?: string;
  city?: string;
};

export type IContact = {
  id?: number;
  phone_number?: string;
};

export interface IChangerPassword {
  router: any;
  currentPassword: string;
  newPassword: string;
}

export interface ISignIn {
  email: string;
  password: string;
  router: any;
  toast?: any;
}

export interface ISignUpForm {
  email?: string;
  name?: string;
  phone?: string;
  password?: string;
  confirmationPassword?: string;
  toast?: any;
}
