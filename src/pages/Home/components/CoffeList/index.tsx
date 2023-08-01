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
        ({ image, options, type, description, price, quantity }) => (
          <>
            <CardCoffe key={type}>
              <img src={image} alt="" />
              <OptionsContainer key={10}>
                {options.map((option) => (
                  <span key={option}>{option}</span>
                ))}
              </OptionsContainer>
              <h3>{type}</h3>
              <p>{description}</p>

              <BuyContainer>
                <div>
                  <span>R$</span>
                  <strong>{price}</strong>
                </div>
                <div>
                  <CounterContainer>
                    <button onClick={() => handleDecreaceItem(type)}>
                      <Minus size={14} weight="bold" />
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => handleIncreaseItem(type)}>
                      <Plus size={14} weight="bold" />
                    </button>
                  </CounterContainer>
                  <ButtonShoppingCart onClick={increaseItemsInShoppingCart}>
                    <ShoppingCart weight="fill" size={22} color="white" />
                  </ButtonShoppingCart>
                </div>
              </BuyContainer>
            </CardCoffe>
          </>
        ),
      )}
    </CardContainer>
  )
}
