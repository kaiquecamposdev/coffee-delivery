import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: 16rem 16rem 16rem 16rem;

  gap: 2rem 2.5rem;
`

export const CardCoffe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 0.375rem 2.25rem;
  padding: 1.5rem 1.25rem;

  background: ${(props) => props.theme['gray-200']};
  & > img {
    margin-top: calc(-1.5rem - 1.25rem);

    display: block;
    width: 120px;
  }
  & > h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;

    margin-bottom: 0.5rem;
  }
  & > p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
    text-align: center;

    margin-bottom: 2.06rem;
  }
`

export const OptionsContainer = styled.div`
  display: inline-flex;
  gap: 0.25rem;

  & > span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;

    color: ${(props) => props.theme['yellow-700']};

    background: ${(props) => props.theme['yellow-100']};
    border-radius: 6.25rem;
    padding: 0.25rem 0.5rem;
    margin: 0.75rem 0 1rem 0;
  }
`

export const BuyContainer = styled.div`
  display: flex;
  gap: 1.44rem;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.2rem;

    & span {
      font-size: 1rem;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
    }
    & strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;

      color: ${(props) => props.theme['gray-700']};
    }
  }
  & div:nth-child(2) {
    display: flex;
    gap: 0.5rem;
  }
`

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 0.375rem;

  background: ${(props) => props.theme['gray-400']};

  & button {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    background: transparent;
    color: ${(props) => props.theme['purple-600']};
    & svg {
      transition: color .2s ease;
      &:hover {
        color: ${props => props.theme['purple-700']};
      }
    }
  }
  & span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1.25rem;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;

    color: ${(props) => props.theme['gray-900']};
  }
`

export const ButtonShoppingCart = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 0.375rem;

  background: ${(props) => props.theme['purple-700']};
  transition: background .2s ease;

  &:hover {
    background: ${props => props.theme['purple-600']};
  }
`
