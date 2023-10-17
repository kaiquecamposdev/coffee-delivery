import { produce } from 'immer'
import { CoffeListType } from '../../contexts/ShoppingCartContext'
import { ActionTypes } from './actions'

type ActionTypesProps = {
  type: ActionTypes
  payload: {
    type?: string
    data?: CoffeListType[]
  }
}

export function shoppingCartReducer(
  state: CoffeListType[] = [],
  action: ActionTypesProps,
) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_SHOPPING_CART:
      {
        const updatedState = produce(
          action.payload.data,
          (draft: CoffeListType[]) => {
            const index = draft.findIndex(
              (item) => item.type === action.payload.type,
            )
            draft[index].total =
              draft[index].quantity *
              Number(draft[index].price.replace(',', '.'))
          },
        )
        const updatedItem = updatedState?.find(
          ({ type }) => type === action.payload.type,
        )
        if (updatedItem && updatedItem.quantity > 0) {
          localStorage.setItem(
            '@ignite-coffeDelivery:shopping-cart-state-1.0.0',
            JSON.stringify({ shoppingCart: [...state, updatedItem] }),
          )
          return [...state, updatedItem]
        }
        return state
      }
      break
    case ActionTypes.INCREASE_QUANTITY_ITEM_SHOPPING_CART:
      {
        const updatedState = produce(state, (draft) => {
          const index = draft.findIndex(
            ({ type }) => type === action.payload.type,
          )
          if (draft[index].quantity >= 1 && draft[index].quantity) {
            draft[index].quantity++
            draft[index].total =
              draft[index].quantity *
              Number(draft[index].price.replace(',', '.'))
          }
        })
        localStorage.setItem(
          '@ignite-coffeDelivery:shopping-cart-state-1.0.0',
          JSON.stringify({ shoppingCart: updatedState }),
        )
        return updatedState
      }
      break
    case ActionTypes.DECREASE_QUANTITY_ITEM_SHOPPING_CART:
      {
        const updatedState = produce(state, (draft) => {
          const index = draft.findIndex(
            ({ type }) => type === action.payload.type,
          )
          if (draft[index].quantity > 1) {
            draft[index].quantity--
            draft[index].total =
              draft[index].quantity *
              Number(draft[index].price.replace(',', '.'))
          }
        })
        localStorage.setItem(
          '@ignite-coffeDelivery:shopping-cart-state-1.0.0',
          JSON.stringify({ shoppingCart: updatedState }),
        )
        return updatedState
      }
      break
    case ActionTypes.REMOVE_ITEM_SHOPPING_CART:
      {
        const updatedState = state.filter(
          ({ type }) => type !== action.payload.type,
        )
        localStorage.setItem(
          '@ignite-coffeDelivery:shopping-cart-state-1.0.0',
          JSON.stringify({ shoppingCart: updatedState }),
        )
        return updatedState
      }
      break
    default:
      return state
  }
}
