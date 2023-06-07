import React from 'react';
import {
  Button,
  IconComponent,
  Separator,
  InformationCardsOnboardingScreen,
} from '../../components';
import {useNavigationHook} from '../../hooks';
import {getStatusBarHeight, scale} from '../../utils';

import {Container} from './style';

export const OnboardingScreen = () => {
  const {goToRouter} = useNavigationHook();

  return (
    <Container>
      <Separator height={scale(getStatusBarHeight())} />

      <IconComponent icon="arrow-down-icon" />

      <InformationCardsOnboardingScreen />

      <Separator height={32} />

      <Button
        title="Vamos lá"
        onPress={() => goToRouter('SignInOptionScreen')}
      />
    </Container>
  );
};
