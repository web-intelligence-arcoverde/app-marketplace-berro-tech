import {ImageProps} from 'react-native';

export interface IUserInitialState {
  user: IUserState;
  loading?: boolean;
}

export interface IUserState {
  name?: string;
  email?: string;
  address?: IAddress | null;
  phone?: string;
  avaliation_rate?: string;
  photo?: string | ImageProps | Readonly<ImageProps> | undefined;
}

interface IAddress {
  city: string;
  uf: string;
  country: string;
}
