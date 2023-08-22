import { ShoppingCart } from "@phosphor-icons/react"
import { defaultTheme } from "../../../../styles/themes/default"
import { ContainerShoppingCartEmpty } from './styles.ts'
import { Link } from "react-router-dom"

export function ContainerCheckoutEmpty() {
  return(
    <>
      <ContainerShoppingCartEmpty>
        <ShoppingCart size={200} color={defaultTheme['gray-500']} />
        <div>
          <p>Você ainda não tem itens no seu carrinho</p>
          <span>Adicione itens no carrinho</span>
        </div>
        <Link to="/">
          Volte
        </Link>
      </ContainerShoppingCartEmpty>
    </>
  )
}