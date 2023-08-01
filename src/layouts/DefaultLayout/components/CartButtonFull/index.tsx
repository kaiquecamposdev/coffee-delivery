import { ShoppingCart } from '@phosphor-icons/react'
import { CartButtonFullContainer } from './styles'
import { defaultTheme } from '../../../../styles/themes/default'
import { Link } from 'react-router-dom'

export function CartButtonFull() {
  return (
    <>
      <Link to="/shoppingcart/checkout">
        <CartButtonFullContainer>
          <ShoppingCart
            size={22}
            weight="fill"
            fill={defaultTheme['yellow-700']}
          />
        </CartButtonFullContainer>
      </Link>
    </>
  )
}
