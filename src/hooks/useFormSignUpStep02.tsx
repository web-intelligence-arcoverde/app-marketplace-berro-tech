import {useContext} from 'react';
import {ContextSignUpScreenStep, IAppContextSignUpScreenStep} from '../context';

import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {ErrorMessage} from '../locale';
import {useNavigationHook} from '.';

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

export const useFormSignUpStep02 = () => {
  const {step, setStep} = useContext(
    ContextSignUpScreenStep,
  ) as IAppContextSignUpScreenStep;

  const {goToRouter} = useNavigationHook();

  const STEP_SIZE = step + 1;
  const TOTAL_STEPS = 2;

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

  const onSubmit = data => {
    console.log(data);
    goToRouter('SignInEmailScreen');
  };

  const onSubmitForm = () => handleSubmit(onSubmit)();

  return {STEP_SIZE, TOTAL_STEPS, setStep, control, errors, onSubmitForm};
};
