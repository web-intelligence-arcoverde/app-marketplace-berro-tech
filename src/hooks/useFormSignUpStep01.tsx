import React, {useContext} from 'react';

import {ContextSignUpScreenStep, IAppContextSignUpScreenStep} from '../context';

import {FieldErrors, useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {ErrorMessage} from '../locale';
import {useAppDispatch, useAppSelector} from '.';

import {signUpForm} from '../store/reducer/auth/actions';
import {ISignUpForm} from '../store/reducer/auth/types';
import {useNavigation} from '@react-navigation/native';

const schema = yup.object({
  email: yup
    .string()
    .email(ErrorMessage['email-valid'])
    .required(ErrorMessage['email-required']),

  name: yup.string().required(ErrorMessage['name-required']),
  phone: yup.string().required(ErrorMessage['phone-required']),
});

const isObjectEmpty = (
  objectName: FieldErrors<{email: string; name: string; phone: string}>,
) => {
  return (
    Object.keys(objectName).length === 0 && objectName.constructor === Object
  );
};

export const useFormSignUpSteps = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.addListener('beforeRemove', () => {
      dispatch(
        signUpForm({
          email: '',
          name: '',
          phone: '',
          password: '',
          confirmationPassword: '',
          toast: '',
        }),
      );
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const {step, setStep} = useContext(
    ContextSignUpScreenStep,
  ) as IAppContextSignUpScreenStep;

  const STEP_SIZE = step + 1;
  const TOTAL_STEPS = 2;

  const dispatch = useAppDispatch();
  const stateForm = useAppSelector(state => state.auth.signUpForm);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: stateForm.email,
      name: stateForm.name,
      phone: stateForm.phone,
    },
  });

  const onSubmit = (data: ISignUpForm) => {
    dispatch(signUpForm(data));
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
