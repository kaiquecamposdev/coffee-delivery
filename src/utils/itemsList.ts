import { defaultTheme } from '@/styles/themes/default'
import {
  Coffee,
  Icon,
  Package,
  ShoppingCart,
  Timer,
} from '@phosphor-icons/react'

type ItemListType = {
  Icon: Icon
  color: string
  content: string
}

export const itemsList: ItemListType[] = [
  {
    Icon: ShoppingCart,
    color: defaultTheme['yellow-700'],
    content: 'Compra simples e segura',
  },
  {
    Icon: Package,
    color: defaultTheme['gray-800'],
    content: 'Embalagem mantém o café intacto',
  },
  {
    Icon: Timer,
    color: defaultTheme['yellow-600'],
    content: 'Entrega rápida e rastreada',
  },
  {
    Icon: Coffee,
    color: defaultTheme['purple-600'],
    content: 'O café chega fresquinho até você',
  },
]
