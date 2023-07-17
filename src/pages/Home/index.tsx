import { Items } from './components/Items'
import {
  CoffeLogo,
  ContainerCoffeList,
  ContainerHome,
  ContainerTitle,
  ItemsList,
  Title,
} from './styles'
import CoffeIntro from './assets/CoffeIntro.png'
import { CoffeList } from './components/CoffeList'

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
            <ItemsList>
              <Items />
            </ItemsList>
          </Title>
          <CoffeLogo>
            <img src={CoffeIntro} alt="" />
          </CoffeLogo>
        </ContainerTitle>
        <ContainerCoffeList>
          <h2>Nossos cafés</h2>
          <CoffeList />
        </ContainerCoffeList>
      </ContainerHome>
    </>
  )
}
