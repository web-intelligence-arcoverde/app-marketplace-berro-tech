import {Button, Input, ButtonText, Separator} from '../../';
import {useNavigationHook, useHookFormSignInEmail} from '../../../hooks';

import {Container} from './style';

export const FormSignInEmailScreen = () => {
  const {goToRouter} = useNavigationHook();

  const {onSubmit, control, errors} = useHookFormSignInEmail();

  return (
    <Container>
      <Input
        label="Email"
        placeholder="Seu melhor email"
        control={control}
        name="email"
        errors={errors?.email?.message}
      />
      <Separator height={12} />
      <Input
        label="Senha"
        placeholder="No mínimo 8 dígitos"
        password
        control={control}
        name="password"
        rightIcon
        errors={errors?.password?.message}
      />
      <Separator height={12} />
      <ButtonText
        alignItems="flex-end"
        onPress={() => goToRouter('RecoveryAccountScreen')}>
        Recuperar conta
      </ButtonText>
      <Separator height={12} />
      <Button title="Entrar" variant="contained" onPress={() => onSubmit()} />
      <Separator height={12} />
    </Container>
  );
};
