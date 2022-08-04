import * as React from "react"

import { createColumnHelper } from "@tanstack/react-table"

import Table from "../../common/Table"
import { formatCurrencyFromNumber } from "../../common/utils"
import { appleTransactions as testFixture } from "./quickenParsedData.fixture"

const { data } = testFixture

type TransactionsTableColumns = {
  date: string
  type: string
  action: string
  account: string
  securityName: string
  investAmt: number
  amount: number
}
const trimmedData: TransactionsTableColumns[] = data.map((entry) => {
  const {
    date,
    type,
    action,
    account,
    securityName,
    investAmt,
    amount,
  } = entry
  return {
    date: new Date(date).toLocaleDateString(),
    type,
    action,
    account,
    securityName,
    investAmt,
    amount,
  }
})

const columnHelper = createColumnHelper<TransactionsTableColumns>()

const columns = [
  columnHelper.accessor("date", {
    header: "Date",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.type, {
    id: "type",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Type</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("action", {
    header: "Action",
  }),
  columnHelper.accessor("account", {
    header: "Account",
  }),
  columnHelper.accessor("securityName", {
    header: () => "Security",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("investAmt", {
    header: () => <span>Investment Amount</span>,
    cell: (info) => formatCurrencyFromNumber(info.getValue()),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("amount", {
    header: "Amount",
    cell: (info) => formatCurrencyFromNumber(info.getValue()),
    footer: (info) => info.column.id,
  }),
]

function TransactionsTable(): JSX.Element {
  return <Table data={trimmedData} columns={columns} />
}

export default TransactionsTable
