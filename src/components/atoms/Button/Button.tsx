import {Button as ButtonDefault} from '@rneui/themed';

import {IconComponent} from '..';

import {ButtonStyle, COLORS} from '../../../common';

interface IButton {
  title: string;
  variant?: string;
  icon?: string;
  iconRight?: boolean;
  onPress: () => void;
  disabled?: boolean;
  colorFamily?: string;
  colorVariant?: string;
}

export const Button = ({
  title,
  variant = 'contained',
  icon,
  iconRight,
  disabled,
  colorFamily = 'dark',
  colorVariant = '01',
  onPress = () => {},
}: IButton) => {
  const {buttonStyle, titleStyle, containerStyle} = ButtonStyle[variant];

  const color = COLORS[colorFamily][colorVariant];

  return (
    <ButtonDefault
      onPress={() => onPress()}
      iconRight={iconRight}
      icon={icon && <IconComponent icon={icon} />}
      containerStyle={containerStyle}
      buttonStyle={[buttonStyle, color]}
      titleStyle={titleStyle}
      disabled={disabled}>
      {title}
    </ButtonDefault>
  );
};
