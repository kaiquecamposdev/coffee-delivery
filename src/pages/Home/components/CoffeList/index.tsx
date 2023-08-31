import { useContext } from 'react'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  ButtonShoppingCart,
  BuyContainer,
  CardCoffe,
  CardContainer,
  CounterContainer,
  OptionsContainer,
} from './styles'
import { CoffeListContext } from '../../../../contexts/CoffeListContext'

export function CoffeList() {
  const {
    coffeList,
    onDecreaceItem,
    onIncreaseItem,
    increaseItemsInShoppingCart,
  } = useContext(CoffeListContext)

  function handleDecreaceItem(type: string) {
    onDecreaceItem(type)
  }
  function handleIncreaseItem(type: string) {
    onIncreaseItem(type)
  }

  return (
    <CardContainer>
      {coffeList.map(
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
                  <button type='button' onClick={() => handleDecreaceItem(type)}>
                    <Minus size={14} weight="bold" />
                  </button>
                  <span key={quantity}>{quantity}</span>
                  <button type="button" onClick={() => handleIncreaseItem(type)}>
                    <Plus size={14} weight="bold" />
                  </button>
                </CounterContainer>
                <ButtonShoppingCart
                  onClick={() => increaseItemsInShoppingCart(type)}
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
