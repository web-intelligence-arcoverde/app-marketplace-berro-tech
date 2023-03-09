import {useRoute} from '@react-navigation/native';

import {View} from 'react-native';
import {SearchInput} from '../..';

export const HeaderVariantProfile = () => {
  const {name} = useRoute();

  const isProfile = name === 'Perfil';

  return <View>{!isProfile && <SearchInput />}</View>;
};
