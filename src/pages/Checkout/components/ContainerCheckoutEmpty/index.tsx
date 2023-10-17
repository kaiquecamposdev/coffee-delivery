import { defaultTheme } from '@/styles/themes/default.ts'
import { ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import {
  ContainerShoppingCartEmpty,
  ContentShoppingCartEmpty,
} from './styles.ts'

export function ContainerCheckoutEmpty() {
  return (
    <>
      <ContainerShoppingCartEmpty>
        <ContentShoppingCartEmpty>
          <ShoppingCart size={200} color={defaultTheme['gray-500']} />
          <div>
            <p>Você ainda não tem itens no seu carrinho</p>
            <span>Adicione itens no carrinho</span>
          </div>
          <Link to="/">Voltar</Link>
        </ContentShoppingCartEmpty>
      </ContainerShoppingCartEmpty>
    </>
  )
}
