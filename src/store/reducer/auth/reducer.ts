import {createReducer} from '@reduxjs/toolkit';
import {initialState} from './initialState';

import {signInRequestGoogle} from './actions';

export const authReducer = createReducer(initialState, builder => {
  builder.addCase(signInRequestGoogle, (state, action) => {});
});
