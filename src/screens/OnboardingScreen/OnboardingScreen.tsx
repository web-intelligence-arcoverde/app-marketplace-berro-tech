import React from 'react';
import {
  Button,
  Separator,
  InformationCardsOnboardingScreen,
} from '../../components';
import {useNavigationHook} from '../../hooks';
import {getStatusBarHeight, scale} from '../../utils';

import {Container} from './style';
import {useNavigation} from '@react-navigation/native';

export const OnboardingScreen = () => {
  const {goToRouter} = useNavigationHook();

  const navigation = useNavigation();

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();
      }),
    [navigation],
  );

  return (
    <Container>
      <Separator height={scale(getStatusBarHeight() + 20)} />

      <InformationCardsOnboardingScreen />

      <Separator height={32} />

      <Button
        title="Vamos lá"
        onPress={() => goToRouter('SignInOptionScreen')}
      />
    </Container>
  );
};
