import {TouchableOpacity, View, TextInput, Keyboard} from 'react-native';
import {inputSearch} from './style';

import {IconComponent} from '../../';
import React, {useEffect, useState} from 'react';
import {
  useAppDispatch,
  useAppSelector,
  useNavigationHook,
} from '../../../hooks';
import {changerIndexBottomSheetRecentSearch} from '../../../store/reducer/user/actions';
import {
  readFilterProduct,
  searchProduct,
} from '../../../store/reducer/product/actions';
import {filterByAllAttributes} from '../../../utils/filters';

import {useRoute} from '@react-navigation/native';

export const SearchInput = ({setFocus, focus}: any) => {
  const {produtcs} = useAppSelector(state => state.product);
  const dispatch = useAppDispatch();

  const [searchTerm, setSearchTerm] = useState('');

  const {goToRouter} = useNavigationHook();

  const {name} = useRoute();

  let isNotBusinessScreen = name !== 'Negócios';

  const changeRouter = () => {
    if (isNotBusinessScreen) {
      goToRouter('Negócios');
    }
  };

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
    changeRouter();
    setFocus(false);
  };

  const handleKeyDown = (e: any) => {
    if (e.nativeEvent.key == 'Enter') {
      searchByTerm();
    }
  };

  useEffect(() => {
    if (searchTerm.length >= 1) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  }, [searchTerm]);

  return (
    <View style={inputSearch.container}>
      <TextInput
        style={inputSearch.input}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={searchTerm}
        onChangeText={(value: string) => setSearchTerm(value)}
        onKeyPress={handleKeyDown}
        keyboardType="default"
        returnKeyType="done"
      />

      {focus || isNotBusinessScreen ? (
        <TouchableOpacity onPress={() => searchByTerm()}>
          <IconComponent icon="search-icon" />
        </TouchableOpacity>
      ) : (
        <>
          {!isNotBusinessScreen && (
            <TouchableOpacity
              onPress={() =>
                dispatch(changerIndexBottomSheetRecentSearch({index: 1}))
              }>
              <IconComponent icon="filter-icon" />
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};
