import { Action, createStore, Reducer } from 'redux'
import { Item } from 'types/Item'

interface A extends Action {
  payload: Item
  sum: number
}

export interface State {
  items: Array<Item>
  sum: number
}

export enum ActionTypes {
  addItem,
  setItems,
  setSum,
}

const defaultState: State = {
  items: [],
  sum: 0,
}

function reducer(state: any = defaultState, action: A): Reducer<any, A> {
  switch (action.type) {
    case ActionTypes.addItem:
      return {
        ...state,
        items: state.items.concat([action.payload]),
        sum: state.sum + action.payload.price
      }
    case ActionTypes.setItems:
      return {
        ...state,
        items: action.payload,
      }
    case ActionTypes.setSum:
      return {
        ...state,
        sum: action.sum
      }
    default:
      return state
  }
}

const store = createStore(reducer)

export { store }
