import React from 'react';
import {Text as DefaultText} from '@rneui/base';
import {COLORS} from '../../../common';
import {Typography} from '../../../common/';

interface IText {
  typography?: string;
  children?: any;
  colorFamily?: string;
  colorVariant?: string;
  textAlign?: string;
  numberOfLines?: number;
}

export const Text = ({
  typography = 'h1',
  colorFamily = 'dark',
  colorVariant = '01',
  textAlign = 'auto',
  children,
  numberOfLines,
}: IText) => {
  const typographyText = Typography[typography];

  const color = COLORS[colorFamily][colorVariant];

  return (
    <DefaultText
      style={{...typographyText, color, textAlign}}
      numberOfLines={numberOfLines}>
      {children}
    </DefaultText>
  );
};
