import {Input as Default} from '@rneui/themed';
import {Typography} from '../../../common';

import {scale} from '../../../utils';

import {Controller} from 'react-hook-form';

import {IconComponent} from '../../';

import {TouchableOpacity} from 'react-native';

interface IInput {
  label?: string;
  placeholder?: string;
  password?: boolean;
  name: string;
  control?: any;
  errors?: string;
  rightIcon?: boolean;
  leftIcon?: boolean;
}

import EStyleSheet from 'react-native-extended-stylesheet';
import {useState} from 'react';

export const InputStyle = EStyleSheet.create({
  containerStyle: {
    borderColor: '#F2F1F7',
    borderWidth: 1,
    borderRadius: scale(6),
    backgroundColor: '#FAFAFC',
    margin: 0,
    padding: 0,
    paddingTop: scale(16),
    paddingHorizontal: scale(16),
  },

  inputContainerStyle: {
    borderBottomColor: '#FAFAFC',
    margin: 0,
    padding: 0,
    height: scale(22),
  },

  inputStyle: {
    borderWidth: 0,
    color: '#9C99AD',
    fontSize: scale(14),
    minHeight: scale(22),
    margin: 0,
    padding: 0,
  },

  errorStyle: {margin: 0, padding: 0, height: scale(22)},

  leftIconContainerStyle: {padding: 0, minHeight: scale(22)},
  rightIconContainerStyle: {padding: 0, minHeight: scale(22)},
});

export const Input = ({
  label,
  placeholder,
  password = false,
  name,
  control,
  errors,
  rightIcon,
  leftIcon,
}: IInput) => {
  const typography = Typography['input'];

  const rightShowIcon = rightIcon && password;

  const leftShowIcon = leftIcon && password;

  const [showPassword, setShowPassword] = useState(password);

  const {
    containerStyle,
    inputStyle,
    errorStyle,
    inputContainerStyle,
    leftIconContainerStyle,
    rightIconContainerStyle,
  } = InputStyle;

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
          errorMessage={errors}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          keyboardType="email-address"
          autoCapitalize="none"
          secureTextEntry={showPassword}
          autoCorrect={false}
          leftIconContainerStyle={leftIconContainerStyle}
          rightIconContainerStyle={rightIconContainerStyle}
          rightIcon={
            rightShowIcon && (
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <IconComponent
                  icon={showPassword ? 'arrow-left' : 'arrow-left'}
                />
              </TouchableOpacity>
            )
          }
          leftIcon={
            leftShowIcon && (
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <IconComponent
                  icon={showPassword ? 'arrow-left' : 'arrow-left'}
                />
              </TouchableOpacity>
            )
          }
        />
      )}
      name={name}
    />
  );
};
