import { createAsyncThunk } from '@reduxjs/toolkit'
import { signInRequest, signUpRequest } from '../../api/authService'    
import { STORAGE_KEYS } from '../../lib/constants/common'

const signUp = createAsyncThunk(
  'auth/signup',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await signUpRequest(payload)
      const userData = data.data

      localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(userData))

      return userData
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const signIn = createAsyncThunk(
  'auth/signin',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await signInRequest(payload)
      localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data.data))
      return data.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const signOut = createAsyncThunk('auth/signOut', async () => {
  return localStorage.removeItem(STORAGE_KEYS.AUTH)
})

export default signUp


