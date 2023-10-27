import { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { AnyAction } from 'redux'
import axios from 'settings/axios'
import { ActionTypes } from 'store'
import { Item } from 'types/Item'

export function setItems(slug: string, setFunction: (items: Array<Item>) => void): void {
  /* Sets the state to the items that are in the cart. */
  let items: Array<Item>
  const result: Promise<AxiosResponse<Array<Item>>> = axios.get(slug)
  result.then((r: AxiosResponse<Array<Item>>) => {
    items = r.data
    setFunction([...items])
  })
}

export async function getCartItems(slug: string): Promise<Array<Item>> {
  /* Retrieves items that have been added to the cart. */
  return (await axios.get(slug)).data
}

export function dispatchAddItem(dispatch: Dispatch<AnyAction>, type: ActionTypes, payload: Item): void {
  /* Uses `dispatch` function that is built in redux module to update state of items. */
  dispatch({
    type,
    payload
  })
}
