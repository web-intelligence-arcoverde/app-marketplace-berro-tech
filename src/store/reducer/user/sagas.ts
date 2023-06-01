import {all, call, put, takeLatest} from 'redux-saga/effects';
import api from '../../../service';
import {signInSuccess} from '../auth/actions';
import {signUpRequest} from '../auth/service';
import {readSellerSuccess, signUpSuccess} from './actions';

function* signIn({payload}: any): any {
  try {
    const router = payload.router;

    delete payload.router;

    const {
      data: {token},
    } = yield call(api.post, `/sign-in/`, payload.data);

    yield put(signInSuccess(token.token));

    yield put(router('DashboardBottomNavigation'));
  } catch (e) {
    console.log(e);
  }
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
    const router = payload.router;

    delete payload.router;

    const {
      data: {token},
    } = yield call(() => signUpRequest(payload));

    yield put(signUpSuccess(token));

    yield put(router('DashboardBottomNavigation'));
  } catch (e) {}
}

function* userSagas() {
  yield all([
    takeLatest('user/sign-in-request', signIn),
    takeLatest('user/read-seller-request', readSeller),
    takeLatest('user/sign-up-step-02', signUp),
  ]);
}

export default userSagas;
