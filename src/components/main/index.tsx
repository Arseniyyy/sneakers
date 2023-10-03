import Card from './Card'
import useMediaQuery from 'hooks/useMediaQuery'
import { smallScreens } from 'screenDefinitions'
import SearchForm from 'components/forms/SearchForm'
import { mainPageItems } from 'misc/arrayOfItems'
import { Item } from 'types/card'

const Main = () => {
  const isAboveMediumScreens = useMediaQuery(smallScreens)

  return <div>
    <div className={`flex flex-wrap justify-between ${!isAboveMediumScreens ? 'flex-col items-center' : ''}`}>
      <h1 className={`font-extrabold text-4xl mx-9 my-5 ${!isAboveMediumScreens ? 'text-center' : ''}`}>
        ALL SNEAKERS
      </h1>
      <SearchForm className={`items-center  ${isAboveMediumScreens ? 'mr-16 my-5' : ''}`} />
    </div>
    <div className="flex flex-wrap justify-center py-2">
      {mainPageItems.map((item: Item) => {
        return <Card title={item.title} src={item.src} price={item.price} />
      })}

      {/* <Card text="Man sneakers Nike Blazer Mid Seude" /> */}
      {/* <Card text="Man sneakers Nike Blazer Mid Seude" /> */}
      {/* <Card text="Man sneakers Nike Blazer Mid Seude" /> */}
      {/* <Card text="Man sneakers Nike Blazer Mid Seude" /> */}
      {/* <Card text="Man sneakers Nike Blazer Mid Seude" /> */}
      {/* <Card text="Man sneakers Nike Blazer Mid Seude" /> */}
      {/* <Card text="Man sneakers Nike Blazer Mid Seude" /> */}
    </div>
  </div>
}

export default Main
