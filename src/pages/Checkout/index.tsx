import { useContext } from 'react'
import { CoffeListContext } from '../../contexts/CoffeListContext'
import {
  ContainerCheckout,
  ContainerCheckoutForm,
  ContainerCheckoutOrder,
  ContainerForm,
  TitleSectionCheckout,
  InfoOne,
  InfoTwo,
  InfoThree,
  ContainerMethodPayment,
  FormContent,
  MethodPayment,
  ContentSectionForm,
} from './styles'
import { ChoosePaymentMethod } from './components/ChoosePaymentMethod/index.tsx'
import { Pin, Cipher } from './assets/icons.ts'

export function Checkout() {
  const { itemsTheShoppingCart } = useContext(CoffeListContext)

  return (
    <>
      <ContainerCheckout>
        <ContainerCheckoutForm>
          <h2>Complete seu pedido</h2>
          <ContainerForm>
            <form action="get">
              <FormContent>
                <TitleSectionCheckout>
                  <i>
                    <img src={Pin} alt="" />
                  </i>
                  <div>
                    <h3>Endereço de Entrega</h3>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                  </div>
                </TitleSectionCheckout>
                <ContentSectionForm>
                  <input
                    type="text"
                    name="cep"
                    id="cep"
                    required
                    placeholder="CEP"
                  />
                  <InfoOne>
                    <input
                      type="text"
                      name="street"
                      id="street"
                      placeholder="Rua"
                    />
                  </InfoOne>
                  <InfoTwo>
                    <input
                      type="text"
                      name="streetNumber"
                      id="streetNumber"
                      required
                      placeholder="Número"
                    />
                    <input
                      type="text"
                      name="adjunt"
                      id="adjunt"
                      placeholder="Complemento"
                    />
                  </InfoTwo>
                  <InfoThree>
                    <input
                      type="text"
                      name="neighborhood"
                      id="neighborhood"
                      required
                      placeholder="Bairro"
                    />
                    <input
                      type="text"
                      name="city"
                      id="city"
                      required
                      placeholder="Cidade"
                    />
                    <input
                      type="text"
                      name="state"
                      id="state"
                      required
                      max={2}
                      placeholder="UF"
                    />
                  </InfoThree>
                </ContentSectionForm>
              </FormContent>
            </form>
            <ContainerMethodPayment>
              <TitleSectionCheckout>
                <i>
                  <img src={Cipher} alt="" />
                </i>
                <div>
                  <h3>Pagamento</h3>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </TitleSectionCheckout>
              <MethodPayment>
                <ChoosePaymentMethod />
              </MethodPayment>
            </ContainerMethodPayment>
          </ContainerForm>
        </ContainerCheckoutForm>
        <ContainerCheckoutOrder>
          <h2>Cafés selecionados</h2>
          <div>{JSON.stringify(itemsTheShoppingCart)}</div>
        </ContainerCheckoutOrder>
      </ContainerCheckout>
    </>
  )
}
