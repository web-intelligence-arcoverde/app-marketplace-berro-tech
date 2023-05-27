import {IconComponent} from '../../';

import {ButtonContainer} from './style';

interface IButtonIcon {
  icon: string;
  onPress?: any;
}

export const ButtonIcon = ({icon, onPress}: IButtonIcon) => {
  return (
    <ButtonContainer onPress={() => onPress()}>
      <IconComponent icon={icon} />
    </ButtonContainer>
  );
};
