import {combineReducers} from '@reduxjs/toolkit';

import counterReducer from './counter/counter';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
