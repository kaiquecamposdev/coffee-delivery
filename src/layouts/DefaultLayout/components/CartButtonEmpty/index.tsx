import { ShoppingCart } from '@phosphor-icons/react'
import { defaultTheme } from '../../../../styles/themes/default'
import { CartButtonEmptyContainer } from './styles'
import { Link } from 'react-router-dom'

export function CartButtonEmpty() {
  return (
    <>
      <Link to="/shoppingcart/checkout">
        <CartButtonEmptyContainer>
          <ShoppingCart
            size={22}
            weight="fill"
            fill={defaultTheme['yellow-700']}
          />
        </CartButtonEmptyContainer>
      </Link>
    </>
  )
}
