import { Button } from '../..';
import { useNavigationHook } from '../../../hooks';

import { Container } from './style';

import { useAppDispatch } from '../../../hooks/useReduxHook';

export const ContentButtonGroupSocialLoginIntro = () => {
  const { goToRouter } = useNavigationHook();
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Button
        title="Entrar com email"
        variant="contained"
        icon="email"
        onPress={() => goToRouter('SignInEmailScreen')}
      />
    </Container>
  );
};
