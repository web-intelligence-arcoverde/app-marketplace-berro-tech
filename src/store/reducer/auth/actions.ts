import {createAction} from '@reduxjs/toolkit';
import {IUser, IChangerPassword, ISignIn, ISignUpForm} from './types';

export const signInRequest = createAction<ISignIn>('auth/sign-in-request');
export const signInSuccess = createAction<string>('auth/sign-in-success');

export const signUpForm = createAction<ISignUpForm>('auth/sign-up-form');

export const signUpRequest = createAction<any>('auth/sign-up-request');
export const signUpSuccess = createAction<any>('auth/sign-up-success');

export const signOutRequest = createAction<any>('auth/sign-out-request');

export const signOutSuccess = createAction('auth/sign-out-request');

export const setToken = createAction<string>('auth/set-token');

export const forgotPasswordRequest = createAction<any>(
  'auth/forgot-password-request',
);

export const forgotPasswordSuccess = createAction<string>(
  'auth/forgot-password-success',
);

export const verifyTokenForgotPasswordRequest = createAction<any>(
  'auth/verify-token-forgot-password-request',
);

export const verifyTokenForgotPasswordSuccess = createAction<string>(
  'auth/verify-token-forgot-password-success',
);

export const changerPasswordForgotPasswordRequest = createAction<any>(
  'auth/changer-password-forgot-password-request',
);

export const changerPasswordForgotPasswordSuccess = createAction(
  'auth/changer-password-forgot-password-success',
);

export const readInformationUserLoggedRequest = createAction(
  'auth/read-information-user-logged-request',
);

export const readInformationUserLoggedSuccess = createAction<IUser>(
  'auth/read-information-user-logged-success',
);

export const filterProductsByAnimalType = createAction<any>(
  'auth/filter-products-by-animal-type',
);

export const changerPasswordRequest = createAction<IChangerPassword>(
  'auth/changer-password-request',
);

export const changerPasswordSuccess = createAction(
  'auth/changer-password-success',
);

export const userLoggedDeleteRequest = createAction<any>(
  'auth/user-logged-delete-request',
);

export const userLoggedDeleteSuccess = createAction(
  'auth/user-logged-delete-success',
);

export const updateAuthAddressSuccess = createAction<any>(
  'auth/update-auth-address-success',
);
