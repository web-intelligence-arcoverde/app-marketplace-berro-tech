import {Text as DefaultText} from '@rneui/base';
import {COLORS} from '../../../common';
import {Typography} from '../../../common/typography';

interface IText {
  typography?: string;
  children?: any;
  colorFamily?: string;
  colorVariant?: string;
}

export const Text = ({
  typography = 'h1',
  colorFamily = 'dark',
  colorVariant = '01',
  children,
}: IText) => {
  const typographyText = Typography[typography];

  const color = COLORS[colorFamily][colorVariant];

  return (
    <DefaultText style={{...typographyText, color}}>{children}</DefaultText>
  );
};
