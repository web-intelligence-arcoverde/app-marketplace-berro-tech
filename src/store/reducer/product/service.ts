import api from '../../../service';

export const signInFacebookRequest = () => api.get<any[]>('/auth/google');

export const signInGoogleRequest = () => api.get<any[]>('/auth/google');
