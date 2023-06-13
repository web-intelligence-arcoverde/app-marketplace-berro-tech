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

  sellTypes: any[];
  sellType: string;
  visibleSellType: number;

  files: any[];

  stepProduct: number;

  productInfo: ICreateProduct;

  classifications: any[];
  classification: string;
  visibleClassifications: number;
}

export interface ICreateProduct {
  name: string;
  weight: string;
  birthday: string;
  description: string;
  quantity: string;
  price: string;
  installments: string;
  animal: string;
  breed: string;
  gender: string;
  date: string;
  sellType: string;
  classification: string;
}

export interface IProduct {
  documents?: any[];
}
