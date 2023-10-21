export interface Item {
  id: number
  src: string
  title: string
  price: number
}

export interface CardItem extends Item {}

export interface MainPageProps {
  items: Array<Item>
}

export interface CartItems extends MainPageProps {}

