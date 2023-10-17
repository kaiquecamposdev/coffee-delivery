import styled from 'styled-components'

export const ContainerSuccess = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: calc(100dvh - 6rem);
`
export const ContentSuccess = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-content: center;

  max-width: 72rem;
  gap: 6.38rem;
  padding: 1.5rem 1.5rem;

  @media (max-width: 1130px) {
    grid-template-columns: 1fr;
    grid-auto-flow: dense;
  }
`
export const ContainerFinishedOrder = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  & h1 {
    color: ${(props) => props.theme['yellow-700']};
    font-family: 'Baloo 2';
    font-size: clamp(1.5rem, 1.4286rem + 0.3571vw, 2rem);
    font-weight: 800;
  }
  & p {
    font-size: clamp(1rem, 0.9643rem + 0.1786vw, 1.25rem);
  }

  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    position: relative;

    background: ${(props) => props.theme['gray-100']};
    border-radius: 0.375rem 2.25rem;
    gap: 2rem;

    &::before {
      content: '';
      position: absolute;
      inset: -1px;
      z-index: -1;
      box-sizing: border-box;

      background: linear-gradient(
        90deg,
        rgba(219, 172, 44, 1) 0%,
        rgba(128, 71, 248, 1) 100%
      );
      border-radius: 0.4375rem 2.3125rem 0.4375rem 2.3125rem;
      padding: 0.625rem;
    }
    & h1,
    p,
    span,
    strong {
      font-size: clamp(0.8rem, 0.7714rem + 0.1429vw, 1rem);
    }
  }
`
export const ContainerImageDelivery = styled.section`
  display: flex;
  align-items: center;
`
