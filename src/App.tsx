import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { ShoppingCartContextProvider } from './contexts/ShoppingCartContext'
import { GlobalStyles } from './styles/Global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <ShoppingCartContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyles />
        </ShoppingCartContextProvider>
      </ThemeProvider>
    </>
  )
}
