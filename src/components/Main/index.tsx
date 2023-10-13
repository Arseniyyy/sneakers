import Card from 'components/Card'
import useMediaQuery from 'hooks/useMediaQuery'
import { smallScreens } from 'screenDefinitions'
import SearchForm from 'components/Forms/SearchForm'
import { Item, MainPageProps } from 'types/Item'

const Main = ({ items }: MainPageProps) => {
  const isAboveMediumScreens = useMediaQuery(smallScreens)
  const header = "ALL SNEAKERS"

  return <div>
    <div className={`flex flex-wrap justify-between ${!isAboveMediumScreens && 'flex-col items-center'}`}>
      <h1 className={`font-extrabold text-4xl mx-9 my-5 ${!isAboveMediumScreens && 'text-center'}`}>
        {header}
      </h1>
      <SearchForm className={`items-center  ${isAboveMediumScreens && 'mr-16 my-5'}`} />
    </div>
    <div className="flex flex-wrap justify-center py-2">
      {items.map((item: Item, index) => {
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
