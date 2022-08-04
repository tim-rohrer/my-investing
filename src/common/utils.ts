import { InvestmentTransaction } from "../features/investments/investments.types"

export const formatCurrencyFromNumber = (val: number) =>
  dollarUSLocale.format(val)

const dollarUSLocale = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  currencySign: "accounting",
})

export const sharesHeldOfSecurity = (
  securitySymbol: string,
  transactions: InvestmentTransaction[],
) => {
  const transactionsOfSecuritySymbol = transactions.filter(
    (transaction) => transaction.securitySymbol === securitySymbol,
  )
  if (transactionsOfSecuritySymbol.length === 0)
    throw new Error("Security symbol not present in data set.")
  return sharesHeld(transactionsOfSecuritySymbol)
}

const sharesHeld = (dataArray: InvestmentTransaction[]) =>
  dataArray
    .map((dataRow) => dataRow.sharesIn - dataRow.sharesOut)
    .reduce((a, b) => a + b)

export const securitiesHoldings = (
  transactions: InvestmentTransaction[],
) => {
  const securitiesHeld = [
    ...new Set(
      transactions.map((transaction) => transaction.securitySymbol),
    ),
  ].filter((security) => security !== "")
  return securitiesHeld
}
