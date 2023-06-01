export interface IUserInitialState {
  user: IUserState;
  loading?: boolean;
  step_edit_profile?: number;
  bottom_sheet_index?: number;
  token: string;
  userSignUp?: ISignUp;

  seller?: any;
  loadingSeller?: boolean;
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
