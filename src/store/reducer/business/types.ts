export interface IProduct {}

export interface IBusiness {
  products: Array<IProduct>;
  filter: string;
}
