import {createReducer} from '@reduxjs/toolkit';
import {initialState} from './initialState';

import {
  setVisibleBottomSheetAnimalType,
  setAnimalType,
  readTypesAnimalsSuccess,
} from './actions';

export const productReducer = createReducer(initialState, builder => {
  builder
    .addCase(setVisibleBottomSheetAnimalType, (state, action) => {
      state.visible_animal_type_select =
        action.payload.visible_animal_type_select;
    })
    .addCase(setAnimalType, (state, action) => {
      state.animal_type = action.payload.animal_type;
      state.visible_animal_type_select = 0;
    })
    .addCase(readTypesAnimalsSuccess, (state, action) => {
      state.types_animals = action.payload.animals_types;
    });
});
