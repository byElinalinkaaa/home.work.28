/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { mealsSlice } from './meals/meals.slice'
import { basketSlice } from './meals/basket.slice'
import { uiSlice } from './ui/ui.slice'
import authSlice from './auth/auth.slice'
import { mealsAdminSlice } from './admin-meals/adminMeals.slice'
import { orderSlice } from './order/order.slice'

const rootReducer = combineReducers({
  [mealsSlice.name]: mealsSlice.reducer,
  [basketSlice.name]: basketSlice.reducer,
  [uiSlice.name]: uiSlice.reducer,
  [authSlice.name]: authSlice.reducer,
  [mealsAdminSlice.name]: mealsAdminSlice.reducer,
  [orderSlice.name]: orderSlice.reducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
