import Card from './Card'
import useMediaQuery from 'hooks/useMediaQuery'
import { smallScreens } from 'screenDefinitions'

const Main = () => {
  const isAboveMediumScreens = useMediaQuery(smallScreens)

  return <div>
    <h2 className={`font-bold text-4xl mx-9 mt-5 ${!isAboveMediumScreens ? 'text-center' : ''}`}>
      ALL SNEAKERS
    </h2>
    <div className="flex flex-wrap justify-center py-2">
      <Card text="1" />
      <Card text="2" />
      <Card text="3" />
      <Card text="4" />
      <Card text="4" />
      <Card text="4" />
      <Card text="4" />
      <Card text="5" />
    </div>
  </div>
}

export default Main
