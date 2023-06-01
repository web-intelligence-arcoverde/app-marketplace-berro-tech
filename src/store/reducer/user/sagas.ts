import {all, call, put, takeLatest} from 'redux-saga/effects';
import {mockImages} from '../../../assets/images/mock';
import api from '../../../service';
import {readInformationUserSuccess, readSellerSuccess} from './actions';

function* readSeller({payload}: any): any {
  try {
    const {data} = yield call(api.get, `/user/${payload}`);
    yield put(readSellerSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* userSagas() {
  yield all([takeLatest('user/read-seller-request', readSeller)]);
}

export default userSagas;
