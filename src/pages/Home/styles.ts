import styled from 'styled-components'
import background from './assets/backgroundTitle.png'

export const ContainerHome = styled.main`
  display: flex;
  flex-direction: column;

  gap: 5.75rem;
`
export const ContainerTitle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(100dvh - 6rem);

  background: no-repeat url(${background});
  background-size: cover;
`
export const ContentTitle = styled.div`
  width: 100%;
  max-width: 72rem;
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem 1.5rem;

  gap: 4rem;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`
export const Title = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: clamp(1.5rem, 0.25rem + 4vw, 2.5rem);
    font-weight: 800;

    margin-bottom: 1rem;

    color: ${(props) => props.theme['gray-900']};
  }
  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: clamp(1rem, 0.9643rem + 0.1786vw, 1.25rem);
    font-weight: 400;

    margin-bottom: 4.13rem;

    color: ${(props) => props.theme['gray-800']};
  }

  @media (max-width: 1024px) {
    text-align: center;
  }
`
export const ItemsListTitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 1.25rem 2.5rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`
export const CoffeLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    display: block;

    width: clamp(36rem, 34.2857rem + 8.5714vw, 48rem);
  }
`
export const ContainerCoffeList = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`
export const ContentCoffeList = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 72rem;

  gap: 3.38rem;
`
