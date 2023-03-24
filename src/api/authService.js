import { axiosInstance } from '../config/axiosInstance'

export const signUpRequest = (data) => {
  return axiosInstance.post('/auth/register', data)
}

export const signInRequest = (data) => {
  return axiosInstance.post('/auth/login', data)
}
