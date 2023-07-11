import React from 'react';

import {Dropdown} from '../../';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {readFilterProduct} from '../../../store/reducer/product/actions';
import {sortFunction, sortFunctionReverse} from '../../../utils/filters';

const optionsOrder = [
  {text: 'Mais recente', value: 'recente'},
  {text: 'Mais antigo', value: 'antigo'},
];

export const OrderFilterDropdown = () => {
  const {produtcs, filterProdutcs} = useAppSelector(state => state.product);

  let isFilterProductExist = filterProdutcs.length >= 1;

  let product: any = isFilterProductExist ? filterProdutcs : produtcs;

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
