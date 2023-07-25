import styled from 'styled-components'
import backgroundTitle from './assets/backgroundTitle.png'

export const ContainerHome = styled.main`
  display: grid;
`

export const ContainerTitle = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;

  background: ${(props) => props.theme['gray-100']} url(${backgroundTitle})
    center center no-repeat;
  background-size: cover;

  padding: 5.75rem 10rem;
  gap: 4.81rem;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;

    margin-bottom: 1rem;

    color: ${(props) => props.theme['gray-900']};
  }
  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;

    margin-bottom: 4.13rem;

    color: ${(props) => props.theme['gray-800']};
  }
`

export const ItemsListTitleContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  gap: 1.25rem 2.5rem;
`

export const CoffeLogo = styled.div`
  & img {
    display: block;
    width: 100%;
  }
`

export const ContainerCoffeList = styled.section`
  display: grid;
  flex-direction: column;

  gap: 3.38rem;
  padding: 2rem 10rem;

  & h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;

    color: ${(props) => props.theme['gray-800']};
  }
`
