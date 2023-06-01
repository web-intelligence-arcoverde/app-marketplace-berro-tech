import {useContext} from 'react';

import {ContextSignUpScreenStep, IAppContextSignUpScreenStep} from '../context';

import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {ErrorMessage} from '../locale';
import {useAppDispatch, useAppSelector} from '.';
import {signUpStep01} from '../store/reducer/user/actions';

const schema = yup.object({
  email: yup
    .string()
    .email(ErrorMessage['email-valid'])
    .required(ErrorMessage['email-required']),

  name: yup.string().required(ErrorMessage['name-required']),
  phone: yup.string().required(ErrorMessage['phone-required']),
});

const isObjectEmpty = objectName => {
  return (
    Object.keys(objectName).length === 0 && objectName.constructor === Object
  );
};

export const useFormSignUpSteps = () => {
  const {step, setStep} = useContext(
    ContextSignUpScreenStep,
  ) as IAppContextSignUpScreenStep;

  const STEP_SIZE = step + 1;
  const TOTAL_STEPS = 2;

  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      name: '',
      phone: '',
    },
  });

  const onSubmit = data => {
    dispatch(signUpStep01(data));
    setStep(1);
  };

  const checkErrors = !isObjectEmpty(errors);

  const onSubmitForm = () => handleSubmit(onSubmit)();

  return {
    onSubmit,
    control,
    errors,
    onSubmitForm,
    disabled: checkErrors,
    STEP_SIZE,
    TOTAL_STEPS,
  };
};
