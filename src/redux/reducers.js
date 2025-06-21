// import { add, sub, changestep } from './actions.js'
import { createReducer, createSlice } from '@reduxjs/toolkit'

const defaultcount = 0
const defaultstep = 1

const countSlice = createSlice({
  name: "count",
  initialState: defaultcount,
  reducers: {
    add(s,a) { return s + a.payload },
    sub(s,a) { return s - a.payload },
  }
})

const stepSlice = createSlice({
  name: "step",
  initialState: defaultstep,
  reducers: {
    changestep(s,a) { return  a.payload },
  }
})

export const { add, sub } = countSlice.actions
export const { changestep } = stepSlice.actions
export const countReducer = countSlice.reducer
export const stepReducer = stepSlice.reducer