import api from './api';
import { LoginCredentials, RegisterData, User } from '../types';

const login = async (credentials: LoginCredentials) => {
  const response = await api.post<{ user: User; token: string }>('/auth/login', credentials);
  return response.data;
};

const register = async (data: RegisterData) => {
  const response = await api.post<{ user: User; token: string }>('/auth/register', data);
  return response.data;
};

const getCurrentUser = async () => {
  const response = await api.get<User>('/auth/me');
  return response.data;
};

const authService = {
  login,
  register,
  getCurrentUser,
};

export default authService;