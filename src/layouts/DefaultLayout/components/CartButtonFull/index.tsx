import { ShoppingCart } from '@phosphor-icons/react'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../../../contexts/ShoppingCartContext'
import { defaultTheme } from '../../../../styles/themes/default'
import { CartButtonFullContainer, CounterItems } from './styles'

export function CartButtonFull() {
  const { shoppingCartState } = useContext(ShoppingCartContext)
  const [countItems, setCountItems] = useState<number>(0)

  useEffect(() => {
    const sumTheValues = shoppingCartState
      .map((item) => item.quantity)
      .reduce((sum, value) => sum + value)
    setCountItems(sumTheValues)
  }, [countItems, shoppingCartState])

  return (
    <>
      <Link to="/checkout">
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
