import {Dropdown} from '../../';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {readFilterProduct} from '../../../store/reducer/product/actions';
import {sortFunction, sortFunctionReverse} from '../../../utils/filters';

const optionsOrder = [
  {text: 'Mais recente', value: 'recente'},
  {text: 'Mais antigo', value: 'antigo'},
];

export const OrderFilterDropdown = () => {
  const {produtcs, filterProdutcs, search} = useAppSelector(
    state => state.product,
  );

  let isSearchExist = search.length >= 1;
  let isFilterProductExist = filterProdutcs.length >= 1;

  let productsSearchListExist = isSearchExist && isFilterProductExist;

  let product: any = isFilterProductExist ? filterProdutcs : produtcs;

  console.log(product);

  const dispatch = useAppDispatch();

  const handleSelect = (event: string) => {
    let olderProducts = [...product].sort(sortFunction);
    let mostRecentProducts = [...product].sort(sortFunctionReverse);

    if (event === 'recente') {
      dispatch(readFilterProduct(mostRecentProducts));
    } else {
      dispatch(readFilterProduct(olderProducts));
    }
  };

  return (
    <Dropdown
      options={optionsOrder}
      setOption={(option: string) => handleSelect(option)}
    />
  );
};
