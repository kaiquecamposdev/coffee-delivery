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
  ContentCheckoutOrder,
  ContainerPricesItems,
  ContainerItems,
  ContentPricesItems,
} from './styles'
import { ChoosePaymentMethod } from './components/ChoosePaymentMethod/index.tsx'
import { Pin, Cipher } from './assets/icons.ts'
import { useForm } from 'react-hook-form'
import { CardItems } from './components/CardItems/index.tsx'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeListContext } from '../../contexts/CoffeListContext.tsx'
import { ContainerCheckoutEmpty } from './components/ContainerCheckoutEmpty/index.tsx'

export function Checkout() {
  const { register, handleSubmit } = useForm()
  const { itemsTheShoppingCart } = useContext(CoffeListContext)

  return (
    <>
      {itemsTheShoppingCart.length === 0 ? <ContainerCheckoutEmpty /> : <ContainerCheckout>
        <form>
          <ContainerCheckoutForm>
            <h2>Complete seu pedido</h2>
            <ContainerForm>
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
                  <input {...register('CEP', { required: true, pattern: /\d{5}-\d{3}/ })} type="text" placeholder="CEP" />
                  <InfoOne>
                    <input
                      {...register('street', { required: true })}
                      type="text"
                      placeholder="Rua"
                    />
                  </InfoOne>
                  <InfoTwo>
                    <input
                      {...register('streetNumber', { required: true })}
                      type="text"
                      placeholder="Número"
                    />
                    <input
                      {...register('adjunt')}
                      type="text"
                      placeholder="Complemento"
                    />
                  </InfoTwo>
                  <InfoThree>
                    <input
                      {...register('neighborhood', { required: true })}
                      type="text"
                      placeholder="Bairro"
                    />
                      <input
                        {...register('city', { required: true })}
                        type="text"
                        placeholder="Cidade"
                      />               
                      <input
                      {...register('state', { required: true, max: 2 })}
                      type="text"
                      placeholder="UF"
                      />
                    </InfoThree>
                </ContentSectionForm>
              </FormContent>
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
            <ContentCheckoutOrder>
              <ContainerItems>
                <CardItems />
              </ContainerItems>
              <ContainerPricesItems>
                <ContentPricesItems>
                  <div>
                    <p>Total de itens</p>
                    <span>R$ {}</span>
                  </div>
                  <div>
                    <p>Entrega</p>
                    <span>R$ </span>
                  </div>
                  <div>
                    <p>Total</p>
                    <span>R$ </span>
                  </div>
                </ContentPricesItems>
                <Link to="/shoppingcart/success">
                    Confirmar pedido
                </Link>
              </ContainerPricesItems>
            </ContentCheckoutOrder>
          </ContainerCheckoutOrder>
        </form>
      </ContainerCheckout>}
    </>
  )
}
