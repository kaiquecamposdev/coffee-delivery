import { useContext } from "react";
import { CardContainer, RemoveButtonContainer, Divider, ContainerButtons } from './styles'
import { CoffeListContext } from '../../../../contexts/CoffeListContext' 
import { CounterContainer } from '../../../Home/components/CoffeList/styles'
import { defaultTheme } from '../../../../styles/themes/default'
import { Minus, Plus, Trash } from "@phosphor-icons/react";

export function CardItems() {
  const { itemsTheShoppingCart, onDecreaceItem, onIncreaseItem } = useContext(CoffeListContext);
  function handleDecreaceItem(type: string) {
    onDecreaceItem(type)
  }
  function handleIncreaseItem(type: string) {
    onIncreaseItem(type)
  }
  function formatCurrency(value: number) {
    const options = {
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    return new Intl.NumberFormat('pt-BR', options).format(value);
  }

  return(
    <>
      {itemsTheShoppingCart.map(({ image, quantity, type, price }) => {

        const coffeValue = quantity * Number(price.replace(',', '.'));
        const formatedValue = formatCurrency(coffeValue)
        const { onItemRemoveFromShoppingCart } = useContext(CoffeListContext)

        function handleItemRemoveFromShoppingCart(type: string) {
          onItemRemoveFromShoppingCart(type)
        }

        return (
          <div key={type}>
            <CardContainer>
              <div>
                <img src={image} alt="" />
                <div>
                  <span>
                    {type}
                  </span>
                  <ContainerButtons>
                    <CounterContainer>
                      <button onClick={() => handleDecreaceItem(type)}>
                        <Minus size={14} weight="bold" />
                      </button>
                      <span key={quantity}>{quantity}</span>
                      <button onClick={() => handleIncreaseItem(type)}>
                        <Plus size={14} weight="bold" />
                      </button>
                    </CounterContainer>
                    <RemoveButtonContainer onClick={() => handleItemRemoveFromShoppingCart(type)}>
                      <Trash size={16} color={defaultTheme['purple-600']}/>
                      <span>remover</span>
                    </RemoveButtonContainer>
                  </ContainerButtons>
                </div>
              </div>
              <span>
                R$ {formatedValue}
              </span>
            </CardContainer>
            <Divider />
          </div>
        )
      })}
      
    </>
  )
}