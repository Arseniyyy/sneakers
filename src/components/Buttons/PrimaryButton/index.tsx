interface Props {
  className?: string
  backgroundColor: string
  text: string
  onClick?: () => void
}

const PrimaryButton = ({ className, backgroundColor, text, onClick}: Props) => {
  return <div className={className}>
    <button
      className={`bg-${backgroundColor} border-2 text-black px-4 py-2 rounded-full transition-colors hover:bg-black-full hover:text-white-full`}
      onClick={onClick}
    >
      {text}
    </button>
  </div>
}

export default PrimaryButton
