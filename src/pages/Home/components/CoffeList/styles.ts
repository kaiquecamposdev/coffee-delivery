import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 72rem;

  gap: 2rem;
  padding: 1.5rem 1.5rem;

  & > h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: clamp(1.5rem, 1.4286rem + 0.3571vw, 2rem);
    font-weight: 800;

    color: ${(props) => props.theme['gray-800']};
  }
`
export const CardContent = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(auto-fit, clamp(18rem, 18rem + 0vw, 18rem));

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
    width: 100%;
    max-width: 7.5rem;
  }
  & > h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: clamp(1rem, 0.9643rem + 0.1786vw, 1.25rem);
    font-weight: 700;

    margin-bottom: 0.5rem;
  }
  & > p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
    text-align: center;

    padding-bottom: 2.06rem;
  }
`
export const OptionsContainer = styled.div`
  display: flex;
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
export const PriceContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.25rem;

  & span {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }
  & strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: clamp(1rem, 0.9286rem + 0.3571vw, 1.5rem);
    font-weight: 800;

    color: ${(props) => props.theme['gray-700']};
  }
`
export const BuyContainer = styled.div`
  display: flex;
  min-width: 100%;

  & > div {
    display: flex;
    justify-content: space-between;

    min-width: 100%;
    gap: 1.44rem;
  }
  & div:nth-child(2) {
    flex: 1;
  }
`
export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex: 1;

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
      transition: color 0.2s ease;

      &:hover {
        color: ${(props) => props.theme['purple-700']};
      }
    }
  }
  & span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1.25rem;

    font-family: 'Roboto', sans-serif;
    font-size: clamp(0.8rem, 0.7714rem + 0.1429vw, 1rem);

    color: ${(props) => props.theme['gray-900']};
  }
`
export const ButtonShoppingCart = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 2rem;
  border-radius: 0.375rem;

  background: ${(props) => props.theme['purple-700']};
  transition: background 0.2s ease;

  &:hover {
    background: ${(props) => props.theme['purple-600']};
  }
`
