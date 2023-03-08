import {Text as DefaultText} from '@rneui/base';
import {COLORS} from '../../../common';
import {Typography} from '../../../common/';

interface IText {
  typography?: string;
  children?: any;
  colorFamily?: string;
  colorVariant?: string;
  textAlign?: string;
}

export const Text = ({
  typography = 'h1',
  colorFamily = 'dark',
  colorVariant = '01',
  textAlign = 'auto',
  children,
}: IText) => {
  const typographyText = Typography[typography];

  const color = COLORS[colorFamily][colorVariant];

  return (
    <DefaultText style={{...typographyText, color, textAlign}}>
      {children}
    </DefaultText>
  );
};
