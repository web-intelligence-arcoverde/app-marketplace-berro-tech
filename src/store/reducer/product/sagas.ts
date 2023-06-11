import {all, call, put, takeLatest} from 'redux-saga/effects';
import api from '../../../service';
import {
  getProductByIdSuccess,
  readAgeCategoriesSuccess,
  readAnimalSuccess,
  readBreedSuccess,
  readBusinessHighlightProductSuccess,
  readProductSuccess,
  readTypesAnimalsSuccess,
  topSearchProductSuccess,
} from './actions';

const animals = ['ovino', 'caprino'];

function* readAnimalType(): any {
  try {
    yield put(readTypesAnimalsSuccess({animals_types: animals}));
  } catch (e) {
    console.log(e);
  }
}

function* readBusinessHighlightProcuct() {
  try {
    const {data} = yield call(api.get, '/products');

    yield put(readBusinessHighlightProductSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* topSearchProduct({payload}: any): any {
  try {
    const {data} = yield call(api.post, '/search-product/', {type: payload});
    yield put(topSearchProductSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readProducts() {
  try {
    const {data} = yield call(api.get, '/products/');

    yield put(readProductSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readProduct({payload}: any): any {
  try {
    console.log(payload);

    const {data} = yield call(api.get, `/product/${payload}`);

    yield put(getProductByIdSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readAnimals() {
  try {
    const {data} = yield call(api.get, '/animal');
    console.log(data);
    yield put(readAnimalSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readBreedByIdAnimal({payload}: any) {
  try {
    const {data} = yield call(api.get, `/search-breed-by-name/${payload}`);
    console.log(data);
    yield put(readBreedSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readAgeCategories() {
  try {
    const {data} = yield call(api.get, '/age-categories');

    yield put(readAgeCategoriesSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* productSagas() {
  yield all([
    takeLatest('product/read-types-animals-request', readAnimalType),
    takeLatest(
      'product/read-business-highlight-product-request',
      readBusinessHighlightProcuct,
    ),
    takeLatest('product/top-search-product-request', topSearchProduct),
    takeLatest('product/read-product-request', readProducts),
    takeLatest('product/get-product-by-id-request', readProduct),
    takeLatest('product/read_animal_request', readAnimals),
    takeLatest('product/read_breed_request', readBreedByIdAnimal),
    takeLatest('product/age_categories_request', readAgeCategories),
  ]);
}

export default productSagas;
