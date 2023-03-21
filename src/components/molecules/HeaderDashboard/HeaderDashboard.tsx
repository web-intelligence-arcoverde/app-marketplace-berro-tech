import {getStatusBarHeight} from '../../../utils';

import {View} from 'react-native';

import {Separator, SearchInput, HeaderVariantProfileEdit} from '../..';

import {style} from './style';
import {useRoute} from '@react-navigation/native';
import {useState} from 'react';

export const HeaderDashboard = () => {
  const {name} = useRoute();

  const isHome = name == 'Home' || name == 'Negócios';

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
