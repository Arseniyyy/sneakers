import { useState, useEffect } from 'react'
import { Item } from 'types/Item'
import { setItems } from 'store/stateFunctions'
import { mainItemsSlug } from 'settings/endpoints'
import { Provider } from 'react-redux'
import { store } from 'store'
import Navbar from 'components/Navbar'
import Main from 'components/Main'
import { Route, Routes } from 'react-router-dom'
import NotFound from 'components/NotFound'

function App() {
  const [mainPageItems, setMainItems] = useState<Array<Item>>([])

  useEffect(() => {
    setItems(mainItemsSlug, setMainItems)
  }, [])

  return <div>
    <Provider store={store}>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={
          <Main
            items={mainPageItems}
          />
        }
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
    </Provider>
  </div>

}

export default App
