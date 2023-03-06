import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {useForm} from 'react-hook-form';

import {useAppDispatch} from '../hooks';

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  })
  .required();

import {signInRequestEmail} from '../store/reducer/auth/actions';

export const useHookFormSignInEmail = () => {
  const dispatch = useAppDispatch();

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

  const onSubmit = handleSubmit(data => dispatch(signInRequestEmail(data)));

  return {onSubmit, control, errors};
};
