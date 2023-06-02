import {getStatusBarHeight} from '../../../utils';

import {View} from 'react-native';

import {Separator, SearchInput, HeaderVariantProfileEdit} from '../..';

import {style} from './style';
import {useRoute} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {useAppDispatch} from '../../../hooks';
import {readInformationUserLoggedRequest} from '../../../store/reducer/auth/actions';

export const HeaderDashboard = () => {
  const {name} = useRoute();

  const isHome = name == 'Home' || name == 'Negócios';

  const [focus, setFocus] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(readInformationUserLoggedRequest());
  }, []);

  return (
    <View style={style.container}>
      <Separator height={getStatusBarHeight()} />

      <View style={style.content}>
        <HeaderVariantProfileEdit focus={focus} setFocus={setFocus} />
        {isHome && <SearchInput setFocus={setFocus} focus={focus} />}
      </View>
    </View>
  );
};
