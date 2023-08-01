import { Logo } from '../components/Logo/index'
import { defaultTheme } from '../../../styles/themes/default'
import { MapPin } from '@phosphor-icons/react'
import { LayoutContainer, LocaleContainer, OptionsContainer } from './styles'
import { CartButtonEmpty } from '../components/CartButtonEmpty'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeListContext } from '../../../contexts/CoffeListContext'
import { CartButtonFull } from '../components/CartButtonFull'

export function Layout() {
  const { itemsTheShoppingCart } = useContext(CoffeListContext)
  const shoppingCartItemsIsEmpty = itemsTheShoppingCart.length > 0

  return (
    <>
      <LayoutContainer>
        <Link to="/">
          <Logo />
        </Link>
        <OptionsContainer>
          <LocaleContainer>
            <MapPin size={22} weight="fill" fill={defaultTheme['purple-600']} />
            <span>São Vicente, SP</span>
          </LocaleContainer>
          {shoppingCartItemsIsEmpty ? <CartButtonFull /> : <CartButtonEmpty />}
        </OptionsContainer>
      </LayoutContainer>
    </>
  )
}
