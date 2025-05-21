import { configureStore } from '@reduxjs/toolkit'
import { countReducer } from './reducers'

export const store = configureStore({
  reducer: {
    count: countReducer,
  },
})
