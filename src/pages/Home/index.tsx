import CoffeIntro from './assets/CoffeIntro.png'
import { CoffeList } from './components/CoffeList'
import { Items } from './components/Items'
import {
  CoffeLogo,
  ContainerCoffeList,
  ContainerHome,
  ContainerTitle,
  Content,
  ContentCoffeList,
  ContentTitle,
  ItemsListTitleContainer,
  Title,
} from './styles'

export function Home() {
  return (
    <>
      <ContainerHome>
        <ContainerTitle>
          <ContentTitle>
            <Content>
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
            </Content>
          </ContentTitle>
        </ContainerTitle>
        <ContainerCoffeList>
          <ContentCoffeList>
            <CoffeList />
          </ContentCoffeList>
        </ContainerCoffeList>
      </ContainerHome>
    </>
  )
}
