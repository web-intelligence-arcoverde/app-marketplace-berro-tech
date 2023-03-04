import {Button as ButtonDefault} from '@rneui/themed';

import {IconComponent} from '..';

import {ButtonStyle} from '../../../common';

interface IButton {
  title: string;
  variant?: string;
  icon?: string;
  iconRight?: boolean;
  onPress: () => void;
  disabled?: boolean;
}

export const Button = ({
  title,
  variant = 'contained',
  icon,
  iconRight,
  disabled,
  onPress = () => {},
}: IButton) => {
  const {buttonStyle, titleStyle, containerStyle} = ButtonStyle[variant];

  return (
    <ButtonDefault
      onPress={() => onPress()}
      iconRight={iconRight}
      icon={icon && <IconComponent icon={icon} />}
      containerStyle={containerStyle}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
      disabled={disabled}>
      {title}
    </ButtonDefault>
  );
};
