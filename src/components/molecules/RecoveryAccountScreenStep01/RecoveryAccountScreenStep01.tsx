import React from 'react';
import {Input, Separator, Button, useHookStepsRecoveryAccount} from '../..';
import {SIZES} from '../../../common';
import {useAppDispatch, useNavigationHook} from '../../../hooks';

import {useToast} from 'react-native-toast-notifications';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {useForm} from 'react-hook-form';
import {ErrorMessage} from '../../../locale';
import {forgotPasswordRequest} from '../../../store/reducer/auth/actions';

const schema = yup.object({
  email: yup
    .string()
    .required(ErrorMessage['email-required'])
    .email(ErrorMessage['email-valid']),
});

export const RecoveryAccountScreenStep01 = () => {
  const {setStep, setEmail} = useHookStepsRecoveryAccount();

  const {goBack} = useNavigationHook();

  const toast = useToast();

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

  const onSubmit = handleSubmit(data => nextStep(data?.email));

  const dispatch = useAppDispatch();

  const nextStep = (email: string) => {
    dispatch(forgotPasswordRequest({email, toast}));
    //setEmail(email);
    //setStep(1);
  };

  return (
    <>
      <Button
        title="Volta"
        onPress={() => goBack()}
        variant="outlinedSecondary"
        icon="arrow-left"
      />
      <Separator height={SIZES.insideSpacingMedium} />
      <Input
        label="Email"
        placeholder="Seu melhor email"
        name={'email'}
        control={control}
        errors={errors?.email?.message}
      />
      <Separator height={SIZES.insideSpacingMedium} />
      <Button
        title="Recuperar conta"
        variant="contained"
        onPress={() => {
          onSubmit();
        }}
      />
    </>
  );
};
