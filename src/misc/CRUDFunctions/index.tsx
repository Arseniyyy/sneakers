import axios, { AxiosResponse } from 'axios'
import { Item } from 'types/card'

function setItems(endpoint: string, setFunction: (items: Array<Item>) => void): void {
  let items: Array<Item>
  const result: Promise<AxiosResponse<Item[]>> = axios.get(endpoint)
  result.then((r: AxiosResponse<Item[]>) => {
    items = r.data
    setFunction([...items])
  })
}

export {
  setItems
}
