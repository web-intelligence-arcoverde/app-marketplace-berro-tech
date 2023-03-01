import {ICONS} from '../../../assets';

interface IIcon {
  icon: string;
}

export const IconComponent = ({icon}: IIcon) => {
  const Icon = ICONS[icon];

  return <Icon />;
};
