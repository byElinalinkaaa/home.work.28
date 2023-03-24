import { createSlice } from '@reduxjs/toolkit'
import { getAllOrders, getOrders, submitOrder } from './order.thunk'

const initialState = {
    meals: [],
    isLoading: false,
}
export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(submitOrder.fulfilled, (state) => {
            state.isLoading = false
            state.error = ''
        })
        builder.addCase(getOrders.fulfilled, (state, action) => {
            state.meals = action.payload
            state.isLoading = false
            state.error = ''
        })
        builder.addCase(getAllOrders.fulfilled, (state, action) => {
            state.meals = action.payload
            state.isLoading = false
            state.error = ''
        })
    },
})

export const orderActions = orderSlice.actions