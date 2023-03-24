/* eslint-disable consistent-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  addToBasketRequest,
  deleteBasketItemRequest,
  getBasketRequest,
  updateBasketRequest,
} from '../../api/basketService'
import { addOrderRequest } from '../../api/orderService'

export const basketActionTypes = {
  ADD_ITEM_SUCCESS: ' ADD_ITEM_SUCCESS',
  GET_BASKET_SUCCESS: 'GET_BASKET_SUCCESS',
}

const initialState = {
  items: [],
  error: '',
  isLoading: false,
}

export const getBasket = createAsyncThunk(
  'basket/getBasket',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getBasketRequest()
      return data.data.items
      // dispatch(basketActions.getBasketSuccess(data.items));
    } catch (error) {
      return rejectWithValue('Something went wrong')
    }
  }
)

export const addToBasket = createAsyncThunk(
  'basket/addToBasket',
  async (newItem, { dispatch, rejectWithValue }) => {
    try {
      await addToBasketRequest(newItem)
      dispatch(getBasket())
    } catch (error) {
      return rejectWithValue('Something went wrong')
    }
  }
)

export const deleteBasketItem = createAsyncThunk(
  'basket/deleteBasketItem',
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await deleteBasketItemRequest(id)

      dispatch(getBasket())
    } catch (error) {
      rejectWithValue('Something went wrong')
    }
  }
)

export const updateBasketItem = createAsyncThunk(
  'basket/updateBasketItem',
  async ({ id, amount }, { dispatch, rejectWithValue }) => {
    try {
      await updateBasketRequest(id, amount)
      dispatch(getBasket())
    } catch (error) {
      return rejectWithValue('Something went wrong')
    }
  }
)

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    getBasketSuccess(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToBasket.rejected, (state, action) => {
      state.error = action.payload
    })
    builder.addCase(updateBasketItem.rejected, (state, action) => {
      state.error = action.payload
    })
    builder.addCase(deleteBasketItem.rejected, (state, action) => {
      state.error = action.payload
    })

    builder.addCase(getBasket.fulfilled, (state, action) => {
      state.items = action.payload
      state.isLoading = false
      state.error = ''
    })

    builder.addCase(getBasket.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(getBasket.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const basketActions = basketSlice.actions

export const submitOrder = createAsyncThunk(
  'basket/addToBasket',
  async (orderData, { dispatch, rejectWithValue }) => {
    try {
      await addOrderRequest(orderData)
      dispatch(getBasket())
      return rejectWithValue('Something went wrong')
    } catch (error) {
      document.write(error)
    }
  }
)
