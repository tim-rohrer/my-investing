import { combineReducers, configureStore } from "@reduxjs/toolkit"

import systemReducer from "../features/admin/systemSlice"

import type { PreloadedState, Reducer } from "@reduxjs/toolkit"

const rootReducer: Reducer = combineReducers({
  system: systemReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    preloadedState,
  })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
