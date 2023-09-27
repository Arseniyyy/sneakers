interface Props {
  className?: string
  backgroundColor: string
  href: string
  text: string
}

const LinkButton = ({ className, backgroundColor, href, text }: Props) => {
  return <div className={className}>
    <a href={href}>
      <button className={`bg-${backgroundColor} border-2 text-black px-4 py-2 rounded-full transition-colors hover:bg-black-full hover:text-white-full`}>
        {text}
      </button>
    </a>
  </div>
}

export default LinkButton
