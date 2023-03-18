import {TouchableOpacity, View, TextInput} from 'react-native';
import {inputSearch} from './style';

import {IconComponent} from '../../';
import React from 'react';
import {useAppDispatch} from '../../../hooks';
import {changerIndexBottomSheetRecentSearch} from '../../../store/reducer/user/actions';

export const SearchInput = ({setFocus}) => {
  const dispatch = useAppDispatch();

  return (
    <View style={inputSearch.container}>
      <TouchableOpacity>
        <IconComponent icon="search-icon" />
      </TouchableOpacity>
      <TextInput style={inputSearch.input} onFocus={() => setFocus(true)} />
      <TouchableOpacity
        onPress={() =>
          dispatch(changerIndexBottomSheetRecentSearch({index: 1}))
        }>
        <IconComponent icon="filter-icon" />
      </TouchableOpacity>
    </View>
  );
};
