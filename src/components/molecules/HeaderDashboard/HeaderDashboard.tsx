import {getStatusBarHeight} from '../../../utils';

import {Text, View} from 'react-native';

import {Separator, SearchInput, HeaderVariantProfileEdit} from '../..';

import {style} from './style';
import {useRoute} from '@react-navigation/native';
import {useState} from 'react';

export const HeaderDashboard = () => {
  const {name} = useRoute();

  console.log(name);

  const isHome = name == 'Home';

  console.log(isHome, 'name');

  const [focus, setFocus] = useState(false);

  return (
    <View style={style.container}>
      <Separator height={getStatusBarHeight()} />

      <View style={style.content}>
        <HeaderVariantProfileEdit focus={focus} setFocus={setFocus} />
        {isHome && <SearchInput setFocus={setFocus} />}
      </View>
    </View>
  );
};
