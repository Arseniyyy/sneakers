import { Action, createStore, Reducer } from 'redux'
import { Item } from 'types/Item'

interface A extends Action {
  payload: Item
}

export interface Items {
  items: Item[]
}

export enum ActionTypes {
  addItem
}

const defaultState: Items = {
  items: [],
}

function reducer(state: any = defaultState, action: A): Reducer<any, A> {
  switch (action.type) {
    case ActionTypes.addItem:
      return {...state, items: state.items.concat([action.payload])}
    default:
      return state
  }
}

const store = createStore(reducer)

export { store }
