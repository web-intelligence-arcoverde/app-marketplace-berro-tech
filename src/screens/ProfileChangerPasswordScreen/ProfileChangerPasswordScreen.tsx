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

const schema = yup.object({
  email: yup
    .string()
    .required(ErrorMessage['email-required'])
    .email(ErrorMessage['email-valid']),
});

export const ProfileChangerPasswordScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  return (
    <KeyboardContainer>
      <ScrollView>
        <HeaderDashboard />
        <View style={{paddingHorizontal: 20}}>
          <Text typography="h3">Localização</Text>
          <Separator height={20} />
          <View style={{gap: 20}}>
            <Input control={control} label="Senha atual" name="password" />
            <Input control={control} label="Nova senha" name="newPassword" />

            <Button
              title="Salvar Alterações"
              onPress={() => {}}
              variant="containedThirdy"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardContainer>
  );
};
