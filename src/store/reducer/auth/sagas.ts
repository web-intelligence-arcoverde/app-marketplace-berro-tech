import {all, call, takeLatest, put} from 'redux-saga/effects';
import {signUpRequest} from './service';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {signUpSuccess} from '../user/actions';

function* signUp({payload}: any): any {
  try {
    const router = payload.router;

    delete payload.router;

    const {
      data: {token, user},
    } = yield call(() => signUpRequest(payload));

    yield AsyncStorage.setItem('token', token);

    yield put(signUpSuccess({user: user, token: token}));

    yield put(router('DashboardBottomNavigation'));
  } catch (e) {}
}

function* authSagas() {
  yield all([takeLatest('user/sign-up-step-02', signUp)]);
}

export default authSagas;
