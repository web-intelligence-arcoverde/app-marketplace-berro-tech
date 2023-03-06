import {Input as Default} from '@rneui/themed';
import {Typography} from '../../../common';

import {scale} from '../../../utils';

import {useForm, Controller} from 'react-hook-form';

interface IInput {
  label?: string;
  placeholder?: string;
  password?: boolean;
  name: string;
  control: any;
}

import EStyleSheet from 'react-native-extended-stylesheet';

export const InputStyle = EStyleSheet.create({
  containerStyle: {
    borderColor: '#F2F1F7',
    borderWidth: 1,
    borderRadius: scale(6),
    backgroundColor: '#FAFAFC',
    margin: 0,
    padding: 0,
    paddingHorizontal: 0,
  },
  inputStyle: {
    borderWidth: 0,
    color: '#9C99AD',
    fontSize: scale(14),
    minHeight: scale(22),
    margin: 0,
    padding: 0,
  },

  errorStyle: {margin: 0, padding: 0},
  inputContainerStyle: {borderBottomColor: '#FAFAFC', margin: 0, padding: 0},
});

export const Input = ({
  label,
  placeholder,
  password = false,
  name,
  control,
}: IInput) => {
  const typography = Typography['input'];

  const {containerStyle, inputStyle, errorStyle, inputContainerStyle} =
    InputStyle;

  return (
    <Controller
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <Default
          style={{padding: 0, margin: 0}}
          label={label}
          placeholder={placeholder}
          containerStyle={containerStyle}
          inputStyle={inputStyle}
          errorStyle={errorStyle}
          inputContainerStyle={inputContainerStyle}
          labelStyle={typography}
          errorMessage="event"
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          keyboardType="email-address"
          autoCapitalize="none"
          secureTextEntry={password}
          autoCorrect={false}
        />
      )}
      name={name}
    />
  );
};
