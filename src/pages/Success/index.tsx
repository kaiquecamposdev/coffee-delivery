import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext.tsx'
import { ContainerCheckoutEmpty } from '../Checkout/components/ContainerCheckoutEmpty/index.tsx'
import { OrderInfo } from '../Success/components/OrderInfo/index.tsx'
import Delivery from '../Success/imgs/Delivery.svg'
import { ContainerFinishedOrder, ContainerSuccess } from './styles'

export function Success() {
  const { shoppingCartState } = useContext(ShoppingCartContext)

  return (
    <>
      {shoppingCartState.length === 0 ? (
        <ContainerCheckoutEmpty />
      ) : (
        <ContainerSuccess>
          <ContainerFinishedOrder>
            <div>
              <h1>Uhu! Pedido confirmado</h1>
              <p>Agora é só aguardar que logo o café chegará até você</p>
            </div>
            <div>
              <OrderInfo />
            </div>
          </ContainerFinishedOrder>
          <section>
            <img src={Delivery} alt="" />
          </section>
        </ContainerSuccess>
      )}
    </>
  )
}
