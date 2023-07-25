import {
  Arabian,
  Capuccino,
  CoffeChocolate,
  CoffeWithMilk,
  Cuban,
  Express,
  ExpressAmerican,
  ExpressCream,
  ExpressIce,
  Havain,
  Ireland,
  Latte,
  Macchiato,
  Mocaccino,
} from '../pages/Home/assets/icons'

import { ReactNode, createContext, useState } from 'react'

interface CoffeListProps {
  image: string
  options: string[]
  type: string
  description: string
  price: string
  quantity: number
}

interface ListCoffeDeliveryProps {
  coffeList: CoffeListProps[]
  onIncreaseItem?: (type: string) => void
  onDecreaceItem?: (type: string) => void
}
export const CoffeListContext = createContext({} as ListCoffeDeliveryProps)

interface CoffeListContextProviderProps {
  children: ReactNode
}

export function CoffeListContextProvider({
  children,
}: CoffeListContextProviderProps) {
  const [listCoffeDelivery, setListCoffeDelivery] =
    useState<ListCoffeDeliveryProps>({
      coffeList: [
        {
          image: Express,
          options: ['tradicional'],
          type: 'Expresso Tradicional',
          description:
            'O tradicional café feito com água quente e grãos moídos',
          price: '5,00',
          quantity: 1,
        },
        {
          image: ExpressAmerican,
          options: ['tradicional'],
          type: 'Expresso Americano',
          description: 'Expresso diluído, menos intenso que o tradicional',
          price: '5,50',
          quantity: 1,
        },
        {
          image: ExpressCream,
          options: ['tradicional'],
          type: 'Expresso Cremoso',
          description: 'Café expresso tradicional com espuma cremosa',
          price: '6,00',
          quantity: 1,
        },
        {
          image: ExpressIce,
          options: ['tradicional', 'gelado'],
          type: 'Expresso Gelado',
          description: 'Bebida preparada com café expresso e cubos de gelo',
          price: '6,50',
          quantity: 1,
        },
        {
          image: CoffeWithMilk,
          options: ['tradicional', 'com leite'],
          type: 'Café com Leite',
          description:
            'Meio a meio de expresso tradicional com leite vaporizado',
          price: '7,00',
          quantity: 1,
        },
        {
          image: Latte,
          options: ['tradicional', 'com leite'],
          type: 'Latte',
          description:
            'Uma dose de café expresso com o dobro de leite e espuma cremosa',
          price: '7,50',
          quantity: 1,
        },
        {
          image: Capuccino,
          options: ['tradicional', 'com leite'],
          type: 'Capuccino',
          description:
            'Bebida com canela feita de doses iguais de café, leite e espuma',
          price: '8,00',
          quantity: 1,
        },
        {
          image: Macchiato,
          options: ['tradicional', 'com leite'],
          type: 'Macchiato',
          description:
            'Café expresso misturado com um pouco de leite quente e espuma',
          price: '8,50',
          quantity: 1,
        },
        {
          image: Mocaccino,
          options: ['tradicional', 'com leite'],
          type: 'Mocaccino',
          description:
            'Café expresso com calda de chocolate, pouco leite e espuma',
          price: '9,00',
          quantity: 1,
        },
        {
          image: CoffeChocolate,
          options: ['com leite', 'especial'],
          type: 'Chocolate Quente',
          description:
            'Bebida feita com chocolate dissolvido no leite quente e café',
          price: '9,50',
          quantity: 1,
        },
        {
          image: Cuban,
          options: ['especial', 'alcoólico', 'gelado'],
          type: 'Cubano',
          description:
            'Drink gelado de café expresso com rum, creme de leite e hortelã',
          price: '10,00',
          quantity: 1,
        },
        {
          image: Havain,
          options: ['especial'],
          type: 'Havaiano',
          description: 'Bebida adocicada preparada com café e leite de coco',
          price: '10,50',
          quantity: 1,
        },
        {
          image: Arabian,
          options: ['especial'],
          type: 'Árabe',
          description: 'Bebida preparada com grãos de café árabe e especiarias',
          price: '11,00',
          quantity: 1,
        },
        {
          image: Ireland,
          options: ['especial', 'alcoólico'],
          type: 'Irlandês',
          description:
            'Bebida a base de café, uísque irlandês, açúcar e chantilly',
          price: '11,50',
          quantity: 1,
        },
      ],
    })
  const { coffeList } = listCoffeDelivery

  function onIncreaseItem(type: string) {
    const increasedItem = coffeList.find((item) => item.type === type)
    console.table(increasedItem)
    if (increasedItem) {
      setListCoffeDelivery({
        coffeList: coffeList.map((item) => {
          return {
            ...item,
            quantity: item.quantity >= 1 ? item.quantity + 1 : item.quantity,
          }
        }),
      })
    }
    setListCoffeDelivery({
      coffeList,
    })
  }
  function onDecreaceItem(type: string) {
    const decreacedItem = coffeList.find((item) => item.type === type)
    console.table(decreacedItem)
    if (decreacedItem) {
      setListCoffeDelivery({
        coffeList: coffeList.map((item) => {
          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
          }
        }),
      })
    }
    setListCoffeDelivery({
      coffeList,
    })
  }

  return (
    <CoffeListContext.Provider
      value={{
        coffeList,
        onIncreaseItem,
        onDecreaceItem,
      }}
    >
      {children}
    </CoffeListContext.Provider>
  )
}
