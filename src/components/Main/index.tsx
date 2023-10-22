import Card from 'components/Card'
import useMediaQuery from 'hooks/useMediaQuery'
import { smallScreens } from 'screenDefinitions'
import SearchForm from 'components/Forms/SearchForm'
import { Item, MainPageProps } from 'types/Item'
import React, { useState } from 'react'

const Main = ({ items }: MainPageProps) => {
  const isAboveMediumScreens = useMediaQuery(smallScreens)
  const [searchValue, setSearchValue] = useState<string>('')

  const header = "ALL SNEAKERS"

  function onChangeSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value)
  }
  function filterItems(items: Array<Item>, searchString: string): Array<Item> {
    return items.filter(item => item.title.toLowerCase().includes(searchString.toLowerCase()))
  }
  function onClearSearchValue() {
    setSearchValue('')
  }

  return <div>
    <div className={`flex flex-nowrap justify-between ${!isAboveMediumScreens && 'flex-col items-center'}`}>
      <div className="max-w-3xl break-all">
        <h1 className={`font-extrabold text-4xl mx-9 my-5 ${!isAboveMediumScreens && 'text-center'}`}>
          {searchValue ? `Searching on ${searchValue}` : header}
        </h1>
      </div>
      <SearchForm
        className={`items-center  ${isAboveMediumScreens && 'mr-16 my-5'}`}
        searchValue={searchValue}
        onChangeSearchInput={onChangeSearchInput}
        onClearSearchValue={onClearSearchValue}
      />
    </div>
    <div className="flex flex-wrap justify-center py-2">
      {filterItems(items, searchValue).map((item: Item) => {
        return <Card
          key={item.id}
          id={item.id}
          title={item.title}
          src={item.src}
          price={item.price}
        />
      })}
    </div>
  </div>
}

export default Main
