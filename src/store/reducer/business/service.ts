import api from '../../../service';

export const readProductRequest = () => api.get<any[]>('/auth/google');
