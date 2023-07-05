import {all, call, put, takeLatest} from 'redux-saga/effects';
import api from '../../../service';
import {
  createProductSuccess,
  getProductByIdSuccess,
  readAgeCategoriesSuccess,
  readAnimalSuccess,
  readBreedSuccess,
  readBusinessHighlightProductRequest,
  readBusinessHighlightProductSuccess,
  readClassificationSuccess,
  readProductRequest,
  readProductSuccess,
  readSellTypeSuccess,
  readTypesAnimalsSuccess,
  topSearchProductSuccess,
} from './actions';
import {store} from '../..';
import {readInformationUserLoggedRequest} from '../auth/actions';

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
    const {data} = yield call(api.get, `/product/${payload}`);

    yield put(getProductByIdSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readAnimals() {
  try {
    const {data} = yield call(api.get, '/animal');
    yield put(readAnimalSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* readBreedByIdAnimal({payload}: any) {
  try {
    const {data} = yield call(api.get, `/search-breed-by-name/${payload}`);
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

function* readSellType() {
  try {
    const {data} = yield call(api.get, '/sale');

    yield put(readSellTypeSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* registerProduct({payload}: any): any {
  try {
    const {router} = payload;

    const {productInfo, files} = store.getState().product;

    const {state, city} = store.getState().user;

    const product = {...productInfo, state, city};

    var formData = new FormData();

    files.map((file: any) => {
      formData.append('document', file);
    });

    formData.append('productInfo', JSON.stringify(product));

    yield call(api.post, '/product', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    yield put(readProductRequest());
    yield put(readInformationUserLoggedRequest());
    yield put(readBusinessHighlightProductRequest());

    yield put(router('Perfil'));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(createProductSuccess());
  }
}

function* readClassifications() {
  try {
    const {data} = yield call(api.get, '/classification');

    yield put(readClassificationSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* renewLimitProduct({payload}: any) {
  try {
    yield call(api.get, `/renewad/${payload}`);
  } catch (e) {
    console.log(e);
  }
}

function* deleteProduct({payload}: any) {
  let toast = payload.toast;
  let router = payload.router;
  delete payload.toast;
  delete payload.router;

  try {
    yield call(api.delete, `/product/${payload.id}`);
    yield put(readProductRequest());
    yield put(readInformationUserLoggedRequest());
    yield put(readBusinessHighlightProductRequest());

    router('DashboardBottomNavigation');

    toast.show('Produto excluido', {
      type: 'danger',
      placement: 'bottom',
      duration: 4000,
      animationType: 'zoom-in',
    });
  } catch (e) {
    console.log(e);
  }
}

function* deletePhotoProduct({payload}: any) {
  try {
    yield call(api.delete, `/document/${payload}`);
  } catch (e) {
    console.log(e);
  }
}

function* updateProductBasicInformation({payload}: any) {
  try {
    yield call(api.put, `/product-step-1/${payload.id}`, payload);

    yield put(readBusinessHighlightProductRequest());
  } catch (e) {
    console.log(e);
  }
}

function* addPhotoProduct({payload}: any) {
  try {
    const {files, id} = payload;

    var formData = new FormData();

    files.map((file: any) => {
      formData.append('document', file);
    });

    yield call(api.put, `/product-step-2/${id}`, formData);

    yield put(readBusinessHighlightProductRequest());
  } catch (e) {
    console.log(e);
  }
}

function* updateLocationProduct({payload}: any) {
  try {
    const {id, formData} = payload;

    yield call(api.put, `/product-step-3/${id}`, formData);

    yield put(readBusinessHighlightProductRequest());
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
    takeLatest('product/read-sell-type-request', readSellType),
    takeLatest('product/create-product-request', registerProduct),
    takeLatest('product/read-classification-request', readClassifications),
    takeLatest('product/renew-limit-product-request', renewLimitProduct),
    takeLatest('product/delete-product-request', deleteProduct),
    takeLatest('product/delete-file-product-request', deletePhotoProduct),
    takeLatest(
      'product/update-product-basic-information-request',
      updateProductBasicInformation,
    ),

    takeLatest('product/update-document-product-request', addPhotoProduct),
    takeLatest(
      'product/update-product-location-request',
      updateLocationProduct,
    ),
  ]);
}

export default productSagas;
