import {
  Button,
  IconComponent,
  Separator,
  InformationCardsOnboardingScreen,
} from '../../components';
import { useNavigationHook } from '../../hooks';
import { getStatusBarHeight, scale } from '../../utils';

import { Container } from './style';

export const OnboardingScreen = () => {
  const { goToRouter } = useNavigationHook();

  return (
    <Container>

      <Separator height={scale(getStatusBarHeight()) + scale(24)} />

      <IconComponent icon="arrow-down-icon" />

      <Separator height={12} />

      <InformationCardsOnboardingScreen />

      <Separator height={42} />

      <Button
        title="Vamos lá"
        onPress={() => goToRouter('SignInOptionScreen')}
      />

    </Container>
  );
};
