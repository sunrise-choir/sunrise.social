import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../theme'

const Provider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Provider
