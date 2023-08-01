import { useContext } from 'react'
import { CoffeListContext } from '../../contexts/CoffeListContext'
import {
  ContainerCheckout,
  ContainerCheckoutForm,
  ContainerCheckoutOrder,
  ContainerForm,
} from './styles'

export function Checkout() {
  const { itemsTheShoppingCart } = useContext(CoffeListContext)

  return (
    <>
      <ContainerCheckout>
        <ContainerCheckoutForm>
          <h2>Complete seu pedido</h2>
          <ContainerForm>
            <div></div>
          </ContainerForm>
          <div></div>
        </ContainerCheckoutForm>
        <ContainerCheckoutOrder>
          <h2>Cafés selecionados</h2>
          <div></div>
        </ContainerCheckoutOrder>
      </ContainerCheckout>
    </>
  )
}
