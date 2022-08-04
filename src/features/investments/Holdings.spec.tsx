import React from "react"

import { screen } from "@testing-library/react"

import { renderWithProviders } from "../../test-utils"
import Holdings from "./Holdings"

test("Users should see columns of securities name, symbol, Share Balance, Price per Share, Holdings Value", () => {
  renderWithProviders(<Holdings />)

  expect(screen.getByText("Security")).toBeInTheDocument()
  expect(screen.getByText("Symbol")).toBeInTheDocument()
  expect(screen.getByText("Shares")).toBeInTheDocument()
  expect(screen.getByText("Price")).toBeInTheDocument()
  expect(screen.getByText("Total")).toBeInTheDocument()
})
