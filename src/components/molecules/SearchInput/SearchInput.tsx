import {TouchableOpacity, View, TextInput} from 'react-native';
import {inputSearch} from './style';

import {IconComponent} from '../../';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {changerIndexBottomSheetRecentSearch} from '../../../store/reducer/user/actions';
import {
  readFilterProduct,
  searchProduct,
} from '../../../store/reducer/product/actions';
import {filterByAllAttributes} from '../../../utils/filters';

import {Keyboard} from 'react-native';

export const SearchInput = ({setFocus}: any) => {
  const {produtcs, filterProdutcs} = useAppSelector(state => state.product);
  const dispatch = useAppDispatch();

  const [searchTerm, setSearchTerm] = useState('');

  let isEmptyFilterProducts = filterProdutcs.length < 1;

  const searchByTerm = () => {
    if (searchTerm !== '') {
      dispatch(searchProduct(searchTerm));
      let filterItems = filterByAllAttributes(produtcs, searchTerm);
      dispatch(readFilterProduct(filterItems));
    } else {
      dispatch(searchProduct(''));
      dispatch(readFilterProduct([]));
    }
    setSearchTerm('');
  };

  const handleKeyDown = (e: any) => {
    if (e.nativeEvent.key == 'Enter') {
      searchByTerm();
    }
  };

  return (
    <View style={inputSearch.container}>
      <TextInput
        style={inputSearch.input}
        onFocus={() => setFocus(true)}
        value={searchTerm}
        onChangeText={(value: string) => setSearchTerm(value)}
        onKeyPress={handleKeyDown}
        keyboardType="default"
        returnKeyType="done"
        onSubmitEditing={Keyboard.dismiss}
      />

      {isEmptyFilterProducts || !!searchTerm.length ? (
        <TouchableOpacity onPress={() => searchByTerm()}>
          <IconComponent icon="search-icon" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() =>
            dispatch(changerIndexBottomSheetRecentSearch({index: 1}))
          }>
          <IconComponent icon="filter-icon" />
        </TouchableOpacity>
      )}
    </View>
  );
};
