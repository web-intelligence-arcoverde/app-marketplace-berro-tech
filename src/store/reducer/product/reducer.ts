import {createReducer} from '@reduxjs/toolkit';
import {initialState} from './initialState';

import {
  setVisibleBottomSheetAnimalType,
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
  addItemSelectedFilter,
  getProductByIdRequest,
  getProductByIdSuccess,
  setVisibleBottomSheetAnimal,
  readAnimalSuccess,
  setAnimal,
  readBreedSuccess,
  addFile,
  removeFile,
  changerStepProduct,
  readAgeCategoriesSuccess,
  setVisibleBottomSheetAgeCategory,
  setAgeCategory,
  readSellTypeSuccess,
  setSellType,
  setVisibleBottomSheetSellType,
  setProductInfo,
  setClassification,
  readClassificationSuccess,
  setVisibleBottomSheetClassification,
} from './actions';

export const productReducer = createReducer(initialState, builder => {
  builder
    .addCase(setVisibleBottomSheetAnimalType, (state, action) => {
      state.visible_animal_type_select =
        action.payload.visible_animal_type_select;
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
    })
    .addCase(addItemSelectedFilter, (state, action) => {
      let isExistItemSelected = state.itemsSelectedFilter.includes(
        action.payload,
      );

      if (!isExistItemSelected) {
        state.itemsSelectedFilter = [
          ...state.itemsSelectedFilter,
          action.payload,
        ];
      } else {
        let newSeletedItemsFilter = state.itemsSelectedFilter.filter(
          (item: string) => item.toLowerCase() !== action.payload.toLowerCase(),
        );

        state.itemsSelectedFilter = newSeletedItemsFilter;
      }
    })
    .addCase(getProductByIdRequest, (state, action) => {
      state.loadingProduct = true;
    })
    .addCase(getProductByIdSuccess, (state, action) => {
      state.product = action.payload;
      state.loadingProduct = false;
    })
    .addCase(setVisibleBottomSheetAnimal, (state, action) => {
      state.visibleAnimal = action.payload;
    })
    .addCase(readAnimalSuccess, (state, action) => {
      state.animals = action.payload;
    })
    .addCase(setAnimal, (state, action) => {
      state.selectAnimal = action.payload;
    })
    .addCase(readBreedSuccess, (state, action) => {
      state.breeds = action.payload;
    })
    .addCase(addFile, (state, action) => {
      let olderFiles = state.files;
      olderFiles.push(action.payload);
      state.files = olderFiles;
    })
    .addCase(removeFile, (state, action) => {
      let newFile = state.files;

      let removeItem = newFile.filter((letter, index) => {
        return index !== action.payload;
      });

      state.files = removeItem;
    })
    .addCase(changerStepProduct, (state, action) => {
      state.stepProduct = action.payload;
    })
    .addCase(readAgeCategoriesSuccess, (state, action) => {
      state.age_categories = action.payload;
    })
    .addCase(setVisibleBottomSheetAgeCategory, (state, action) => {
      state.visibleAgeCategory = action.payload;
    })
    .addCase(setAgeCategory, (state, action) => {
      state.setAgeCategory = action.payload;
    })
    .addCase(readSellTypeSuccess, (state, action) => {
      state.sellTypes = action.payload;
    })
    .addCase(setSellType, (state, action) => {
      state.sellType = action.payload;
    })
    .addCase(setVisibleBottomSheetSellType, (state, action) => {
      state.visibleSellType = action.payload;
    })
    .addCase(setProductInfo, (state, action) => {
      state.productInfo = action.payload;
    })
    .addCase(setClassification, (state, action) => {
      state.classification = action.payload;
    })
    .addCase(readClassificationSuccess, (state, action) => {
      state.classifications = action.payload;
    })
    .addCase(setVisibleBottomSheetClassification, (state, action) => {
      state.visibleClassifications = action.payload;
      state.stepProduct = 0;
    });
});
