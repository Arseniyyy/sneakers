import Card from 'components/Card'
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
      {mainPageItems.map((item: Item, index) => {
        return <Card
          key={index}
          title={item.title}
          src={item.src}
          price={item.price}
        />
      })}
    </div>
  </div>
}

export default Main
