export interface IStateProduct {
  visible_animal_type_select: number;
  animal_type: string;
  types_animals: string[];

  visible_animal_sex_select: number;
  animal_sex: string;

  visible_animal_breed_select: number;
  animal_breed: string;
  breeds: string[];

  businessHighlightProduct: Array<IProduct>;
  loadingBusinessHighlightProduct: boolean;

  topSearchProduct: Array<IProduct>;
  loadingTopSearchProduct: boolean;

  produtcs: Array<IProduct>;
  loadingProducts: boolean;
}

export interface IProduct {
  documents?: any[];
}
