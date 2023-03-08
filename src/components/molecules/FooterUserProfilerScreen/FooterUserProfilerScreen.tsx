import {View} from 'react-native';
import {Text, IconComponent} from '../../';

import {maskedPhoneNumber} from '../../../utils';
import {Separator} from '../../atoms';

import {Container} from './style';

interface IFooterUserProfilerScreen {
  phone?: string;
  avaliationRate?: string;
}

export const FooterUserProfilerScreen = ({
  phone,
  avaliationRate,
}: IFooterUserProfilerScreen) => {
  return (
    <Container>
      <View style={{width: '50%'}}>
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          Telefone
        </Text>
        <Separator height={8} />
        <Text typography="h4" colorFamily="gray" colorVariant="_02">
          {maskedPhoneNumber(phone)}
        </Text>
      </View>
      <View style={{width: '50%'}}>
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          Avaliações
        </Text>
        <Separator height={8} />
        <View style={{flexDirection: 'row'}}>
          <Text typography="h4" colorFamily="gray" colorVariant="_02">
            {avaliationRate}
          </Text>
          <Separator height={10} />
          <IconComponent icon="star-icon" />
        </View>
      </View>
    </Container>
  );
};
