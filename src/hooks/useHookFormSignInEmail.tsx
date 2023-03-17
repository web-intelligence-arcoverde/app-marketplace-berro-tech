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

import {signInRequestEmail} from '../store/reducer/auth/actions';
import {useNavigationHook} from './useNavigationHook';

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

  const nextStep = (data: any) => {
    dispatch(signInRequestEmail(data));
    goToRouter('DashboardBottomNavigation');
  };

  return {onSubmit, control, errors};
};
