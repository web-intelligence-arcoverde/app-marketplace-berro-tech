import {createAction} from '@reduxjs/toolkit';
import {IUserState} from './types';

export const readInformationUserRequest = createAction(
  'user/sign-information-user-request',
);

export const readInformationUserSuccess = createAction<IUserState>(
  'user/sign-information-user-success',
);
