import TextInputMask, {TextInputMaskProps} from 'react-native-text-input-mask';
import {Input} from '@rneui/themed';

const maskPhone = '([00]) [0] [0000]-[0000]';

interface IInput extends TextInputMaskProps {
  mask: string;
  control: any;
  name: string;
  label?: string;
  placeholder?: string;
  errors?: string;
  variant?: string;
}

import {Controller} from 'react-hook-form';

import React from 'react';
import {Typography} from '../../../common';
import {InputStyle} from './style';

export const CustomInput = ({
  label,
  placeholder,
  control,
  name,
  errors,
  variant = 'contained',
  ...rest
}: IInput) => {
  const typography = Typography['input'];

  const {
    containerStyle,
    inputStyle,
    errorStyle,
    inputContainerStyle,
    labelStyle,
  } = InputStyle[variant];

  const Example = ({...rest}) => (
    <TextInputMask
      {...rest}
      mask={maskPhone}
      style={[inputStyle, {width: '100%'}]}
    />
  );

  return (
    <Controller
      control={control}
      render={({field}) => {
        return (
          <Input
            InputComponent={Example}
            {...field}
            label={label}
            placeholder={placeholder}
            containerStyle={containerStyle}
            errorStyle={errorStyle}
            inputContainerStyle={inputContainerStyle}
            labelStyle={[typography, labelStyle]}
            errorMessage={errors}
          />
        );
      }}
      name={name}
    />
  );
};
