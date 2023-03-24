/* eslint-disable prettier/prettier */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMealsRequest } from '../../api/basketService'
import { addMealRequest } from '../../api/mealsService'
import { mealsAdmin } from '../admin-meals/adminMeals.thunk'
// import { fetchApi } from '../../lib/fetchApi'
// eslint-disable-next-line import/no-cycle
import { mealsSlice } from './index'

export const getMeals = createAsyncThunk(
  'meals/getMeals',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      dispatch(mealsSlice.mealsActions.getMealsStarted())
      const { data } = await getMealsRequest()
      dispatch(mealsSlice.mealsActions.getMealsSuccess(data))
      return data.data
    } catch (error) {
      return rejectWithValue('something went wrong')
    }
  }
)


export const addMeals = createAsyncThunk(
  'meals/addMeals',
  async (payload, { rejectWithValue, dispatch }) => {
      try {
          const { data } = await addMealRequest(payload)
          dispatch(mealsAdmin())
          return data.data
      } catch (error) {
          return rejectWithValue(error)
      }
  }
)
