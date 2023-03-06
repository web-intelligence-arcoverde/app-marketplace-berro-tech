import {Button, Input, ButtonText, Separator} from '../../';
import {useNavigationHook, useAppDispatch} from '../../../hooks';
import {signInRequestEmail} from '../../../store/reducer/auth/actions';

import {Container} from './style';

import {useForm, Controller} from 'react-hook-form';

export const FormSignInEmailScreen = () => {
  const dispatch = useAppDispatch();

  const {goToRouter} = useNavigationHook();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <Container>
      <Input
        label="Email"
        placeholder="Seu melhor email"
        control={control}
        name="email"
      />
      <Separator height={12} />
      <Input
        label="Senha"
        placeholder="No mínimo 8 dígitos"
        password
        control={control}
        name="password"
      />
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
        onPress={() => {
          onSubmit();
          dispatch(signInRequestEmail({email: '', password: ''}));
        }}
      />
      <Separator height={12} />
    </Container>
  );
};
