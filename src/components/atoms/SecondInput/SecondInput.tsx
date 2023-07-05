import {TouchableOpacity} from 'react-native';
import {InputProps} from '@rneui/base';
import {Input as Default} from '@rneui/themed';

import {Typography} from '../../../common';
import {Controller} from 'react-hook-form';
import {IconComponent} from '../..';

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
  mask?: string;
  leftIconName?: string;
}

import React, {useState} from 'react';

import {InputStyle} from './style';

export const SecondInput = ({
  label,
  placeholder,
  password = false,
  name,
  control,
  errors,
  rightIcon,
  leftIcon,
  leftIconName,
  variant = 'contained',
  keyboardType = 'email-address',
}: IInput) => {
  const typography = Typography.input;

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

  const [focus, setFocus] = useState(false);

  return (
    <Controller
      control={control}
      render={({field: {onChange, value}}) => {
        const styleLabel =
          focus || !!value ? {color: '#1B5DE0'} : {color: '#FAFAFC'};

        return (
          <Default
            label={label}
            containerStyle={containerStyle}
            onFocus={() => setFocus(true)}
            placeholder={placeholder}
            inputStyle={inputStyle}
            errorStyle={errorStyle}
            inputContainerStyle={inputContainerStyle}
            labelStyle={[typography, styleLabel]}
            errorMessage={errors}
            onBlur={() => setFocus(false)}
            onChangeText={onChange}
            placeholderTextColor={focus ? '#fff' : '#737185'}
            value={value}
            autoCapitalize="none"
            keyboardType={keyboardType}
            autoCorrect={false}
            secureTextEntry={showPassword}
            leftIconContainerStyle={leftIconContainerStyle}
            rightIconContainerStyle={rightIconContainerStyle}
            rightIcon={
              rightShowIcon && (
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}>
                  <IconComponent
                    icon={showPassword ? 'eye-close-icon' : 'eye-icon'}
                  />
                </TouchableOpacity>
              )
            }
            leftIcon={
              leftShowIcon &&
              leftIconName && (
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}>
                  <IconComponent
                    icon={showPassword ? 'arrow-left' : 'arrow-left'}
                  />
                </TouchableOpacity>
              )
            }
          />
        );
      }}
      name={name}
    />
  );
};
