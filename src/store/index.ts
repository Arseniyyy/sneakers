import { Action, Reducer } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { Item } from 'types/Item'

interface A extends Action {
  payload: Item
  sum: number
  id: number
  price: number
}

export interface State {
  items: Array<Item>
  sum: number
}

export enum ActionTypes {
  addItem,
  setItems,
  setSum,
  removeItem,
}

const defaultState: State = {
  items: [],
  sum: 0,
}

function reducer(state: any = defaultState, action: A): Reducer<any, A> {
  switch (action.type) {
    case ActionTypes.addItem:
      /* Data that is being transfered within action: payload.price */
      return {
        ...state,
        items: [...state.items, action.payload],
        sum: state.sum + action.payload.price,
      }
    case ActionTypes.setItems:
      /* Data that is being transfered within action: payload */
      return {
        ...state,
        items: action.payload,
      }
    case ActionTypes.setSum:
      /* Data that is being transfered within action: sum */
      return {
        ...state,
        sum: action.sum
      }
    // case ActionTypes.removeItem:
    //   return {
    //     ...state,
    //     items: [...state.items.slice(0, action.id), ...state.items.slice(action.id + 1)]
    //   }
    case ActionTypes.removeItem:
      /* Data that is being transfered within action: id, itemPrice */
      const items = state.items
      let id = 0
      return {
        ...state,
        // items: state.items.filter((item: Item, _: number) => item.id !== action.id),
        items: [
          ...state.items.slice(0, id),
          ...state.items.slice(id + 1)
        ],
        sum: state.sum - action.price,
      }
    default:
      return state
  }
}

const store = configureStore({
  reducer
})

export { store }
