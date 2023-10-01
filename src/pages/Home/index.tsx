import CoffeIntro from './assets/CoffeIntro.png'
import { CoffeList } from './components/CoffeList'
import { Items } from './components/Items'
import {
  CoffeLogo,
  ContainerCoffeList,
  ContainerHome,
  ContainerTitle,
  HeaderCoffeList,
  ItemsListTitleContainer,
  Title,
} from './styles'
// import { FilterTheCoffes } from './components/FilterTheCoffes'

export function Home() {
  return (
    <>
      <ContainerHome>
        <ContainerTitle>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
            <ItemsListTitleContainer>
              <Items />
            </ItemsListTitleContainer>
          </Title>
          <CoffeLogo>
            <img src={CoffeIntro} alt="" />
          </CoffeLogo>
        </ContainerTitle>
        <ContainerCoffeList>
          <HeaderCoffeList>
            <h2>Nossos cafés</h2>
            {/* <FilterTheCoffes /> */}
          </HeaderCoffeList>
          <CoffeList />
        </ContainerCoffeList>
      </ContainerHome>
    </>
  )
}
