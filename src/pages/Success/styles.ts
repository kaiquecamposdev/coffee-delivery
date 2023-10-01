import styled from 'styled-components'

export const ContainerSuccess = styled.main`
  display: grid;
  grid-template-columns: 32.875rem 1fr;

  gap: 6.38rem;
  padding: 5rem 10rem;

  min-height: (100vh - 1rem);
`
export const ContainerFinishedOrder = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  & h1 {
    color: ${(props) => props.theme['yellow-700']};
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
  }
  & p {
    font-size: 1.25rem;
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
      border-radius: 7px 37px 7px 37px;
      background: linear-gradient(
        90deg,
        rgba(219, 172, 44, 1) 0%,
        rgba(128, 71, 248, 1) 100%
      );
    }
    & h1,
    p,
    span,
    strong {
      font-size: 1rem;
    }
  }
`
export const ContainerImageDelivery = styled.section`
  display: flex;
  align-items: center;
`
