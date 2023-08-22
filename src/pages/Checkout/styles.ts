import styled from 'styled-components'

export const ContainerCheckout = styled.div`
  padding: 2.5rem 10rem;

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
  }
`
export const InfoOne = styled.div`
  display: flex;
  align-self: stretch;

  & input {
    flex: 1 0 0;
  }
`
export const InfoTwo = styled.div`
  display: flex;
  align-self: stretch;

  gap: 0.75rem;

  & input:nth-of-type(2) {
    flex: 1 0 0;
  }
`
export const InfoThree = styled(InfoTwo)`
  input:last-child {
    width: 60px;
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
export const MethodPayment = styled.div`
  display: flex;
  align-self: stretch;
  gap: 2rem;
`
export const ContainerCheckoutOrder = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    padding-bottom: .75rem;
  }
`
export const ContentCheckoutOrder = styled.div`
  display: flex;
  flex-direction: column;

  background: ${props => props.theme['gray-200']};

  padding: 2.5rem;
  border-radius: 0.375rem 2.75rem;
  gap: 1.5rem;
`
export const ContainerItems = styled.div`
  
`
export const ContainerPricesItems = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  & div:nth-of-type(3){
    & p {
      font-size: 1.25rem;
      font-weight: 700;
    }
    & span {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }

  & a {
    display: flex;
    justify-content: center;

    padding: .75rem;
    border-radius: 0.375rem;

    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    color: ${props => props.theme.white};
    background: ${props => props.theme['yellow-600']};

    cursor: pointer;
    transition: background .2s ease;

    &:hover {
      background: ${props => props.theme['yellow-700']};
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