import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/Global'
import { CoffeListContextProvider } from './contexts/CoffeListContext'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CoffeListContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyles />
        </CoffeListContextProvider>
      </ThemeProvider>
    </>
  )
}
