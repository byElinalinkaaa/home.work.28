import { axiosInstance } from "../config/axiosInstance"

export const addMealRequest = ( data) => {
  return axiosInstance.post('/foods', data)
}

export const getMealsAdminRequest = () => {
  return axiosInstance.get('/foods')
}

export const deleteMealRequest = (id) => {
  return axiosInstance.delete(`/foods/${id}`)
}

export const getOneMealRequest = ( id) => {
  return axiosInstance.get(`/foods/${id}`)
}

export const updateMealRequest = (data) => {
  return axiosInstance.put(`/foods/${data.id}`, data)
}