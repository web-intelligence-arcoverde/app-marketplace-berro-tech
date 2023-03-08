import EStyleSheet from 'react-native-extended-stylesheet';
import {getStatusBarHeight, scale} from '../../../utils';

import {COLORS} from '../../../common';
import {IMAGES} from '../../../assets';

import {View, Image, TextInput, TouchableOpacity} from 'react-native';

import {Separator, IconComponent, Button} from '../..';

const style = EStyleSheet.create({
  container: {
    backgroundColor: COLORS.brand_light._01,
  },

  content: {
    flexDirection: 'row',
    height: scale(96),
    paddingHorizontal: scale(20),
    paddingTop: scale(22),
    paddingBottom: scale(12),
    alignItems: 'center',
  },
});

const inputSearch = EStyleSheet.create({
  container: {
    backgroundColor: COLORS.light._05,
    width: '80%',
    padding: scale(16),
    flexDirection: 'row',
    height: scale(52),
    borderRadius: scale(6),
    marginLeft: scale(20),
  },

  input: {
    width: '80%',
    height: '100%',
    marginLeft: scale(8),
  },
});

import {useRoute} from '@react-navigation/native';

export const HeaderDashboard = () => {
  const {name} = useRoute();

  const isProfile = name === 'Perfil';

  const product = [];

  const isExistProducts = product.length > 1;

  const titleButtonProfileAddNewProduct = !isExistProducts
    ? 'Adicionar meu primeiro negócio'
    : 'Adicionar novo negócio';

  return (
    <View style={style.container}>
      <Separator height={getStatusBarHeight()} />

      <View>
        <View style={style.content}>
          <Image source={IMAGES.LogoHeader} />
          {isProfile ? (
            <Button
              title={titleButtonProfileAddNewProduct}
              variant="containedThirdy"
              onPress={() => {}}
            />
          ) : (
            <SearchInput />
          )}
        </View>
      </View>
    </View>
  );
};

const SearchInput = () => {
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
