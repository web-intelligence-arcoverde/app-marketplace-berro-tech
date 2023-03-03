import {createReducer} from '@reduxjs/toolkit';
import {signInRequestEmail, signInRequestFacebook} from './actions';

import {initialState} from './initialState';

export const authReducer = createReducer(initialState, builder => {
  builder
    .addCase(signInRequestEmail, (state, action) => {
      console.log(action);
    })
    .addCase(signInRequestFacebook, (state, action) => {
      console.log(action);
    });
});
