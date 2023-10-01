import { CreditCard, DebitCard, Money } from '../pages/Checkout/assets/icons'

type PaymentMethodsType = {
  name: string
  method: string
  id: string
}

export const paymentMethods: PaymentMethodsType[] = [
  {
    name: 'cartão de crédito',
    method: CreditCard,
    id: 'credito',
  },
  {
    name: 'cartão de débito',
    method: DebitCard,
    id: 'debito',
  },
  {
    name: 'dinheiro',
    method: Money,
    id: 'dinheiro',
  },
]
