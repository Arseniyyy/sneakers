import { AxiosResponse } from 'axios'
import { Dispatch } from 'react'
import { AnyAction } from 'redux'
import axios from 'settings/axios'
import { ActionTypes } from 'store'
import { Item } from 'types/Item'

export function setItems(slug: string, setFunction: (items: Array<Item>) => void): void {
  let items: Array<Item>
  const result: Promise<AxiosResponse<Array<Item>>> = axios.get(slug)
  result.then((r: AxiosResponse<Array<Item>>) => {
    items = r.data
    setFunction([...items])
  })
}

export async function getCartItems(slug: string): Promise<Array<Item>> {
  return (await axios.get(slug)).data
}

export function dispatchAddItem(dispatch: Dispatch<AnyAction>, type: ActionTypes, payload: Array<Object>): void {
  payload.map(obj => { console.log(obj) })
  // dispatch({
  //   type,
  //   ...payload.map(obj => { return {obj.keys()[0]} })
  // })
}
