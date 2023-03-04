import {Button} from '../..';
import {useNavigationHook} from '../../../hooks';

import {Container} from './style';

import {useAppDispatch} from '../../../hooks/useReduxHook';
import {
  signInRequestFacebook,
  signInRequestGoogle,
} from '../../../store/reducer/auth/actions';

export const ContentButtonGroupSocialLoginIntro = () => {
  const {goToRouter} = useNavigationHook();
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Button
        title="Entrar com email"
        variant="contained"
        icon="email"
        onPress={() => goToRouter('SignInEmailScreen')}
      />
      <Button
        title="Entrar com google"
        variant="outlined"
        icon="gmail"
        onPress={() => dispatch(signInRequestGoogle())}
      />
      <Button
        title="Entrar com facebook"
        variant="outlined"
        icon="facebook"
        onPress={() => dispatch(signInRequestFacebook())}
      />
    </Container>
  );
};
