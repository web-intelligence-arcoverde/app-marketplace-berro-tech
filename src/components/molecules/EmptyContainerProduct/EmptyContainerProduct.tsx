import {IconComponent, Text} from '../..';

import {View} from 'react-native';
import {Separator} from '../../atoms';

interface IEmptyContainerProduct {
  title?: string;
  description?: string;
}

export const EmptyContainerProduct = ({
  title = ' Publique seus animais para venda',
  description = 'Em apenas 3 etapas você pode começar a vender',
}: IEmptyContainerProduct) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height: '30%',
        backgroundColor: '#fff',
      }}>
      <IconComponent icon="logo-profile" />

      <Separator height={12} />

      <Text typography="h3" colorFamily="gray" colorVariant="_01">
        {title}
      </Text>

      <View style={{width: '60%'}}>
        <Text
          typography="h4"
          colorFamily="gray"
          colorVariant="_04"
          textAlign="center">
          {description}
        </Text>
      </View>
    </View>
  );
};
