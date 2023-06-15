import {View, ScrollView} from 'react-native';

import {
  Button,
  Text,
  Input,
  Separator,
  KeyboardContainer,
} from '../../components';

import {HeaderDashboard} from '../../components';

import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {ErrorMessage} from '../../locale';
import {useAppDispatch, useNavigationHook} from '../../hooks';
import {changerPasswordRequest} from '../../store/reducer/auth/actions';

const schema = yup
  .object({
    currentPassword: yup
      .string()
      .required(ErrorMessage['password-required'])
      .min(8, ErrorMessage['password-min']),
    newPassword: yup
      .string()
      .required(ErrorMessage['confirmation-password-required'])
      .min(8, ErrorMessage['password-min']),
  })
  .required();

export const ProfileChangerPasswordScreen = () => {
  const {goToRouter} = useNavigationHook();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit(data =>
    dispatch(changerPasswordRequest({data, navigation: goToRouter})),
  );

  return (
    <KeyboardContainer>
      <HeaderDashboard />
      <Separator height={20} />
      <View style={{paddingHorizontal: 20}}>
        <Text typography="h3">Alterar senha</Text>
        <Separator height={20} />
        <View style={{gap: 20}}>
          <Input
            label="Senha atual"
            placeholder="No mínimo 8 dígitos"
            password
            control={control}
            name="currentPassword"
            password
            rightIcon
            errors={errors?.password?.message}
          />
          <Input
            label="Nova senha"
            placeholder="A mesma senha de cima"
            password
            control={control}
            rightIcon
            name="newPassword"
            errors={errors?.confirmationPassword?.message}
          />

          <Button
            title="Salvar Alterações"
            onPress={() => onSubmit()}
            variant="containedThirdy"
          />
        </View>
      </View>
    </KeyboardContainer>
  );
};
