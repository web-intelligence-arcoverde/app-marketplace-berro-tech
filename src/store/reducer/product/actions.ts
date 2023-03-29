import {createAction} from '@reduxjs/toolkit';
import {IStateProduct, IProduct} from './types';

export const setVisibleBottomSheetAnimalType = createAction<{
  visible_animal_type_select: number;
}>('product/set-visible-bottom-sheet-animal-type');

export const setAnimalType = createAction<{animal_type: string}>(
  'product/set-animal-type',
);

export const readTypesAnimalsRequest = createAction(
  'product/read-types-animals-request',
);

export const readTypesAnimalsSuccess = createAction<{animals_types: string[]}>(
  'product/read-types-animals-success',
);
