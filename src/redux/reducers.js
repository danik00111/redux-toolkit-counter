import { add, sub, changestep } from './actions.js'
import { createReducer } from '@reduxjs/toolkit'

const defaultcount = 0
const defaultstep = 1
export const countReducer = createReducer(defaultcount, (builder) => {
  builder.addCase(add, (state, action) => state + action.payload)
  builder.addCase(sub, (state, action) => state - action.payload)
})
export const stepReducer = createReducer(defaultstep, (builder) => {
  builder.addCase(changestep, (state, action) => action.payload)
})