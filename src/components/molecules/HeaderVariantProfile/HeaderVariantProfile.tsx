import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import {useEffect} from 'react';

import {View} from 'react-native';
import {Button} from '../..';
import {
  useAppDispatch,
  useAppSelector,
  useNavigationHook,
} from '../../../hooks';
import {readInformationUserLoggedRequest} from '../../../store/reducer/auth/actions';

export const HeaderVariantProfile = () => {
  const {goToRouter} = useNavigationHook();
  const dispatch = useAppDispatch();

  const {products} = useAppSelector(state => state.auth.user);

  useEffect(() => {
    dispatch(readInformationUserLoggedRequest());
  }, []);

  const isExistProducts = products.length >= 1;

  const {name} = useRoute();

  const isProfile = name === 'Perfil';

  const titleButtonProfileAddNewProduct = !isExistProducts
    ? 'Adicionar meu primeiro negócio'
    : 'Adicionar novo negócio';

  return (
    <View>
      {isProfile && (
        <Button
          title={titleButtonProfileAddNewProduct}
          variant="containedNotIcon"
          onPress={() => goToRouter('AddProductScreen')}
        />
      )}
    </View>
  );
};
