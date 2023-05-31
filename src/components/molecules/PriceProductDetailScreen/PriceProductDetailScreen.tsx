import {View} from 'react-native';
import {Text} from '../../';
import {useFormatMoney} from '../../../utils/formatMoney';

import {Container} from './style';

interface IPriceProductDetailScreen {
  business?: any;
}

export const PriceProductDetailScreen = ({
  business,
}: IPriceProductDetailScreen) => {
  return (
    <Container>
      <View>
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          Preço
        </Text>
        <View style={{display: 'flex', flexDirection: 'row', gap: 6}}>
          <Text typography="h3" colorFamily="gray" colorVariant="_02">
            {useFormatMoney(business.price)}
          </Text>
          <Text typography="h3" colorFamily="brand_dark" colorVariant="_04">
            cada
          </Text>
        </View>
      </View>
      <View>
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          ou {business.installments} x
          {useFormatMoney(business.price / business.installments)}
        </Text>
      </View>
    </Container>
  );
};
