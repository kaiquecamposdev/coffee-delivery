import styled from 'styled-components'

export const ContainerCheckout = styled.div`
  display: grid;
  grid-template-columns: 42rem 28rem;

  padding: 2.5rem 10rem;
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
    color: ${(props) => props.theme['gray-600']};
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
  gap: 2rem;

  background: ${(props) => props.theme['gray-200']};
`
export const MethodPayment = styled.div`
  display: flex;
  align-self: stretch;
  gap: 2rem;
`
export const ContainerCheckoutOrder = styled.section``
