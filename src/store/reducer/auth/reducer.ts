import {createReducer} from '@reduxjs/toolkit';

import {initialState} from './initialState';
import {
  addProductUserLogged,
  changerPasswordForgotPasswordSuccess,
  changerStepRecoveryAccount,
  filterProductsByAnimalType,
  forgotPasswordSuccess,
  readInformationUserLoggedRequest,
  readInformationUserLoggedSuccess,
  setToken,
  signInSuccess,
  signOutRequest,
  signUpForm,
  signUpSuccess,
  updateAuthAddressSuccess,
  userLoggedDeleteSuccess,
  verifyTokenForgotPasswordSuccess,
} from './actions';
import {storeData} from '../../../hooks/useAsyncStorage';

export const authReducer = createReducer(initialState, builder => {
  builder
    .addCase(signInSuccess, (state, action) => {
      state.token = action.payload;
      state.isLogged = true;
      storeData(action.payload);
    })
    .addCase(setToken, (state, action) => {
      state.token = action.payload;
      state.isLogged = true;
      storeData(action.payload);
    })
    .addCase(readInformationUserLoggedRequest, (state, action) => {
      state.loading = true;
    })
    .addCase(readInformationUserLoggedSuccess, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    })
    .addCase(filterProductsByAnimalType, (state, action) => {
      state.filterProducts = action.payload;
    })
    .addCase(signOutRequest, (state, action) => {
      state.token = '';
      state.isLogged = false;
      storeData('');
      action.payload.router('SignInScreen');
    })
    .addCase(userLoggedDeleteSuccess, (state, action) => {
      state.token = '';
      state.isLogged = false;
      storeData('');
    })
    .addCase(signUpSuccess, (state, action) => {
      state.token = action.payload.token;
      state.isLogged = true;
      storeData(action.payload.token);
      state.signUpForm = {
        email: '',
        name: '',
        phone: '',
        password: '',
        confirmationPassword: '',
        toast: '',
      };
    })
    .addCase(updateAuthAddressSuccess, (state, action) => {
      state.user.addresses = [{...action.payload}];
    })
    .addCase(forgotPasswordSuccess, (state, action) => {
      state.stepRecoveryAccount = 1;
      state.recoveryAccountEmail = action.payload;
    })
    .addCase(verifyTokenForgotPasswordSuccess, (state, action) => {
      state.stepRecoveryAccount = 2;
      state.tokenRecoveryAccount = action.payload;
    })
    .addCase(changerPasswordForgotPasswordSuccess, (state, action) => {
      state.stepRecoveryAccount = 0;
      state.tokenRecoveryAccount = '';
      state.recoveryAccountEmail = '';
    })
    .addCase(signUpForm, (state, action) => {
      state.signUpForm = {...action.payload};
    })
    .addCase(changerStepRecoveryAccount, (state, action) => {
      state.stepRecoveryAccount = action.payload;
    })
    .addCase(addProductUserLogged, (state, action) => {
      state.user.products = [...state.user.products, action.payload];
    });
});
