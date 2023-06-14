import {createAction} from '@reduxjs/toolkit';
import {IUser, IChangerPassword} from './types';

export const signInSuccess = createAction<string>('auth/sign-in-success');

export const signUpSuccess = createAction<string>('auth/sign-up-success');

export const signOutRequest = createAction<any>('auth/sign-out-request');

export const signOutSuccess = createAction('auth/sign-out-request');

export const setToken = createAction<string>('auth/set-token');

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

export const visibleMessageErrorSignIn = createAction<string>(
  'auth/visible-message-error-sign-in',
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
