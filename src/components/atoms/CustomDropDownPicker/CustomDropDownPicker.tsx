import {IconComponent, ContentDropDownPicker} from '../../';

import {InputStyle} from './style';

import {TouchableOpacity, View} from 'react-native';

interface ICustomDropDownPicker {
  onPress: () => void;
  focus: boolean;
  value: string;
  placeholder: string;
  label: string;
  errorMessage?: string;
}

export const CustomDropDownPicker = ({
  onPress,
  focus,
  placeholder,
  value,
  label,
  errorMessage,
}: ICustomDropDownPicker) => {
  const {containerStyle, containerContent} = InputStyle['contained'];

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={() => {
        onPress();
      }}>
      <View style={containerContent}>
        <ContentDropDownPicker
          focus={focus}
          placeholder={placeholder}
          value={value}
          label={label}
          errorMessage={errorMessage}
        />
        <IconComponent icon="arrow-down" />
      </View>
    </TouchableOpacity>
  );
};
