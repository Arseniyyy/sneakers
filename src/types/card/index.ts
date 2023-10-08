export interface Item {
  src: string
  title: string
  price: number
}

export interface CardItem extends Item {
  onAddToCart: (obj: Item) => void
}
