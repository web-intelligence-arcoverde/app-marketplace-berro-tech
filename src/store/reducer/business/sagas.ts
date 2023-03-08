import {all, call, takeLatest, put} from 'redux-saga/effects';
//import {signInGoogleRequest} from './service';

function* getProducts(): any {
  try {
    //const response = yield call(signInGoogleRequest);

    console.log([]);
  } catch (e) {
    console.log(e);
  }
}

function* authSagas() {
  yield all([takeLatest('business/read-products-request', getProducts)]);
}

export default authSagas;
