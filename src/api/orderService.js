import { axiosInstance } from '../config/axiosInstance'

export const addOrderRequest = (totalPrice) => {
  return axiosInstance.post('/orders', totalPrice)
}

export const getUserOrdersRequest = () => {
  return axiosInstance.get('/orders')
}

export const getAllOrdersRequest = () => {
  return axiosInstance.get('/orders/all')
}
