import React from 'react';
import {Separator, Button, Input} from '../..';
import {SIZES} from '../../../common';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {useForm} from 'react-hook-form';
import {ErrorMessage} from '../../../locale';
import {useAppDispatch, useNavigationHook} from '../../../hooks';
import {changerPasswordForgotPasswordRequest} from '../../../store/reducer/auth/actions';
import {useToast} from 'react-native-toast-notifications';

const schema = yup
  .object({
    password: yup
      .string()
      .required(ErrorMessage['password-required'])
      .min(8, ErrorMessage['password-min']),
    confirmationPassword: yup
      .string()
      .required(ErrorMessage['confirmation-password-required'])
      .min(8, ErrorMessage['password-min'])
      .oneOf(
        [yup.ref('password')],
        ErrorMessage['confirmation-password-equal-password'],
      ),
  })
  .required();

export const RecoveryAccountScreenStep03 = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      password: '',
      confirmationPassword: '',
    },
  });

  const dispatch = useAppDispatch();
  const toast = useToast();
  const {goToRouter} = useNavigationHook();

  const onSubmit = handleSubmit(data => {
    dispatch(
      changerPasswordForgotPasswordRequest({data, toast, router: goToRouter}),
    );
  });

  return (
    <>
      <Separator height={SIZES.insideSpacingSmall} />
      <Input
        label="Senha"
        placeholder="Informe sua nova senha"
        name="password"
        password
        rightIcon
        control={control}
        errors={errors?.password?.message}
      />
      <Separator height={SIZES.insideSpacingMedium} />
      <Input
        label="Confirmação de senha"
        placeholder="Repita sua nova senha aqui"
        name="confirmationPassword"
        password
        rightIcon
        control={control}
        errors={errors?.confirmationPassword?.message}
      />
      <Separator height={SIZES.insideSpacingMedium} />
      <Button title="Alterar senha" onPress={() => onSubmit()} />
    </>
  );
};
