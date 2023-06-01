import {IProduct} from '../product/types';

export type IStateAuth = {
  user: IUser;
  token: string;
  isLogged: boolean;
  filterProducts: IProduct[];
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
