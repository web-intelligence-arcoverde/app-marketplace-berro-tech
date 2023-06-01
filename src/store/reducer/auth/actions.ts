import {createAction} from '@reduxjs/toolkit';
import {IUser} from './types';

export const signInSuccess = createAction<string>('auth/sign-in-success');

export const signUpSuccess = createAction<string>('auth/sign-up-success');

export const signOutRequest = createAction('auth/sign-out-request');

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
