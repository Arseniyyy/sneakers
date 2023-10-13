import { useForm, SubmitHandler } from "react-hook-form"
import SearchIcon from 'components/Icons/SearchIcon'

interface Props {
  className?: string
}

type Inputs = {
  searchValue: string,
  exampleRequired: string,
}

const SearchForm = ({ className }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  return <div className={`${className} flex border-solid border-primary-300 rounded-full px-2 py-1`}>
    <SearchIcon className="opacity-50 mx-2" width={25} height={25} />
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="w-[200px]" placeholder="I want to find..." {...register("searchValue")} />
    </form>
  </div>
}

export default SearchForm
