import {Text} from '../../';

import {TouchableOpacity} from 'react-native';

interface IButtonText {
  children: any;
  alignItems?: string;
  onPress: () => void;
  typography?: string;
}

export const ButtonText = ({
  children,
  alignItems,
  onPress,
  typography = 'h5',
}: IButtonText) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      //@ts-ignore
      style={{
        alignItems,
      }}>
      <Text typography={typography} colorFamily="sub_brand" colorVariant="_02">
        {children}
      </Text>
    </TouchableOpacity>
  );
};
