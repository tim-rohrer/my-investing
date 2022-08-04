import React from "react"

import { screen } from "@testing-library/react"

import { renderWithProviders } from "../../test-utils"
import TransactionsTable from "./TransactionsTable"

test("Users should see headers, including Date, Type, Security, Amount", () => {
  renderWithProviders(<TransactionsTable />)

  expect(screen.getByText("Date")).toBeInTheDocument()
  expect(screen.getByText("Type")).toBeInTheDocument()
  expect(screen.getByText("Security")).toBeInTheDocument()
  expect(screen.getByText("Account")).toBeInTheDocument()
  expect(screen.getByText("Investment Amount")).toBeInTheDocument()
  expect(screen.getByText("Amount")).toBeInTheDocument()
})
