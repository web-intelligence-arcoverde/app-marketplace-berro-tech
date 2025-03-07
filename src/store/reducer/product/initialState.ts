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
  itemsSelectedFilter: [],

  product: {},
  loadingProduct: true,

  animals: [],
  selectAnimal: '',
  visibleAnimal: 0,

  files: [],

  stepProduct: 0,
  age_categories: [],
  setAgeCategory: '',
  visibleAgeCategory: 0,

  sellTypes: [],
  sellType: '',
  visibleSellType: 0,

  classifications: [],
  classification: '',
  visibleClassifications: 0,
  productInfo: {
    name: '',
    weight: '',
    birthday: '',
    description: '',
    quantity: '',
    price: '',
    installments: '',
    animal: '',
    breed: '',
    gender: '',
    date: '',
    sellType: '',
    classification: '',
  },
};
