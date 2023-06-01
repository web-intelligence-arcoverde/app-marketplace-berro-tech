import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';

import {View} from 'react-native';
import {Button} from '../..';
import {useNavigationHook} from '../../../hooks';

export const HeaderVariantProfile = () => {
  const {goToRouter} = useNavigationHook();

  const product = [];

  const isExistProducts = product.length > 1;

  const {name} = useRoute();

  const isProfile = name === 'Perfil';

  const titleButtonProfileAddNewProduct = !isExistProducts
    ? 'Adicionar meu primeiro negócio'
    : 'Adicionar novo negócio';

  const storeData = async (value: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_key', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('token');
      console.log(jsonValue);
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View>
      {isProfile && (
        <Button
          title={titleButtonProfileAddNewProduct}
          variant="containedThirdy"
          onPress={() => storeData('woefkwp-wefiwef')}
        />
      )}
      <Button
        title={titleButtonProfileAddNewProduct}
        variant="containedThirdy"
        onPress={() => getData()}
      />
    </View>
  );
};
