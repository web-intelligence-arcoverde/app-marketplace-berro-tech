import {all, call, put, takeLatest} from 'redux-saga/effects';
import api from '../../../service';
import {
  signInSuccess,
  updateAuthAddressSuccess,
  userLoggedDeleteSuccess,
} from '../auth/actions';

import {
  readCityByStateSuccess,
  readSellerSuccess,
  readStateSuccess,
} from './actions';
import {store} from '../..';

function* signIn({payload}: any): any {
  try {
    const router = payload.router;

    delete payload.router;

    const {
      data: {token},
    } = yield call(api.post, '/sign-in/', payload.data);

    yield put(signInSuccess(token.token));

    yield put(router('DashboardBottomNavigation'));
  } catch (e) {}
}

function* readSeller({payload}: any): any {
  try {
    const {data} = yield call(api.get, `/user/${payload}`);
    yield put(readSellerSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* signUp({payload}: any): any {
  try {
    console.log(payload);

    /*
    const router = payload.router;

    delete payload.router;

    const {data: token} = yield call(api.post, '/sign-up', payload);

    yield put(signUpSuccess(token));

    yield put(router('DashboardBottomNavigation'));*/
  } catch (e) {}
}

function* readStates() {
  try {
    const {data} = yield call(api.get, '/state/');
    yield put(readStateSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readCities({payload}: any) {
  try {
    const {data} = yield call(api.get, `/city/${payload}`);

    yield put(readCityByStateSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* updateUserAddress({payload}: any): any {
  try {
    yield call(api.post, '/address-user', payload);

    yield put(updateAuthAddressSuccess(payload));
  } catch (error) {}
}

function* updateUserBasicInformation({payload}: any): any {
  try {
    const id = store.getState().auth.user.id;

    yield call(api.put, `/user/${id}`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {}
}

function* userDelete({payload}: any): any {
  try {
    yield call(api.get, '/user-logged-delete');
    payload.router('SignInEmail');
    yield put(userLoggedDeleteSuccess());
  } catch (error) {}
}

function* userSagas() {
  yield all([
    takeLatest('user/sign-in-request', signIn),
    takeLatest('user/read-seller-request', readSeller),
    takeLatest('user/sign-up-step-02', signUp),
    takeLatest('user/read-state-request', readStates),
    takeLatest('user/read-city-by-state-request', readCities),
    takeLatest('user/update-user-address-request', updateUserAddress),
    takeLatest(
      'user/user-edit-basic-information-request',
      updateUserBasicInformation,
    ),
    takeLatest('user/user-logged-delete-request', userDelete),
  ]);
}

export default userSagas;
