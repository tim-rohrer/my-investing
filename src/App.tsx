import * as React from "react"

import { Box, ChakraProvider, Grid, theme } from "@chakra-ui/react"

import { ColorModeSwitcher } from "./ColorModeSwitcher"
import TransactionsTable from "./features/investments/TransactionsTable"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <TransactionsTable />
      </Grid>
    </Box>
  </ChakraProvider>
)
