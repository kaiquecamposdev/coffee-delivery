import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { ReactElement } from 'react'
import { ListContainer } from './styles'
import { defaultTheme } from '../../../../styles/themes/default'

export function Items() {
  interface ItemListType {
    icon: ReactElement
    color: string
    content: string
  }

  const itemsList: ItemListType[] = [
    {
      icon: <ShoppingCart weight="fill" size={16} color="white" />,
      color: defaultTheme['yellow-700'],
      content: 'Compra simples e segura',
    },
    {
      icon: <Package weight="fill" size={16} color="white" />,
      color: defaultTheme['gray-800'],
      content: 'Embalagem mantém o café intacto',
    },
    {
      icon: <Timer weight="fill" size={16} color="white" />,
      color: defaultTheme['yellow-600'],
      content: 'Entrega rápida e rastreada',
    },
    {
      icon: <Coffee weight="fill" size={16} color="white" />,
      color: defaultTheme['purple-600'],
      content: 'O café chega fresquinho até você',
    },
  ]

  return (
    <>
      {itemsList.map((item) => {
        return (
          <ListContainer key={item.content} color={item.color}>
            <i>{item.icon}</i>
            <span>{item.content}</span>
          </ListContainer>
        )
      })}
    </>
  )
}
