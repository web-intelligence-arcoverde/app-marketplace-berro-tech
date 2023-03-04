import {Text} from '../../';

import {TouchableOpacity} from 'react-native';

interface IButtonText {
  children: any;
  alignItems?: string;
  onPress: () => void;
}

export const ButtonText = ({children, alignItems, onPress}: IButtonText) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      //@ts-ignore
      style={{
        alignItems,
      }}>
      <Text typography="h5" colorFamily="sub_brand" colorVariant="_02">
        {children}
      </Text>
    </TouchableOpacity>
  );
};
