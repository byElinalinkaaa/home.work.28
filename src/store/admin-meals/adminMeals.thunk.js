import { createAsyncThunk } from '@reduxjs/toolkit'
import { deleteMealRequest, getMealsAdminRequest, getOneMealRequest, updateMealRequest } from '../../api/mealsService'


export const mealsAdmin = createAsyncThunk(
    'mealsAdmin/getMeals',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await getMealsAdminRequest()
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteMeal = createAsyncThunk(
    'mealsAdmin/delete',
    async (payload, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await deleteMealRequest(payload)
            dispatch(mealsAdmin())
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getOneMeal = createAsyncThunk(
    'mealsAdmin/getOneMeal',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await getOneMealRequest(payload)
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const updateMeal = createAsyncThunk(
    'mealsAdmin/updateMeal',
    async (payload, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await updateMealRequest(payload)
            dispatch(mealsAdmin())
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)