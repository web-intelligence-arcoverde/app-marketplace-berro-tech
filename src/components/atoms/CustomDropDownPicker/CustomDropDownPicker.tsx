import React, {useEffect, useState} from 'react';

import {IconComponent, ContentDropDownPicker} from '../../';

import {InputStyle} from './style';

import {TouchableOpacity, View} from 'react-native';

interface ICustomDropDownPicker {
  onPress: () => void;
  value: string;
  placeholder: string;
  label: string;
  errorMessage?: string;
}

export const CustomDropDownPicker = ({
  onPress,
  placeholder,
  value,
  label,
  errorMessage,
}: ICustomDropDownPicker) => {
  const {containerStyle, containerContent} = InputStyle.contained;

  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (value) {
      setFocus(false);
    } else {
      setFocus(true);
    }
  }, [value]);

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
