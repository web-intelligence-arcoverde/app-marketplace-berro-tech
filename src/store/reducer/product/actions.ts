import {createAction} from '@reduxjs/toolkit';
import {IStateProduct, IProduct} from './types';

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
