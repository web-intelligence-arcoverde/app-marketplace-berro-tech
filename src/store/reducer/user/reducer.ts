import {createReducer} from '@reduxjs/toolkit';
import {initialState} from './initialState';

import {
  readInformationUserRequest,
  readInformationUserSuccess,
} from './actions';

export const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(readInformationUserRequest, (state, action) => {
      state.loading = true;
    })
    .addCase(readInformationUserSuccess, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
});
