import styled, { css } from 'styled-components'

export const ContainerCheckout = styled.div`
  padding: 2.5rem 10rem;
  height: calc(100vh - 1rem);

  & h2 {
    font-family: 'Baloo 2', monospace;
    font-size: 1.125rem;
  }

  & form {
    display: grid;
    grid-template-columns: 42rem 28rem;
  }
`
export const ContainerCheckoutForm = styled.main`
  padding-right: 2rem;

  & h2 {
    padding-bottom: 0.7rem;
  }
`
export const ContainerForm = styled.section`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`
export const FormContent = styled.main`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['gray-200']};

  border-radius: 0.375rem;
  padding: 2.5rem;
  gap: 2rem;
`
export const TitleSectionCheckout = styled.div`
  display: flex;

  gap: 0.7rem;

  & i {
    & img {
      display: block;
    }
  }
  & div {
    & h3 {
      font-weight: 400;
      font-size: 1rem;
      color: ${(props) => props.theme['gray-800']};
    }
    & p {
      font-size: 0.875rem;
    }
  }
`
export const ContentSectionForm = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  & input {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 12.5rem;

    border: 1px solid ${(props) => props.theme['gray-400']};
    border-radius: 0.25rem;
    padding: 0.75rem;
    gap: 0.25rem;

    font-size: 0.875rem;
    background: ${(props) => props.theme['gray-300']};

    &::placeholder {
      color: ${(props) => props.theme['gray-600']};
    }
    & span {
      -webkit-animation: shake-bottom 0.8s
        cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: shake-bottom 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
  }
`
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`
export const SpanError = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme['red-500']};
`
export const InfoOne = styled.div`
  display: flex;

  & > div {
    width: 100%;

    & input:nth-child(1) {
      width: 100%;
    }
  }
`
export const InfoTwo = styled.div`
  display: flex;
  gap: 0.75rem;

  & div:nth-of-type(2) {
    position: relative;
    width: 100%;

    & > input {
      width: 100%;
    }
    & > em {
      position: absolute;

      top: calc(42px - 0.75rem - 1rem);
      left: calc(348px - 0.75rem - 3.25rem);

      font-size: 0.75rem;
      font-weight: 400;
      font-style: italic;
      color: ${(props) => props.theme['gray-600']};
    }
  }
`
export const OptionalInput = styled.input`
  &:focus-within + em {
    display: none;
  }
  & + em {
    ${(props) =>
      props.value === ''
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
  }
`
export const InfoThree = styled.div`
  display: flex;
  gap: 0.75rem;

  & div:nth-of-type(2) {
    width: 100%;
    & input {
      width: 100%;
    }
  }
  & div:nth-of-type(3) {
    & input {
      width: 60px;
    }
  }
`
export const ContainerMethodPayment = styled.section`
  display: flex;
  flex-direction: column;

  padding: 2.5rem;
  border-radius: 0.375rem;
  gap: 2rem;

  background: ${(props) => props.theme['gray-200']};
`
export const ContainerChoosePaymentMethod = styled.div`
  display: flex;
  justify-self: stretch;
  gap: 0.75rem;

  & button {
    flex: 1;
    border-radius: 0.375rem;

    & input[type='radio'] {
      display: none;

      transition: background 0.2s ease, box-shadow 0.2s ease;

      &:checked + label {
        background: ${(props) => props.theme['purple-100']};
        box-shadow: 0 0 0 1px ${(props) => props.theme['purple-600']};
      }
    }
  }
`
export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: start;

  flex: 1 0 0;

  user-select: none;
  border-radius: 0.375rem;
  padding: 1rem;
  gap: 0.75rem;
  cursor: pointer;

  font-size: 0.75rem;
  text-transform: uppercase;

  transition: background 0.2s ease;

  background: ${(props) => props.theme['gray-400']};
  box-shadow: 0 0 0 1px ${(props) => props.theme['gray-500']};

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }
  & img {
    width: 1rem;
  }
  & span {
    flex-wrap: nowrap;

    color: ${(props) => props.theme['gray-800']};
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`
export const ContainerCheckoutOrder = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    padding-bottom: 0.75rem;
  }
`
export const ContentCheckoutOrder = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['gray-200']};

  padding: 2.5rem;
  border-radius: 0.375rem 2.75rem;
  gap: 1.5rem;
`
export const ContainerItems = styled.div``
export const ContainerPricesItems = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  & div:nth-of-type(3) {
    & p {
      font-size: 1.25rem;
      font-weight: 700;
    }
    & span {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
  & button {
    display: flex;
    justify-content: center;

    width: 100%;
    padding: 0.75rem;
    border-radius: 0.375rem;

    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-600']};

    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: ${(props) => props.theme['yellow-700']};
    }
  }
`
export const ContentPricesItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & div {
    display: flex;
    justify-content: space-between;
  }
`
