import {mockImages} from '../assets/images/mock';

export interface CardProductProps {
  id: number;
  photo: string;
  breed: string;
  quantity: number;
  name: string;
  city: string;
  state: string;
  country: string;
  sex: string;
  age: string;
  rank: string;
}

export const BussinessHighlightProductMock: CardProductProps[] = [
  {
    id: 1,
    photo: mockImages.GadoOne,
    breed: 'senepol',
    quantity: 3,
    name: 'Garrote Senepol',
    city: 'Campina Grande',
    state: 'Paraiba',
    country: 'Brasil',
    sex: 'Macho',
    age: '3 anos',
    rank: 'Genética',
  },
  {
    id: 2,
    photo: mockImages.GadoTwo,
    breed: 'senepol',
    quantity: 3,
    name: 'Garrote Himalaia',
    city: 'Campina Grande',
    state: 'Paraiba',
    country: 'Brasil',
    sex: 'Macho',
    age: '3 anos',
    rank: 'Genética',
  },
  {
    id: 3,
    photo: mockImages.GadoThree,
    breed: 'senepol',
    quantity: 3,
    name: 'Garrote Pegasus',
    city: 'Campina Grande',
    state: 'Paraiba',
    country: 'Brasil',
    sex: 'Macho',
    age: '3 anos',
    rank: 'Genética',
  },
  {
    id: 4,
    photo: mockImages.GadoFour,
    breed: 'senepol',
    quantity: 3,
    name: 'Garrote Senepol',
    city: 'Campina Grande',
    state: 'Paraiba',
    country: 'Brasil',
    sex: 'Macho',
    age: '3 anos',
    rank: 'Genética',
  },
  {
    id: 5,
    photo: mockImages.GadoFive,
    breed: 'senepol',
    quantity: 3,
    name: 'Garrote Senepol',
    city: 'Campina Grande',
    state: 'Paraiba',
    country: 'Brasil',
    sex: 'Macho',
    age: '3 anos',
    rank: 'Genética',
  },
  {
    id: 6,
    photo: mockImages.GadoSix,
    breed: 'senepol',
    quantity: 3,
    name: 'Garrote Senepol',
    city: 'Campina Grande',
    state: 'Paraiba',
    country: 'Brasil',
    sex: 'Macho',
    age: '3 anos',
    rank: 'Genética',
  },
];
