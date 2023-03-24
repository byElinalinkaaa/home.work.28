import { createSlice } from '@reduxjs/toolkit'
import { deleteMeal, getOneMeal, mealsAdmin, updateMeal } from './adminMeals.thunk'


const initialState = {
    meals: [],
    newMeal: {},
    isLoading: false,
}

export const mealsAdminSlice = createSlice({
    name: 'mealsAdmin',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(mealsAdmin.fulfilled, (state, action) => {
            state.meals = action.payload
        })
        builder.addCase(deleteMeal, (state) => {
            state.isLoading = false
        })
        builder.addCase(getOneMeal.fulfilled, (state, action) => {
            state.newMeal = action.payload
            state.isLoading = false
        })
        builder.addCase(updateMeal.fulfilled, (state, action) => {
            state.isLoading = false
            state.newMeal = action.payload
        })
    },
})

export const mealsAdminActions = mealsAdminSlice.actions