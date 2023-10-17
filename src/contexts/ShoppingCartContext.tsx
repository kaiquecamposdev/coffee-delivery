import { ReactNode, createContext, useReducer } from 'react'
import * as z from 'zod'
import {
  addItemShoppingCartAction,
  decreaseItemTheShoppingCartAction,
  increaseItemTheShoppingCartAction,
  removeItemTheShoppingCartAction,
} from '../reducers/shoppingCart/actions'
import { shoppingCartReducer } from '../reducers/shoppingCart/reducer'

export type CoffeListType = {
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
  total: number
}
export const schemaForm = z.object({
  cep: z
    .string()
    .min(1, 'Cep incorreto')
    .max(8)
    .regex(/^\d{8}$/)
    .or(
      z
        .string()
        .min(1, 'Cep incorreto')
        .max(9)
        .regex(/^\d{5}-\d{3}$/),
    ),
  street: z.string().min(1, 'Rua é requerido'),
  streetNumber: z.string().min(1, 'Número da rua é requerido'),
  adjunt: z.string().optional(),
  neighborhood: z.string().min(1, 'Bairro é requerido'),
  city: z.string().min(1, 'Cidade é requerido'),
  state: z.string().min(1).max(2, 'Estado é requerido'),
  methodPayments: z.enum(['credito', 'debito', 'dinheiro']),
})
export type SchemaFormType = z.infer<typeof schemaForm>
type ShoppingCartContextType = {
  children: ReactNode
}
interface ShoppingCartContextProps {
  shoppingCartState: CoffeListType[]
  increaseItemTheShoppingCart: (type: string) => void
  decreaseItemTheShoppingCart: (type: string) => void
  addItemShoppingCart: (data: CoffeListType[], type: string) => void
  removeItemTheShoppingCart: (type: string) => void
}
export const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextType) {
  const [shoppingCartState, dispatch] = useReducer(
    shoppingCartReducer,
    [],
    (initialState) => {
      const shoppingCartStoredAsJSON = localStorage.getItem(
        '@ignite-coffeDelivery:shopping-cart-state-1.0.0',
      )
      if (shoppingCartStoredAsJSON) {
        const { shoppingCart } = JSON.parse(shoppingCartStoredAsJSON)
        return shoppingCart
      }
      return initialState
    },
  )

  function addItemShoppingCart(data: CoffeListType[], type: string) {
    dispatch(addItemShoppingCartAction(data, type))
  }
  function increaseItemTheShoppingCart(type: string) {
    dispatch(increaseItemTheShoppingCartAction(type))
  }
  function decreaseItemTheShoppingCart(type: string) {
    dispatch(decreaseItemTheShoppingCartAction(type))
  }
  function removeItemTheShoppingCart(type: string) {
    dispatch(removeItemTheShoppingCartAction(type))
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartState,
        addItemShoppingCart,
        increaseItemTheShoppingCart,
        decreaseItemTheShoppingCart,
        removeItemTheShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
