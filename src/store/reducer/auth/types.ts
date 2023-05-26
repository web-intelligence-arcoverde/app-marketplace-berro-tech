export interface ISignInRequestEmail {
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
  confirmationPassword?: string
}

export type UserState = {
  token: string;
  lastSearchs: string[];
  isLogged: boolean;
  userSignUp?: ISignUp
};
