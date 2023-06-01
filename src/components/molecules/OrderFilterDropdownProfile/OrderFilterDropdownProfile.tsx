import {Dropdown} from '../..';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {filterProductsByAnimalType} from '../../../store/reducer/auth/actions';
import {readFilterProduct} from '../../../store/reducer/product/actions';
import {sortFunction, sortFunctionReverse} from '../../../utils/filters';

const optionsOrder = [
  {text: 'Mais recente', value: 'recente'},
  {text: 'Mais antigo', value: 'antigo'},
];

export const OrderFilterDropdownProfile = () => {
  const {
    user: {products},
    filterProducts,
  } = useAppSelector(state => state.auth);

  let isFilterProductExist = filterProducts.length >= 1;

  let product: any = isFilterProductExist ? filterProducts : products;

  const dispatch = useAppDispatch();

  const handleSelect = (event: string) => {
    let olderProducts = [...product].sort(sortFunction);
    let mostRecentProducts = [...product].sort(sortFunctionReverse);

    if (event === 'recente') {
      dispatch(filterProductsByAnimalType(mostRecentProducts));
    } else {
      dispatch(filterProductsByAnimalType(olderProducts));
    }
  };

  return (
    <Dropdown
      options={optionsOrder}
      setOption={(option: string) => handleSelect(option)}
    />
  );
};
