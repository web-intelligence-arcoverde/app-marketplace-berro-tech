import {IconComponent} from '../../';

import {ButtonContainer} from './style';

interface IButtonIcon {
  icon: string;
}

export const ButtonIcon = ({icon}: IButtonIcon) => {
  return (
    <ButtonContainer>
      <IconComponent icon={icon} />
    </ButtonContainer>
  );
};
