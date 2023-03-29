import {combineReducers} from 'redux';
import {authReducer} from './auth/reducer';

import {userReducer} from './user/reducer';
import {productReducer} from './product/reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  product: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
