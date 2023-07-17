import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
	  margin: 0;
	  padding: 0;
	  border: 0;
	  font-size: 100%;
	  box-sizing: border-box;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }
  body {
	  background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-700']};
		-webkit-font-smoothing: antialiased;
  }
	body, input, textarea, button {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-size: 1rem;
	}
`
