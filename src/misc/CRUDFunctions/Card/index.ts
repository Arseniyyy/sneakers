import { AxiosInstance } from 'axios'
import { Dispatch } from 'react'
import { AnyAction } from 'redux'
import { ActionTypes } from 'store'
import { dispatchAddItem } from 'store/stateFunctions'

export async function postItem(slug: string, payload: any, requiredStatus: number, instance: AxiosInstance, dispatch: Dispatch<AnyAction>): Promise<number> {
  // const response = await instance.post(slug, payload)

  // if (response.status === requiredStatus) {

  //   return response.status
  // }
  dispatchAddItem(dispatch, ActionTypes.addItem, [{id: 1, src: '/1/2/3', title: 'T', price: 123}])
}
