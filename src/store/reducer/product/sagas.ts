import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../service';
import { readAnimalBreedSuccess, readBusinessHighlightProductSuccess, readTypesAnimalsSuccess } from './actions';

const animals = ['ovino', 'caprino'];

const racas = [
  'Boer',
  'Savannah',
  'Saanen',
  'Murciana Granadina',
  'Alpina Americana',
  'Parda Alpina',
  'Moxotó',
  'Canindé',
  'Kalahari',
  'Toggenburg',
  'Marota',
  'Anglo Nubiana',
  'SRD (Sem raça definida)',
];

function* readAnimalType(): any {
  try {
    yield put(readTypesAnimalsSuccess({ animals_types: animals }));
  } catch (e) {
    console.log(e);
  }
}

function* readBreeds(exemplo: any): any {
  try {
    yield put(readAnimalBreedSuccess({ breeds: racas }));
  } catch (e) {
    console.log(e);
  }
}

function* readBusinessHighlightProcuct() {
  try {

    const { data } = yield call(api.get, '/products');

    yield put(readBusinessHighlightProductSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* productSagas() {
  yield all([
    takeLatest('product/read-types-animals-request', readAnimalType),
    takeLatest('product/read-animal-breed-request', readBreeds),
    takeLatest('product/read-business-highlight-product-request', readBusinessHighlightProcuct)
  ]);
}

export default productSagas;
