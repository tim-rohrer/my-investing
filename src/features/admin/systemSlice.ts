import { createSlice } from "@reduxjs/toolkit"

import type { RootState } from "../../app/store"
import type { PayloadAction } from "@reduxjs/toolkit"

interface SystemState {
  userId: string
  appThinking: boolean
  appLoaded: boolean
}

const initialState: SystemState = {
  userId: "Demo",
  appThinking: false,
  appLoaded: false,
}

// Reducer Slice
export const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    appIsLoaded: (state: RootState, action: PayloadAction<boolean>) => {
      return {
        ...state,
        appLoaded: action.payload,
      }
    },
    appIsThinking: (state: RootState, action: PayloadAction<boolean>) => {
      return {
        ...state,
        appThinking: action.payload,
      }
    },
  },
})

// Actions
export const { appIsLoaded, appIsThinking } = systemSlice.actions

// Selectors
export const selectAppIsLoaded = (state: RootState): boolean =>
  state.system.appLoaded
export const selectAppIsThinking = (state: RootState): boolean =>
  state.system.appThinking

// Default export

export default systemSlice.reducer
