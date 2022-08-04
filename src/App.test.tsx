import React from "react"

import { App } from "./App"
import { renderWithProviders } from "./test-utils"

test("Maintains a snapshot", () => {
  expect(renderWithProviders(<App />)).toMatchSnapshot()
})
