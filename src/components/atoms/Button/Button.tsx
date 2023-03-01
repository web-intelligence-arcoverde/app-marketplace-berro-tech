import {Button as ButtonDefault} from '@rneui/themed';

import {IconComponent} from '..';

import {ButtonStyle} from '../../../common';

interface IButton {
  title: string;
  variant?: string;
  icon?: string;
  iconRight?: boolean;
}

export const Button = ({
  title,
  variant = 'contained',
  icon,
  iconRight,
}: IButton) => {
  const {buttonStyle, titleStyle, containerStyle} = ButtonStyle[variant];

  return (
    <ButtonDefault
      iconRight={iconRight}
      icon={icon && <IconComponent icon={icon} />}
      containerStyle={containerStyle}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}>
      {title}
    </ButtonDefault>
  );
};
