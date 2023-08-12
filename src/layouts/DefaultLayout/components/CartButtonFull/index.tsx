import { ShoppingCart } from '@phosphor-icons/react'
import { CartButtonFullContainer, CounterItems } from './styles'
import { defaultTheme } from '../../../../styles/themes/default'
import { Link } from 'react-router-dom'
import { CoffeListContext } from '../../../../contexts/CoffeListContext'
import { useContext, useEffect, useState } from 'react'

export function CartButtonFull() {
  const { itemsTheShoppingCart } = useContext(CoffeListContext)
  const [countItems, setCountItems] = useState<number>(0)

  useEffect(() => {
    const values = itemsTheShoppingCart.map((item) => item.quantity)
    const sumTheValues = values.reduce((sum, value) => sum + value)
    setCountItems(sumTheValues)
  }, [countItems, itemsTheShoppingCart])

  return (
    <>
      <Link to="/shoppingcart/checkout">
        <CartButtonFullContainer>
          <ShoppingCart
            size={22}
            weight="fill"
            fill={defaultTheme['yellow-700']}
          />
          <CounterItems>{countItems}</CounterItems>
        </CartButtonFullContainer>
      </Link>
    </>
  )
}
