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
import { produce } from 'immer'

import { ReactNode, createContext, useState } from 'react'
import { CoffeList } from '../pages/Home/components/CoffeList'

interface CoffeListProps {
  image: string
  options: [
    tradicional?: string,
    comLeite?: string,
    gelado?: string,
    especial?: string,
    alcoolico?: string,
  ]
  type: string
  description: string
  price: string
  quantity: number
}
export type DecreaceItemPropsType = {
  onDecreaceItem: (type: string) => void
}
export type IncreaseItemPropsType = {
  onIncreaseItem: (type: string) => void
}
interface ListCoffeDeliveryProps {
  coffeList: CoffeListProps[]
  itemsTheShoppingCart: CoffeListProps[]
  onIncreaseItem: (type: string) => void
  onDecreaceItem: (type: string) => void
  increaseItemsInShoppingCart: (type: string) => void
}
export const CoffeListContext = createContext({} as ListCoffeDeliveryProps)

interface CoffeListContextProviderProps {
  children: ReactNode
}

export function CoffeListContextProvider({
  children,
}: CoffeListContextProviderProps) {
  const [coffeList, setCoffeList] = useState<CoffeListProps[]>([
    {
      image: Express,
      options: ['tradicional'],
      type: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '5,00',
      quantity: 0,
    },
    {
      image: ExpressAmerican,
      options: ['tradicional'],
      type: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '5,50',
      quantity: 0,
    },
    {
      image: ExpressCream,
      options: ['tradicional'],
      type: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: '6,00',
      quantity: 0,
    },
    {
      image: ExpressIce,
      options: ['tradicional', 'gelado'],
      type: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: '6,50',
      quantity: 0,
    },
    {
      image: CoffeWithMilk,
      options: ['tradicional', 'com leite'],
      type: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: '7,00',
      quantity: 0,
    },
    {
      image: Latte,
      options: ['tradicional', 'com leite'],
      type: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: '7,50',
      quantity: 0,
    },
    {
      image: Capuccino,
      options: ['tradicional', 'com leite'],
      type: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: '8,00',
      quantity: 0,
    },
    {
      image: Macchiato,
      options: ['tradicional', 'com leite'],
      type: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: '8,50',
      quantity: 0,
    },
    {
      image: Mocaccino,
      options: ['tradicional', 'com leite'],
      type: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: '9,00',
      quantity: 0,
    },
    {
      image: CoffeChocolate,
      options: ['com leite', 'especial'],
      type: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: '9,50',
      quantity: 0,
    },
    {
      image: Cuban,
      options: ['especial', 'alcoólico', 'gelado'],
      type: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: '10,00',
      quantity: 0,
    },
    {
      image: Havain,
      options: ['especial'],
      type: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: '10,50',
      quantity: 0,
    },
    {
      image: Arabian,
      options: ['especial'],
      type: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: '11,00',
      quantity: 0,
    },
    {
      image: Ireland,
      options: ['especial'],
      type: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: '11,50',
      quantity: 0,
    },
  ])
  const [itemsTheShoppingCart, setItemsTheShoppingCart] = useState<
    CoffeListProps[]
  >([])

  function onIncreaseItem(type: string) {
    const updatedState = produce(coffeList, (draft) => {
      const typeForIncrease = draft.find((item) => item.type === type)
      const indexTheTypeForIncrease = draft.findIndex(
        (item) => item.type === type,
      )
      if (typeForIncrease) {
        draft[indexTheTypeForIncrease].quantity++
      }
    })
    setCoffeList(updatedState)
  }
  function onDecreaceItem(type: string) {
    const updatedState = produce(coffeList, (draft) => {
      const typeForDecreace = draft.find((item) => item.type === type)
      const indexTheTypeForDecreace = draft.findIndex(
        (item) => item.type === type,
      )
      if (typeForDecreace && draft[indexTheTypeForDecreace].quantity > 0) {
        draft[indexTheTypeForDecreace].quantity--
      }
    })
    setCoffeList(updatedState)
  }
  function increaseItemsInShoppingCart(type: string) {
    const updatedState: any = produce(coffeList, (draft) => {
      const indexTheTypeForDecreace = draft.findIndex(
        (item) => item.quantity > 0,
      )
      const typeForIncreaseInShoppingCart =
        draft[indexTheTypeForDecreace].type === type
      if (
        typeForIncreaseInShoppingCart &&
        draft[indexTheTypeForDecreace].quantity > 0
      ) {
        return draft[indexTheTypeForDecreace]
      }
    })
    console.log(updatedState)
    setItemsTheShoppingCart(updatedState)
  }

  return (
    <CoffeListContext.Provider
      value={{
        coffeList,
        itemsTheShoppingCart,
        onIncreaseItem,
        onDecreaceItem,
        increaseItemsInShoppingCart,
      }}
    >
      {children}
    </CoffeListContext.Provider>
  )
}
