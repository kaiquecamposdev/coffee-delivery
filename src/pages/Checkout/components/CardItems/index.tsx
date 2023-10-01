import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../../../contexts/ShoppingCartContext'
import { defaultTheme } from '../../../../styles/themes/default'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { CounterContainer } from '../../../Home/components/CoffeList/styles'
import {
  CardContainer,
  ContainerButtons,
  Divider,
  RemoveButtonContainer,
} from './styles'

export function CardItems() {
  const {
    shoppingCartState,
    removeItemTheShoppingCart,
    increaseItemTheShoppingCart,
    decreaseItemTheShoppingCart,
  } = useContext(ShoppingCartContext)

  return (
    <>
      {shoppingCartState.map(({ type, image, quantity, price }) => {
        function handleIncreaseItemTheShoppingCart(type: string) {
          increaseItemTheShoppingCart(type)
        }
        function handleDecreaceItemTheShoppingCart(type: string) {
          decreaseItemTheShoppingCart(type)
        }
        function handleRemoveItemTheShoppingCart(type: string) {
          removeItemTheShoppingCart(type)
        }

        return (
          <div key={type}>
            <CardContainer>
              <div>
                <img src={image} alt="" />
                <div>
                  <span>{type}</span>
                  <ContainerButtons>
                    <CounterContainer>
                      <button
                        type="button"
                        onClick={() => handleDecreaceItemTheShoppingCart(type)}
                      >
                        <Minus size={14} weight="bold" />
                      </button>
                      <span key={quantity}>{quantity}</span>
                      <button
                        type="button"
                        onClick={() => handleIncreaseItemTheShoppingCart(type)}
                      >
                        <Plus size={14} weight="bold" />
                      </button>
                    </CounterContainer>
                    <RemoveButtonContainer
                      type="button"
                      onClick={() => handleRemoveItemTheShoppingCart(type)}
                    >
                      <Trash size={16} color={defaultTheme['purple-600']} />
                      <span>remover</span>
                    </RemoveButtonContainer>
                  </ContainerButtons>
                </div>
              </div>
              <span>
                {formatCurrency(quantity * Number(price.replace(',', '.')))}
              </span>
            </CardContainer>
            <Divider key={type} />
          </div>
        )
      })}
    </>
  )
}
