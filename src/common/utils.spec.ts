import {
  allTransactions as testTransactions,
} from "../features/investments/quickenParsedData.fixture"
import { formatCurrencyFromNumber, securitiesHoldings, sharesHeldOfSecurity } from "./utils"

const { data } = testTransactions

test("formatCurrencyFromNumber includes $ and two digits", () => {
  expect(formatCurrencyFromNumber(4.4)).toEqual("$4.40")
})

test("formatCurrencyFromNumber uses accounting formats for negative numbers", () => {
  expect(formatCurrencyFromNumber(-4.84)).toEqual("($4.84)")
})

test("sharesHeldOfSecurity returns the correct amount", () => {
  expect(sharesHeldOfSecurity("AAPL", data)).toEqual(122.6353)
})

test("sharesHeldOfSecurity throws Error if bad symbol passed", () => {
  expect(() => sharesHeldOfSecurity("APPL", data)).toThrowError(
    "Security symbol not present in data set.",
  )
})

test("securitiesHoldings returns an array of securities held along with the share balance for each", () => {
  expect(securitiesHoldings(data)).toHaveLength(51)
})
