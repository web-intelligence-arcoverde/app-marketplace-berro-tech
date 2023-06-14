import {TouchableOpacity} from 'react-native';
import {InputProps} from '@rneui/base';
import {Input as Default} from '@rneui/base';

import {Typography} from '../../../common';
import {Controller} from 'react-hook-form';
import {IconComponent} from '../..';

const handleDate = (value: string) => {
  const selectedDate = new Date(value);

  return selectedDate.toString();
};

interface MaskType {
  [key: string]: {
    setMask: (value: string) => string;
    handleKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  };
}

const maskTypes: MaskType = {
  price: {
    setMask: moneyMask,
  },
  weight: {
    setMask: weightMask,
  },
  date: {
    setMask: handleDate,
  },
};

const getMaskedValue = (value: string, maskType?: string) => {
  if (!maskType) {
    return value;
  }

  const mask = maskTypes[maskType];

  if (!mask) {
    return value;
  }

  return mask.setMask(value);
};

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
  maskType?: 'weight' | 'price' | 'date';
}

import React, {useState} from 'react';

import {InputStyle} from './style';
import {moneyMask} from '../../../utils/moneyMask';
import {weightMask} from '../../../utils/weightMask';

export const MaskInput = ({
  label,
  placeholder,
  password = false,
  name,
  control,
  errors,
  rightIcon,
  leftIcon,
  variant = 'contained',
  maskType = 'price',
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

  return (
    <Controller
      control={control}
      render={({field: {onChange, value}}) => {
        return (
          <Default
            label={label}
            placeholder={placeholder}
            containerStyle={containerStyle}
            inputStyle={inputStyle}
            errorStyle={errorStyle}
            inputContainerStyle={inputContainerStyle}
            labelStyle={[typography, labelStyle]}
            errorMessage={errors}
            onChangeText={(text: string) =>
              onChange(getMaskedValue(text, maskType))
            }
            value={getMaskedValue(value, maskType)}
            autoCapitalize="none"
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
              leftShowIcon && (
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
