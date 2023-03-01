import {View} from 'react-native';

import {Separator, Text} from '../..';
import {ICONS} from '../../../assets';

const Icon = ICONS['hands'];

interface IHeaderDescriptionIntro {
  title: string;
  description: string;
}

export const HeaderDescriptionIntro = ({
  title,
  description,
}: IHeaderDescriptionIntro) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 20,
        paddingVertical: 32,
      }}>
      <View>
        <Text typography="h2" colorFamily="dark" colorVariant="_04">
          {title}
        </Text>
        <Separator height={4} />
        <Text typography="h3" colorFamily="sub_brand" colorVariant="_02">
          {description}
        </Text>
      </View>
      <Icon />
    </View>
  );
};
