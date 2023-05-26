import api from '../../../service';

export const signUpRequest = (payload: any) => api.post<any[]>('/sign-up', payload);
