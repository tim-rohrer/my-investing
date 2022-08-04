import * as React from "react"
import { Provider } from "react-redux"

import { render, RenderOptions } from "@testing-library/react"

import { AppStore, RootState, setupStore } from "./app/store"

import type { PreloadedState } from "@reduxjs/toolkit"
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: React.PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  }
}

// re-export everything
export * from "@testing-library/react"
