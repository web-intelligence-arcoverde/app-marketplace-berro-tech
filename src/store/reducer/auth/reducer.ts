import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './initialState';

import { signUpStep01, signUpStep02 } from './actions';

export const authReducer = createReducer(initialState, builder => {
  builder.addCase(signUpStep01, (state, action) => {
    state.userSignUp = action.payload
  }).addCase(signUpStep02, (state, action) => {
    state.userSignUp = { ...state.userSignUp, ...action.payload }
  });
});
