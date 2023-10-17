import { ShoppingCartContext } from '@/contexts/ShoppingCartContext'
import { coffeList } from '@/utils/coffeList'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { produce } from 'immer'
import { useContext, useState } from 'react'
import {
  ButtonShoppingCart,
  BuyContainer,
  CardCoffe,
  CardContainer,
  CardContent,
  CounterContainer,
  OptionsContainer,
  PriceContainer,
} from './styles'

export function CoffeList() {
  const { addItemShoppingCart } = useContext(ShoppingCartContext)
  const [coffeListState, setCoffeListState] = useState(coffeList)

  function increaseItem(type: string) {
    const updatedState = produce(coffeListState, (draft) => {
      if (!type) return

      const index = draft.findIndex((item) => item.type === type)
      if (draft[index].quantity >= 0) draft[index].quantity++
    })
    setCoffeListState(updatedState)
  }
  function decreaceItem(type: string) {
    const updatedState = produce(coffeListState, (draft) => {
      if (!type) return

      const index = draft.findIndex((item) => item.type === type)
      if (draft[index].quantity > 1) {
        draft[index].quantity--
      }
    })
    setCoffeListState(updatedState)
  }
  function handleAddItemShoppingCart(type: string) {
    addItemShoppingCart(coffeListState, type)
    const updatedState = produce(coffeListState, (draft) => {
      if (!type) return

      const index = draft.findIndex((item) => item.type === type)
      if (draft[index].quantity > 1) {
        draft[index].quantity = 0
      }
    })
    setCoffeListState(updatedState)
  }

  return (
    <CardContainer>
      <h2>Nossos cafés</h2>
      <CardContent>
        {coffeListState.map(
          ({ image, description, price, options, quantity, type }) => (
            <CardCoffe key={type}>
              <img src={image} alt="" />
              <OptionsContainer>
                {options.map((option) => (
                  <span key={option}>{option}</span>
                ))}
              </OptionsContainer>
              <PriceContainer>
                <span>R$</span>
                <strong>{price}</strong>
              </PriceContainer>
              <h3>{type}</h3>
              <p>{description}</p>
              <BuyContainer>
                <div>
                  <CounterContainer>
                    <button type="button" onClick={() => decreaceItem(type)}>
                      <Minus size={16} weight="bold" />
                    </button>
                    <span>{quantity}</span>
                    <button type="button" onClick={() => increaseItem(type)}>
                      <Plus size={16} weight="bold" />
                    </button>
                  </CounterContainer>
                  <ButtonShoppingCart
                    onClick={() => handleAddItemShoppingCart(type)}
                  >
                    <ShoppingCart weight="fill" size={22} color="white" />
                  </ButtonShoppingCart>
                </div>
              </BuyContainer>
            </CardCoffe>
          ),
        )}
      </CardContent>
    </CardContainer>
  )
}
