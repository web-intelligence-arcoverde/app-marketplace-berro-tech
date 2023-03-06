import {Input as Default} from '@rneui/themed';
import {Typography} from '../../../common';

import {scale} from '../../../utils';

interface IInput {
  label?: string;
  placeholder?: string;
  password?: boolean;
}

import EStyleSheet from 'react-native-extended-stylesheet';

export const InputStyle = EStyleSheet.create({
  containerStyle: {
    borderColor: '#F2F1F7',
    borderWidth: 1,
    borderRadius: scale(6),
    backgroundColor: '#FAFAFC',
    height: scale(77),
  },
  inputStyle: {
    borderWidth: 0,
    color: '#9C99AD',
    fontSize: scale(14),
    minHeight: scale(22),
  },

  errorStyle: {margin: 0, marginBottom: 0},
  inputContainerStyle: {borderBottomColor: '#FAFAFC'},
});

export const Input = ({label, placeholder, password = false}: IInput) => {
  const typography = Typography['input'];

  console.log(scale(10));

  const {containerStyle, inputStyle, errorStyle, inputContainerStyle} =
    InputStyle;

  return (
    <Default
      label={label}
      placeholder={placeholder}
      containerStyle={containerStyle}
      inputStyle={inputStyle}
      errorStyle={errorStyle}
      inputContainerStyle={inputContainerStyle}
      labelStyle={typography}
      keyboardType="email-address"
      autoCapitalize="none"
      secureTextEntry={password}
      autoCorrect={false}
    />
  );
};
