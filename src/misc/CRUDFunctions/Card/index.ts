import React from 'react'
import { AxiosInstance } from 'axios'
import { Dispatch } from 'redux'
import { AnyAction } from 'redux'
import { ActionTypes } from 'store'
import { dispatchAddItem } from 'store/stateFunctions'

export async function postItem(slug: string, payload: any, requiredStatus: number,
  instance: AxiosInstance, dispatch: Dispatch<AnyAction>,
  isAddedToCart: boolean, setIsAddedToCart: React.Dispatch<React.SetStateAction<boolean>>
): Promise<number> {
  /* Makes a post request to the server and changes the state if `isAddedToCart` variable. Required status is 201 (created). */
  const response = await instance.post(slug, payload)

  if (response.status === requiredStatus) {
    setIsAddedToCart(!isAddedToCart)
    dispatchAddItem(dispatch, ActionTypes.addItem, payload)
    return response.status
  }

  const errorMessage = `Object was not created. Error: ${response.statusText}. Status code: ${response.status}`
  console.error(errorMessage)
  throw new Error(errorMessage)
}
