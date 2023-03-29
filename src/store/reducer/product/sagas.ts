import {all, call, put, takeLatest} from 'redux-saga/effects';
import {readTypesAnimalsSuccess} from './actions';

const animals = ['ovino', 'caprino'];

function* readAnimalType(): any {
  try {
    yield put(readTypesAnimalsSuccess({animals_types: animals}));
  } catch (e) {
    console.log(e);
  }
}

function* productSagas() {
  yield all([takeLatest('product/read-types-animals-request', readAnimalType)]);
}

export default productSagas;
