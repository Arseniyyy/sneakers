import { useForm, SubmitHandler } from "react-hook-form"
import SearchIcon from 'components/Icons/SearchIcon'
import RemoveOrCloseIcon from 'components/Icons/RemoveOrCloseIcon'

interface Props {
  className?: string
  searchValue: string
  onChangeSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClearSearchValue: () => void
}

type Inputs = {
  searchValue: string,
  exampleRequired: string,
}

const SearchForm = ({ className, searchValue, onChangeSearchInput, onClearSearchValue }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  return <div className={`${className} flex border-solid border-primary-300 rounded-full px-2 py-1`}>
    <SearchIcon className="opacity-50 mx-2" width={25} height={25} />
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="w-[200px]"
        placeholder="I want to find..."
        value={searchValue}
        {...register("searchValue", {
          onChange: onChangeSearchInput,
        })}
      />
    </form>
    {searchValue &&
      <button className="ml-2" onClick={onClearSearchValue}>
        <RemoveOrCloseIcon width={20} height={20} />
      </button>
    }
  </div>
}

export default SearchForm
