import {createAction} from '@reduxjs/toolkit';
import {IStateProduct, IProduct} from './types';

export const setVisibleBottomSheetAnimalType = createAction<{
  visible_animal_type_select: number;
}>('product/set-visible-bottom-sheet-animal-type');

export const setAnimalType = createAction<{animal_type: string}>(
  'product/set-animal-type',
);

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
