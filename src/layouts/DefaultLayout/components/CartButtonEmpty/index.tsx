import { defaultTheme } from '@/styles/themes/default'
import { ShoppingCart } from '@phosphor-icons/react'
import { CartButtonEmptyContainer } from './styles'

export function CartButtonEmpty() {
  return (
    <>
      <CartButtonEmptyContainer>
        <ShoppingCart
          size={22}
          weight="fill"
          fill={defaultTheme['yellow-700']}
        />
      </CartButtonEmptyContainer>
    </>
  )
}
