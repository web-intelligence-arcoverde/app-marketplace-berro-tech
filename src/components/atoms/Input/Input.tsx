import {Input as Default} from '@rneui/themed';
import {Typography} from '../../../common';

import {Controller} from 'react-hook-form';

import {IconComponent} from '../../';

import {TouchableOpacity} from 'react-native';

import {InputProps} from '@rneui/base';

interface IInput extends InputProps {
  label?: string;
  placeholder?: string;
  password?: boolean;
  name: string;
  control?: any;
  errors?: string;
  rightIcon?: boolean;
  leftIcon?: boolean;
  variant?: string;
}

import {useState} from 'react';

import {InputStyle} from './style';

export const Input = ({
  label,
  placeholder,
  password = false,
  name,
  control,
  errors,
  rightIcon,
  leftIcon,
  variant = 'contained',
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
    labelStyle,
  } = InputStyle[variant];

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
          labelStyle={[typography, labelStyle]}
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
