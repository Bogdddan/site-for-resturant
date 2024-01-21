import { combineReducers, configureStore } from "@reduxjs/toolkit";
import randomUserReducer from './MenuList/slice';

const reducers = combineReducers({
  randomUser: randomUserReducer,
})

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV === 'development',
})