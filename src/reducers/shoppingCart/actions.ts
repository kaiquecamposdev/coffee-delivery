import { CoffeListType } from '../../contexts/ShoppingCartContext'

export enum ActionTypes {
  ADD_ITEM_SHOPPING_CART = 'ADD_ITEMS_SHOPPING_CART',
  REMOVE_ITEM_SHOPPING_CART = 'REMOVE_ITEM_SHOPPING_CART',
  INCREASE_QUANTITY_ITEM_SHOPPING_CART = 'INCREASE_QUANTITY_ITEM_SHOPPING_CART',
  DECREASE_QUANTITY_ITEM_SHOPPING_CART = 'DECREASE_QUANTITY_ITEM_SHOPPING_CART',
}

export function addItemShoppingCartAction(data: CoffeListType[], type: string) {
  return {
    type: ActionTypes.ADD_ITEM_SHOPPING_CART,
    payload: {
      data,
      type,
    },
  }
}
export function removeItemTheShoppingCartAction(type: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_SHOPPING_CART,
    payload: {
      type,
    },
  }
}
export function increaseItemTheShoppingCartAction(type: string) {
  return {
    type: ActionTypes.INCREASE_QUANTITY_ITEM_SHOPPING_CART,
    payload: {
      type,
    },
  }
}
export function decreaseItemTheShoppingCartAction(type: string) {
  return {
    type: ActionTypes.DECREASE_QUANTITY_ITEM_SHOPPING_CART,
    payload: {
      type,
    },
  }
}
