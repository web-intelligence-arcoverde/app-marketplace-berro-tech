import {createReducer} from '@reduxjs/toolkit';

import {initialState} from './initialState';
import {
  filterProductsByAnimalType,
  readInformationUserLoggedSuccess,
  setToken,
  signInSuccess,
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
    .addCase(readInformationUserLoggedSuccess, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    })
    .addCase(filterProductsByAnimalType, (state, action) => {
      state.filterProducts = action.payload;
    });
});
