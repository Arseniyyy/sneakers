import { AxiosResponse } from 'axios'
import axios from 'settings/axios'
import { Item } from 'types/Item'

function setItems(slug: string, setFunction: (items: Array<Item>) => void): void {
  let items: Array<Item>
  const result: Promise<AxiosResponse<Array<Item>>> = axios.get(slug)
  result.then((r: AxiosResponse<Array<Item>>) => {
    items = r.data
    setFunction([...items])
  })
}

async function getCartItems(slug: string): Promise<Item[]> {
  return (await axios.get(slug)).data
}

export {
  setItems,
  getCartItems,
}
