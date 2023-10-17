import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: calc(100dvh - 6rem);
`
export const CheckoutContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  max-width: 72rem;

  gap: 2rem;
  padding: 1.5rem 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`
export const CheckoutFormContainer = styled.section`
  & h2 {
    font-family: 'Baloo 2', monospace;
    font-size: 1.125rem;

    padding-bottom: 0.7rem;
  }
`
export const TitleContainer = styled.div`
  & h2 {
    padding-bottom: 0.7rem;
  }
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 0.375rem;
  & form {
    display: flex;
    flex-direction: column;
  }
`
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 0.375rem;
  gap: 2rem;
`
export const TitleFormContainer = styled.div`
  display: flex;
`
export const TitleFormContent = styled.div`
  display: inline-flex;
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
export const InputsContainer = styled.div`
  background: ${(props) => props.theme['gray-200']};

  border-radius: 0.375rem;
  padding: 2.5rem;
`
export const InputsContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  & input {
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 100%;
    max-width: 12.5rem;

    border-radius: 0.25rem;
    padding: 0.75rem;
    gap: 0.25rem;

    font-size: 0.875rem;
    background: ${(props) => props.theme['gray-300']};

    &::placeholder {
      color: ${(props) => props.theme['gray-600']};
    }
  }
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
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 0.75rem;

  & div:nth-of-type(2) {
    position: relative;

    & > em {
      position: absolute;

      right: 0.75rem;
      top: calc(25% + 0.125rem);

      font-size: 0.75rem;
      font-weight: 400;
      font-style: italic;
      color: ${(props) => props.theme['gray-600']};
      user-select: none;
    }
  }

  @media (max-width: 660px) {
    grid-template-columns: 1fr;
  }
`
export const OptionalInput = styled.input`
  &:focus-within + em {
    display: none;
  }
  & + em {
    ${(props) =>
      props.value === '' && props.placeholder !== ''
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
  }
`
export const InfoThree = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;

  gap: 0.75rem;

  & div:nth-of-type(3) {
    & input {
      width: 100%;
      max-width: 3.75rem;
    }
  }
  @media (max-width: 660px) {
    grid-template-columns: 1fr;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`
export const MethodPaymentContainer = styled.section`
  border-radius: 0.375rem;

  background: ${(props) => props.theme['gray-200']};
`
export const MethodPaymentContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem;
  border-radius: 0.375rem;
  gap: 2rem;
`
export const ChoosePaymentMethodContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  border-radius: 0.375rem;
  gap: 0.75rem;

  & button {
    height: max-content;
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
  @media (max-width: 660px) {
    grid-template-columns: 1fr;
  }
`
export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.375rem;
  padding: 1rem;
  gap: 0.75rem;

  user-select: none;
  cursor: pointer;
  transition: background 0.2s ease, box-shadow 0.2s ease;

  background: ${(props) => props.theme['gray-300']};
  box-shadow: 0 0 0 1px ${(props) => props.theme['gray-500']};

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }
  & img {
    width: 100%;
    max-width: 1rem;
  }
  & span {
    text-align: center;
    color: ${(props) => props.theme['gray-800']};
    font-size: 0.7rem;
    text-transform: uppercase;
  }
`
export const CheckoutOrderContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 44.25rem;

  h2 {
    padding-bottom: 0.75rem;
  }
`
export const CheckoutOrderContent = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['gray-200']};

  padding: 2.5rem;
  border-radius: 0.375rem 2.75rem;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    border-radius: 0.375rem;
  }
`
export const ItemsContainer = styled.div``
export const PricesItemsContainer = styled.div`
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

    &:hover:not(:disabled) {
      background: ${(props) => props.theme['yellow-700']};
    }
  }
`
export const PricesItemsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & div {
    display: flex;
    justify-content: space-between;
  }
`
