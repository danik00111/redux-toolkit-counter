import { add, sub, changestep } from './actions.js'
import { createReducer } from '@reduxjs/toolkit'

const defaultcount = 0
const defaultstep = 1
export const countReducer = createReducer(defaultcount, (builder) => {
  builder.addCase(add, (s, a) => s + a.payload)
  builder.addCase(sub, (s, a) => s - a.payload)
})
export const stepReducer = createReducer(defaultstep, (builder) => {
  builder.addCase(changestep, (s, a) => a.payload)
})