import * as React from "react"

import { createColumnHelper } from "@tanstack/react-table"

import Table from "../../common/Table"
import { appleTransactions as testFixture } from "./quickenParsedData.fixture"

const { data } = testFixture

type SharesHeld = {
  securityName: string
  securitySymbol: string
  sharesHeld: number
  sharePrice: number
  total: number
}
const componentData: SharesHeld[] = []

const columnHelper = createColumnHelper<SharesHeld>()

const columns = [
  columnHelper.accessor("securitySymbol", {
    header: "Symbol",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("securityName", {
    header: "Security",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("sharesHeld", {
    header: "Shares",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("sharePrice", {
    header: "Price",
  }),
  columnHelper.accessor("total", {
    header: "Total",
  }),
]

function Holdings(): JSX.Element {
  return <Table data={componentData} columns={columns} />
}

export default Holdings
