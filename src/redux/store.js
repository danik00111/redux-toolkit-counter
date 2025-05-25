import { configureStore } from '@reduxjs/toolkit'
import { countReducer, stepReducer } from './reducers'

export const store = configureStore({
  reducer: {
    count: countReducer,
    step: stepReducer
  },
})
