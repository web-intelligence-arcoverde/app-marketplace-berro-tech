import {IStateProduct} from './types';

export const initialState: IStateProduct = {
  visible_animal_type_select: 0,
  animal_type: '',
  types_animals: [],

  visible_animal_sex_select: 0,
  animal_sex: '',

  visible_animal_breed_select: 0,
  animal_breed: '',
  breeds: [],

  businessHighlightProduct: [],
  loadingBusinessHighlightProduct: true,

  topSearchProduct: [],
  loadingTopSearchProduct: false,

  produtcs: [],
  filterProdutcs: [],
  loadingProducts: true,

  search: '',
};
