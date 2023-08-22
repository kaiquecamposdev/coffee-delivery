import { styled } from 'styled-components'

export const ContainerShoppingCartEmpty = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  min-height: 40.5rem;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
  }
  & div > p {
    font-size: 1.5rem;
    font-weight: 700;

    color: ${props => props.theme['gray-600']};
  }
  & div > span {
    font-size: 1.5rem;

    color: ${props => props.theme['gray-600']};
  }
  & a {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 2rem;
    padding: 0.5rem;
    border-radius: 0.375rem;

    width: 100%;
    max-width: 8rem;

    font-weight: bold;
    font-size: 0.875rem;
    text-decoration: none;
    text-transform: uppercase;
    color: ${props => props.theme.white};
    background: ${props => props.theme['yellow-600']};

    transition: background .2s ease;

    &:hover {
      background: ${props => props.theme['yellow-700']};
    }
  }
`