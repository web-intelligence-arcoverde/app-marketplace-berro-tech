import {View} from 'react-native';
import {Text, IconComponent} from '../../';

import {maskedPhoneNumber, setCellphoneMask} from '../../../utils';
import {Separator} from '../../atoms';

import {Container} from './style';

interface IFooterUserProfilerScreen {
  phone?: string;
  avaliationRate?: string;
}

export const FooterUserProfilerScreen = ({
  phone = '',
}: IFooterUserProfilerScreen) => {
  return (
    <Container>
      <View style={{width: '50%'}}>
        <Text typography="h4" colorFamily="gray" colorVariant="_04">
          Telefone
        </Text>
        <Separator height={8} />
        <Text typography="h4" colorFamily="gray" colorVariant="_02">
          {setCellphoneMask(phone)}
        </Text>
      </View>
    </Container>
  );
};
