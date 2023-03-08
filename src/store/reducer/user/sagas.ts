import {all, call, put, takeLatest} from 'redux-saga/effects';
import {mockImages} from '../../../assets/images/mock';
import {readInformationUserSuccess} from './actions';

const user = {
  name: 'Lucas Henrique Paes de Carvalho',
  email: 'lucas@berrotech.com',
  address: null,
  phone: '87998093765',
  avaliation_rate: '4.8',
  photo: mockImages.UserImage,
};

function* readUserInformation(): any {
  try {
    yield put(readInformationUserSuccess(user));
  } catch (e) {
    console.log(e);
  }
}

function* userSagas() {
  yield all([
    takeLatest('user/sign-information-user-request', readUserInformation),
  ]);
}

export default userSagas;
