import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { produce } from 'immer'
import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../../../contexts/ShoppingCartContext'
import { coffeList } from '../../../../utils/coffeList'
import {
  ButtonShoppingCart,
  BuyContainer,
  CardCoffe,
  CardContainer,
  CounterContainer,
  OptionsContainer,
} from './styles'

export function CoffeList() {
  const { addItemShoppingCart } = useContext(ShoppingCartContext)
  const [coffeListState, setCoffeListState] = useState(coffeList)

  function increaseItem(type: string) {
    const updatedState = produce(coffeListState, (draft) => {
      if (!type) return

      const index = draft.findIndex((item) => item.type === type)
      draft[index].quantity++
    })
    setCoffeListState(updatedState)
  }
  function decreaceItem(type: string) {
    const updatedState = produce(coffeListState, (draft) => {
      if (!type) return

      const index = draft.findIndex((item) => item.type === type)
      draft[index].quantity--
    })
    setCoffeListState(updatedState)
  }
  function handleAddItemShoppingCart(type: string) {
    addItemShoppingCart(coffeListState, type)
  }

  return (
    <CardContainer>
      {coffeListState.map(
        ({ image, description, price, options, quantity, type }) => (
          <CardCoffe key={type}>
            <img key={image} src={image} alt="" />
            <OptionsContainer>
              {options.map((option) => (
                <span key={option}>{option}</span>
              ))}
            </OptionsContainer>
            <h3 key={type}>{type}</h3>
            <p key={description}>{description}</p>

            <BuyContainer>
              <div>
                <span>R$</span>
                <strong key={price}>{price}</strong>
              </div>
              <div>
                <CounterContainer>
                  <button type="button" onClick={() => decreaceItem(type)}>
                    <Minus size={14} weight="bold" />
                  </button>
                  <span key={quantity}>{quantity}</span>
                  <button type="button" onClick={() => increaseItem(type)}>
                    <Plus size={14} weight="bold" />
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
    </CardContainer>
  )
}
