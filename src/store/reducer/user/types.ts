import {ImageProps} from 'react-native';

export interface IUserInitialState {
  user: IUserState;
  loading?: boolean;
  step_edit_profile: number;
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

export interface IChangerStepEditProfile {
  step_edit_profile: number;
}
