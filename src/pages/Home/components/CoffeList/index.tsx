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
  const { coffeList, onDecreaceItem, onIncreaseItem } =
    useContext(CoffeListContext)
  const [{ type }] = coffeList

  function handleDecreaceItem() {
    console.log(type + ' Esse é o type da função Decreace')
    onDecreaceItem(type)
  }

  function handleIncreaseItem() {
    console.log(type + ' Esse é o type da função Increase')
    onIncreaseItem(type)
  }

  return (
    <CardContainer>
      {coffeList.map(
        ({ image, options, type, description, price, quantity }) => (
          <>
            <CardCoffe key={type}>
              <img src={image} alt="" />
              <OptionsContainer>
                {options.map((option) => {
                  return <span key={option}>{option}</span>
                })}
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
                    <button onClick={handleDecreaceItem}>
                      <Minus size={14} weight="bold" />
                    </button>
                    <span>{quantity}</span>
                    <button onClick={handleIncreaseItem}>
                      <Plus size={14} weight="bold" />
                    </button>
                  </CounterContainer>
                  <ButtonShoppingCart>
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
