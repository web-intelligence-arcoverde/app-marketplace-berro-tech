export interface ISignInRequestEmail {
  email: string;
  password: string;
}

export type UserState = {
  token: string;
  lastSearchs: string[];
};
