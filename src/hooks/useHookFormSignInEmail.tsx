import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {useForm} from 'react-hook-form';

import {useAppDispatch} from '../hooks';

import {ErrorMessage} from '../locale';

const schema = yup
  .object({
    email: yup
      .string()
      .required(ErrorMessage['email-required'])
      .email(ErrorMessage['email-valid']),
    password: yup
      .string()
      .required(ErrorMessage['password-required'])
      .min(8, ErrorMessage['password-min']),
  })
  .required();

import {signInRequest} from '../store/reducer/auth/actions';
import {useNavigationHook} from './useNavigationHook';
import {useToast} from 'react-native-toast-notifications';

export const useHookFormSignInEmail = () => {
  const dispatch = useAppDispatch();
  const {goToRouter} = useNavigationHook();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(data => nextStep(data));

  const toast = useToast();

  const nextStep = (data: any) => {
    dispatch(
      signInRequest({
        email: data.email,
        password: data.password,
        router: goToRouter,
        toast,
      }),
    );
  };

  return {onSubmit, control, errors};
};
