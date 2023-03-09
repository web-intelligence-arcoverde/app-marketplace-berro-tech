import {TouchableOpacity, View, TextInput} from 'react-native';
import {inputSearch} from './style';

import {IconComponent} from '../../';

export const SearchInput = () => {
  return (
    <View style={inputSearch.container}>
      <TouchableOpacity>
        <IconComponent icon="search-icon" />
      </TouchableOpacity>
      <TextInput style={inputSearch.input} />
      <TouchableOpacity>
        <IconComponent icon="filter-icon" />
      </TouchableOpacity>
    </View>
  );
};
