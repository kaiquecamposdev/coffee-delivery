/* eslint-disable prettier/prettier */
import { MapPin, Money, Timer } from '@phosphor-icons/react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { SchemaFormType } from '../../../../contexts/ShoppingCartContext'
import { defaultTheme } from '../../../../styles/themes/default'
import { Container, Info } from './styles'

export function OrderInfo() {
  const navigate = useNavigate()
  const stored = useLocation()
  const methods = {
    credito: 'Cartão de Crédito',
    debito: 'Cartão de Débito',
    dinheiro: 'Dinheiro',
  }

  useEffect(() => {
    if (!stored.state) {
      navigate('/')
    }
  }, [navigate, stored])

  if (!stored.state) {
    return null
  }
  const { street, neighborhood, city, state, methodPayments } =
  stored.state.formData as SchemaFormType

  return (
    <Container>
      <Info color={defaultTheme['purple-600']}>
        <div>
          <MapPin size={16} color={defaultTheme.white} />
        </div>
        <div>
          <p>
            Entrega em {' '}
            <strong>{street}</strong>
          </p>
          <span>
            {neighborhood || 'Não informado'} - {city || 'Não informado'}, {state || 'Não informado'}
          </span>
        </div>
      </Info>
      <Info color={defaultTheme['yellow-600']}>
        <div>
          <Timer size={16} color={defaultTheme.white} />
        </div>
        <div>
          <p>Previsão de entrega</p>
          <strong>20 min - 30 min</strong>
        </div>
      </Info>
      <Info color={defaultTheme['yellow-700']}>
        <div>
          <Money size={16} color={defaultTheme.white} />
        </div>
        <div>
          <p>Pagamento na entrega</p>
          <strong>{methods[methodPayments]}</strong>
        </div>
      </Info>
    </Container>
  )
}
