import { useState, useEffect } from 'react'
import { setItems } from 'misc/CRUDFunctions'
import { Item } from 'types/Item'
import Navbar from 'components/Navbar'
import Main from 'components/Main'
import { Provider } from 'react-redux'
import { store } from 'reduxStore'
import { mainItemsSlug } from 'settings'

const Root = () => {
  const [mainPageItems, setMainItems] = useState<Array<Item>>([])

  useEffect(() => {
    setItems(mainItemsSlug, setMainItems)
  }, [])

  return <div>
    <Provider store={store}>
      <Navbar />
      <Main
        items={mainPageItems}
      />
    </Provider>
  </div>
}

export default Root
