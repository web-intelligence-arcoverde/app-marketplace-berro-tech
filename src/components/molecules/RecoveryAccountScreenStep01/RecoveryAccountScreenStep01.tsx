import React from 'react';
import {Input, Separator, Button, useHookStepsRecoveryAccount} from '../..';
import {SIZES} from '../../../common';
import {useNavigationHook} from '../../../hooks';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {useForm} from 'react-hook-form';

const schema = yup
  .object({
    email: yup.string().required().email(),
  })
  .required();

export const RecoveryAccountScreenStep01 = () => {
  const {setStep, setEmail} = useHookStepsRecoveryAccount();

  const {goBack} = useNavigationHook();

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

  const nextStep = (email: string) => {
    setEmail(email);
    setStep(1);
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
