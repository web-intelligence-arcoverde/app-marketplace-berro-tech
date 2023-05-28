import {createReducer} from '@reduxjs/toolkit';
import {initialState} from './initialState';

import {
  setVisibleBottomSheetAnimalType,
  setAnimalType,
  readTypesAnimalsSuccess,
  setAnimalSex,
  setVisibleBottomSheetAnimalSex,
  readAnimalBreedSuccess,
  setAnimalBreed,
  setVisibleBottomSheetAnimalBreed,
  readBusinessHighlightProductSuccess,
  readBusinessHighlightProductRequest,
  topSearchProductSuccess,
  topSearchProductRequest,
  readProductRequest,
  readProductSuccess,
  readFilterProduct,
  searchProduct,
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
    })
    .addCase(setVisibleBottomSheetAnimalSex, (state, action) => {
      state.visible_animal_sex_select =
        action.payload.visible_animal_sex_select;
    })
    .addCase(setAnimalSex, (state, action) => {
      state.animal_sex = action.payload.animal_sex;
      state.visible_animal_sex_select = 0;
    })
    .addCase(readAnimalBreedSuccess, (state, action) => {
      state.breeds = action.payload.breeds;
    })
    .addCase(setAnimalBreed, (state, action) => {
      state.animal_breed = action.payload.animal_breed;
      state.visible_animal_breed_select = 0;
    })
    .addCase(setVisibleBottomSheetAnimalBreed, (state, action) => {
      state.visible_animal_breed_select =
        action.payload.visible_animal_breed_select;
    })
    .addCase(readBusinessHighlightProductSuccess, (state, action) => {
      state.businessHighlightProduct = action.payload;
      state.loadingBusinessHighlightProduct = false;
    })
    .addCase(readBusinessHighlightProductRequest, (state, action) => {
      state.loadingBusinessHighlightProduct = true;
    })
    .addCase(topSearchProductSuccess, (state, action) => {
      state.topSearchProduct = action.payload;
      state.loadingTopSearchProduct = false;
    })
    .addCase(topSearchProductRequest, (state, action) => {
      state.loadingTopSearchProduct = true;
    })
    .addCase(readProductRequest, (state, action) => {
      state.loadingProducts = true;
    })
    .addCase(readProductSuccess, (state, action) => {
      state.loadingProducts = false;
      state.produtcs = action.payload;
    })
    .addCase(readFilterProduct, (state, action) => {
      state.filterProdutcs = action.payload;
    })
    .addCase(searchProduct, (state, action) => {
      state.search = action.payload;
    });
});
