import {
  SchemaFormType,
  ShoppingCartContext,
} from '@/contexts/ShoppingCartContext'
import { CartButtonEmpty } from '@/layouts/DefaultLayout/components/CartButtonEmpty'
import { CartButtonFull } from '@/layouts/DefaultLayout/components/CartButtonFull'
import { defaultTheme } from '@/styles/themes/default'
import { MapPin } from '@phosphor-icons/react'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import coffeDelivery from './assets/coffeDelivery.svg'
import {
  LayoutContainer,
  LayoutContent,
  LocaleContainer,
  OptionsContainer,
} from './styles'

export function Header() {
  const { shoppingCartState } = useContext(ShoppingCartContext)
  const [formState, setFormState] = useState<SchemaFormType>()

  useEffect(() => {
    const formDataStored = localStorage.getItem(
      '@ignite-coffeDelivery:shopping-cart-form-1.0.0',
    )
    if (formDataStored) {
      const { form } = JSON.parse(formDataStored)
      setFormState(form)
    }
  }, [])

  return (
    <>
      <LayoutContainer>
        <LayoutContent>
          <div>
            <Link to="/">
              <img src={coffeDelivery} alt="" />
            </Link>
            <OptionsContainer>
              <LocaleContainer>
                <MapPin
                  size={22}
                  weight="fill"
                  fill={defaultTheme['purple-600']}
                />
                {formState && formState.city && (
                  <span>
                    {formState.city}, {formState.state}
                  </span>
                )}
              </LocaleContainer>
              {shoppingCartState.length <= 0 ? (
                <CartButtonEmpty />
              ) : (
                <CartButtonFull />
              )}
            </OptionsContainer>
          </div>
        </LayoutContent>
      </LayoutContainer>
    </>
  )
}
