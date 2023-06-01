import {IProduct} from '../store/reducer/product/types';

export type UserState = {
  token: string;
  isLogged: boolean;
  id: '';
  avatar_url?: string;
  name: string;
  email: string;
  products?: IProduct[];
  addresses?: IAddress[];
  contacts?: IContact[];
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
