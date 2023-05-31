export interface IUserInitialState {
  user: IUserState;
  loading?: boolean;
  step_edit_profile?: number;
  bottom_sheet_index?: number;
  token: string;

  seller?: any;
}

export interface IUserState {
  name?: string;
  email?: string;
  address?: IAddress | null;
  phone?: string;
  photo?: any;
}

interface IAddress {
  city: string;
  uf: string;
  country: string;
}

export interface IChangerStepEditProfile {
  step_edit_profile: number;
}
