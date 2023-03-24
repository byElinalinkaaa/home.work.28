import { createAsyncThunk } from '@reduxjs/toolkit'
import { addOrderRequest, getAllOrdersRequest, getUserOrdersRequest } from '../../api/orderService'


export const submitOrder = createAsyncThunk(
    'basket/submitOrder',
    async (price, { rejectWithValue }) => {
        try {
            const { data } = await addOrderRequest(price)
            return data
        } catch (error) {
            return rejectWithValue('Some thing wen wrong')
        }
    }
)
export const getOrders = createAsyncThunk(
    'basket/getorder',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getUserOrdersRequest()
            return data.data
        } catch (error) {
            return rejectWithValue('Some thing wen wrong')
        }
    }
)
export const getAllOrders = createAsyncThunk(
    'basket/getallorders',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getAllOrdersRequest()
            return data.data
        } catch (error) {
            return rejectWithValue('Some thing wen wrong')
        }
    }
)