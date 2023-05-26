import api from '../../../service';

export const signUpRequest = (payload: any) => {
  try {
    return api.post<any[]>('/sign-up', payload);
  } catch (error) {}
};
