import { useState, useEffect } from 'react'
import Card from 'components/Card'
import useMediaQuery from 'hooks/useMediaQuery'
import { smallScreens } from 'screenDefinitions'
import SearchForm from 'components/forms/SearchForm'
import { Item } from 'types/card'
import { setItems } from 'misc/CRUDFunctions'

const Main = () => {
  const slug = "items"
  const endpoint = `https://651ff1f2906e276284c3c49a.mockapi.io/${slug}`
  const [mainItems, setMainItems] = useState<Array<Item>>([])
  const isAboveMediumScreens = useMediaQuery(smallScreens)
  const header = "ALL SNEAKERS"

  useEffect(() => {
    setItems(endpoint, setMainItems)
  }, [])

  return <div>
    <div className={`flex flex-wrap justify-between ${!isAboveMediumScreens && 'flex-col items-center'}`}>
      <h1 className={`font-extrabold text-4xl mx-9 my-5 ${!isAboveMediumScreens && 'text-center'}`}>
        {header}
      </h1>
      <SearchForm className={`items-center  ${isAboveMediumScreens && 'mr-16 my-5'}`} />
    </div>
    <div className="flex flex-wrap justify-center py-2">
      {mainItems.map((item: Item, index) => {
        return <Card
          key={index}
          title={item.title}
          src={item.src}
          price={item.price}
          onAddToCart={obj => console.log(obj)}
        />
      })}
    </div>
  </div>
}

export default Main
