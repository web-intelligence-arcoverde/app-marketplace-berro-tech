import {View} from 'react-native';
import {COLORS} from '../../../common';
import {scale} from '../../../utils';

import {IconComponent, Separator, Text} from '../../';

interface IRegionInformationCard {
  backgroundIcon: string;
  icon: string;
  title: string;
  description: string;
}

export const RegionInformationCard = ({
  backgroundIcon,
  icon,
  title,
  description,
}: IRegionInformationCard) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.light._04,
        paddingHorizontal: scale(20),
        paddingVertical: scale(28),
        width: scale(300),
        borderWidth: 1,
        borderColor: COLORS.light._02,
      }}>
      <View
        style={{
          paddingVertical: scale(12),
          paddingHorizontal: scale(12),
          backgroundColor: backgroundIcon,
          width: scale(48),
          borderRadius: scale(6),
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <IconComponent icon={icon} />
      </View>
      <Separator height={56} />
      <Text typography="h3" colorFamily="dark" colorVariant="_04">
        {title}
      </Text>
      <Separator height={4} />
      <Text typography="h4" colorFamily="dark" colorVariant="_04">
        {description}
      </Text>
    </View>
  );
};
