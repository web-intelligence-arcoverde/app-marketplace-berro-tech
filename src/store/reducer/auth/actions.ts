import {createAction} from '@reduxjs/toolkit';
import {ISignInRequestEmail} from './types';

export const signInRequestFacebook = createAction(
  'user/sign-in-request-facebook',
);

export const signInRequestGoogle = createAction('user/sign-in-request-google');

export const signInRequestEmail = createAction<ISignInRequestEmail>(
  'user/sign-in-request-facebook',
);
