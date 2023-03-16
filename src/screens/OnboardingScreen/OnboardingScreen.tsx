import {
  Button,
  IconComponent,
  Separator,
  InformationCardsOnboardingScreen,
} from '../../components';
import {getStatusBarHeight} from '../../utils';

import {Container} from './style';

export const OnboardingScreen = () => {
  return (
    <Container>
      <Separator height={getStatusBarHeight()} />
      <IconComponent icon="arrow-down-icon" />

      <Separator height={32} />

      <InformationCardsOnboardingScreen />
      <Separator height={42} />
      <Button title="Vamos lá" onPress={() => {}} />
    </Container>
  );
};
