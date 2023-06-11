export interface IStateProduct {
  visible_animal_type_select: number;
  animal_type: string;
  types_animals: string[];

  visible_animal_sex_select: number;
  animal_sex: string;

  visible_animal_breed_select: number;
  animal_breed: string;

  businessHighlightProduct: Array<IProduct>;
  loadingBusinessHighlightProduct: boolean;

  topSearchProduct: Array<IProduct>;
  loadingTopSearchProduct: boolean;

  produtcs: Array<IProduct>;
  filterProdutcs: Array<IProduct>;

  loadingProducts: boolean;

  search: string;

  itemsSelectedFilter: string[];

  product: any;
  loadingProduct: boolean;

  animals: any[];
  selectAnimal: string;
  visibleAnimal: number;

  breeds: any[];

  age_categories?: any[];
  setAgeCategory: string;
  visibleAgeCategory: number;

  files: any[];

  stepProduct: number;
}

export interface IProduct {
  documents?: any[];
}
