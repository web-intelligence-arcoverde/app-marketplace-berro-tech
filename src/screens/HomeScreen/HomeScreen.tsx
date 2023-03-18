import {
  KeyboardContainer,
  HeaderDashboard,
  Text,
  ProductItemCard,
} from '../../components';

import {View} from 'react-native';

import Swiper from 'react-native-swiper';

export const HomeScreen = () => {
  return (
    <KeyboardContainer>
      <HeaderDashboard />
      <View>
        <Text>Negócios em destaque</Text>
        <Swiper showsPagination={false} height={540}>
          <ProductItemCard />
          <ProductItemCard />
        </Swiper>
      </View>
      <View>
        <Text>
          Nós temos compradores e vendores ativos nas 5 regiões do Brasil
        </Text>
      </View>
    </KeyboardContainer>
  );
};
