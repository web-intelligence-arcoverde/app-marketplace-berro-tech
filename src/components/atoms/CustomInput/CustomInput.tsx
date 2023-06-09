import {Input} from '@rneui/themed';
import {Controller} from 'react-hook-form';
import React from 'react';

import {TextInputMask, TextInputMaskOptionProp} from 'react-native-masked-text';

interface IInput extends TextInputMaskOptionProp {
  control: any;
  name: string;
  label?: string;
  placeholder?: string;
  errors?: string;
  variant?: string;
  type?: string;
  options?: any;
}

import {Typography} from '../../../common';
import {InputStyle} from './style';

export const CustomInput = ({
  label,
  placeholder,
  control,
  name,
  errors,
  variant = 'contained',
  type = 'cel-phone',
  options = {},
}: IInput) => {
  const typography = Typography.input;

  const {
    containerStyle,
    inputStyle,
    errorStyle,
    inputContainerStyle,
    labelStyle,
  } = InputStyle[variant];

  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, onBlur, value}}) => {
        return (
          <Input
            type={type}
            //@ts-ignore
            InputComponent={TextInputMask}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label={label}
            placeholder={placeholder}
            style={[inputStyle, {width: '100%'}]}
            containerStyle={containerStyle}
            errorStyle={errorStyle}
            inputContainerStyle={inputContainerStyle}
            labelStyle={[typography, labelStyle]}
            errorMessage={errors}
            options={options}
          />
        );
      }}
    />
  );
};
