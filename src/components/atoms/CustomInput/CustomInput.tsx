import TextInputMask, {TextInputMaskProps} from 'react-native-text-input-mask';
import {Input} from '@rneui/themed';
import {Controller} from 'react-hook-form';

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

import {Typography} from '../../../common';
import {InputStyle} from './style';

export const CustomInput = ({
  label,
  placeholder,
  control,
  name,
  errors,
  variant = 'contained',
}: IInput) => {
  const typography = Typography['input'];

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
      render={({field}) => {
        return (
          <Input
            //@ts-ignore
            mask={maskPhone}
            InputComponent={TextInputMask}
            {...field}
            label={label}
            placeholder={placeholder}
            style={[inputStyle, {width: '100%'}]}
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
