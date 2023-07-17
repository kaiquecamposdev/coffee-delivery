import { Logo } from '../components/Logo/index'
import { defaultTheme } from '../../../styles/themes/default'
import { MapPin } from '@phosphor-icons/react'
import { LayoutContainer, LocaleContainer, OptionsContainer } from './styles'
import { CartButtonEmpty } from '../components/CartButtonEmpty'

export function Layout() {
  return (
    <>
      <LayoutContainer>
        <Logo />
        <OptionsContainer>
          <LocaleContainer>
            <MapPin size={22} weight="fill" fill={defaultTheme['purple-600']} />
            <span>São Vicente, SP</span>
          </LocaleContainer>
          <CartButtonEmpty />
        </OptionsContainer>
      </LayoutContainer>
    </>
  )
}
