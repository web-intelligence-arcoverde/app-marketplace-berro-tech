import {createAction} from '@reduxjs/toolkit';
import {IProduct} from './types';

export const readBusinessHighlightProductRequest = createAction(
  'product/read-business-highlight-product-request',
);

export const readBusinessHighlightProductSuccess = createAction<
  Array<IProduct>
>('product/read-business-highlight-product-success');

export const setVisibleBottomSheetAnimalType = createAction<{
  visible_animal_type_select: number;
}>('product/set-visible-bottom-sheet-animal-type');

export const setVisibleBottomSheetAnimalSex = createAction<{
  visible_animal_sex_select: number;
}>('product/set-visible-bottom-sheet-animal-sex');

export const setAnimalSex = createAction<{animal_sex: string}>(
  'product/set-animal-sex',
);

export const readTypesAnimalsRequest = createAction(
  'product/read-types-animals-request',
);

export const readTypesAnimalsSuccess = createAction<{animals_types: string[]}>(
  'product/read-types-animals-success',
);

export const readAnimalBreedRequest = createAction<{bread: string}>(
  'product/read-animal-breed-request',
);

export const readAnimalBreedSuccess = createAction<{breeds: string[]}>(
  'product/read-animal-breed-success',
);

export const setVisibleBottomSheetAnimalBreed = createAction<{
  visible_animal_breed_select: number;
}>('product/set-visible-bottom-sheet-animal-breed');

export const setAnimalBreed = createAction<{animal_breed: string}>(
  'product/set-animal-breed',
);

export const topSearchProductRequest = createAction<string>(
  'product/top-search-product-request',
);

export const topSearchProductSuccess = createAction<Array<IProduct>>(
  'product/top-search-product-success',
);

export const readProductRequest = createAction('product/read-product-request');

export const readProductSuccess = createAction<Array<IProduct>>(
  'product/read-product-success',
);

export const readFilterProduct = createAction<Array<IProduct>>(
  'product/read-filter-product',
);

export const searchProduct = createAction<string>('product/search-product');

export const addItemSelectedFilter = createAction<string>(
  'product/add-item-seleted-filter',
);

export const getProductByIdRequest = createAction<number>(
  'product/get-product-by-id-request',
);

export const getProductByIdSuccess = createAction<IProduct>(
  'product/get-product-by-id-success',
);

export const setVisibleBottomSheetAnimal = createAction<number>(
  'product/set-visible-bottom-sheet-animal',
);

export const setAnimal = createAction<string>('product/set-animal');

export const readAnimalRequest = createAction('product/read_animal_request');

export const readAnimalSuccess = createAction<any>(
  'product/read_animal_success',
);

export const readBreedRequest = createAction<string>(
  'product/read_breed_request',
);

export const readBreedSuccess = createAction<any>('product/read_breed_success');

export const addFile = createAction<any>('product/add-file');

export const removeFile = createAction<number>('product/remove-file');

export const changerStepProduct = createAction<number>(
  'product/changer-step-product',
);

export const readAgeCategoriesRequest = createAction(
  'product/age_categories_request',
);

export const readAgeCategoriesSuccess = createAction<any>(
  'product/age_categories_success',
);

export const setVisibleBottomSheetAgeCategory = createAction<number>(
  'product/set-visible-bottom-sheet-age-category',
);

export const setAgeCategory = createAction<string>('product/set-age-category');

export const readSellTypeRequest = createAction(
  'product/read-sell-type-request',
);

export const readSellTypeSuccess = createAction<any>(
  'product/read-sell-type-success',
);

export const setVisibleBottomSheetSellType = createAction<number>(
  'product/set-visible-bottom-sheet-sell-type',
);

export const setSellType = createAction<string>('product/set-sell-type');

export const setProductInfo = createAction<any>('product/set-product-info');

export const createProductRequest = createAction<any>(
  'product/create-product-request',
);

export const createProductSuccess = createAction<IProduct>(
  'product/create-product-success',
);

export const readClassificationRequest = createAction<any>(
  'product/read-classification-request',
);

export const readClassificationSuccess = createAction<any>(
  'product/read-classification-success',
);

export const setVisibleBottomSheetClassification = createAction<number>(
  'product/set-visible-bottom-sheet-classification',
);

export const setClassification = createAction<string>(
  'product/set-classification',
);

export const renewLimitProductRequest = createAction<any>(
  'product/renew-limit-product-request',
);

export const deleteProductRequest = createAction<any>(
  'product/delete-product-request',
);

export const deleteProductSuccess = createAction<any>(
  'product/delete-product-success',
);

export const deleteFileProductRequest = createAction<any>(
  'product/delete-file-product-request',
);

export const deleteFileProductSuccess = createAction<any>(
  'product/delete-file-product-success',
);

export const updateProductRequest = createAction<any>(
  'product/update-product-request',
);

export const updateProductSuccess = createAction(
  'product/update-product-success',
);

export const updateProductBasicInformationRequest = createAction<any>(
  'product/update-product-basic-information-request',
);

export const updateProductBasicInformationSuccess = createAction<any>(
  'product/update-product-basic-information-success',
);

export const updateProductDocumentRequest = createAction<any>(
  'product/update-document-product-request',
);

export const updateProductLocationRequest = createAction<any>(
  'product/update-product-location-request',
);
