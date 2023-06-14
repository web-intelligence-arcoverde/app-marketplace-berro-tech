import React from 'react';
import {Button, Separator} from '../..';
import {useNavigationHook} from '../../../hooks';

import {Container} from './style';

export const ContentButtonGroupSocialLoginIntro = () => {
  const {goToRouter} = useNavigationHook();

  return (
    <Container>
      <Separator height={12} />
      <Button
        title="Entrar com email"
        variant="contained"
        icon="email"
        onPress={() => goToRouter('SignInScreen')}
      />
      <Separator height={12} />
    </Container>
  );
};
