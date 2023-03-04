import {Button, Input, ButtonText, Separator} from '../../';
import {useNavigationHook, useAppDispatch} from '../../../hooks';
import {signInRequestEmail} from '../../../store/reducer/auth/actions';

import {Container} from './style';

export const FormSignInEmailScreen = () => {
  const dispatch = useAppDispatch();

  const {goToRouter} = useNavigationHook();

  return (
    <Container>
      <Input label="Email" placeholder="Seu melhor email" />
      <Separator height={12} />
      <Input label="Senha" placeholder="No mínimo 8 dígitos" password />
      <Separator height={12} />
      <ButtonText
        alignItems="flex-end"
        onPress={() => goToRouter('RecoveryAccountScreen')}>
        Recuperar conta
      </ButtonText>
      <Separator height={12} />
      <Button
        title="Entrar"
        variant="contained"
        onPress={() => dispatch(signInRequestEmail({email: '', password: ''}))}
      />
      <Separator height={12} />
    </Container>
  );
};
