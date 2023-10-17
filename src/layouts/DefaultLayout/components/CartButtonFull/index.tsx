import { ShoppingCartContext } from '@/contexts/ShoppingCartContext'
import { defaultTheme } from '@/styles/themes/default'
import { ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartButtonFullContainer, CounterItems } from './styles'

export function CartButtonFull() {
  const { shoppingCartState } = useContext(ShoppingCartContext)

  return (
    <CartButtonFullContainer>
      <Link to="/checkout">
        <ShoppingCart
          size={22}
          weight="fill"
          fill={defaultTheme['yellow-700']}
        />
        <CounterItems>{shoppingCartState.length}</CounterItems>
      </Link>
    </CartButtonFullContainer>
  )
}
