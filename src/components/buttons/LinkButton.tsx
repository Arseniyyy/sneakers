interface Props {
  href: string
  text: string
}

const LinkButton = ({ href, text }: Props) => {
  return <div>
    <a href={href}>
      <button className="border-2 text-black px-4 py-2 rounded-full transition-colors hover:bg-black hover:text-white">
        {text}
      </button>
    </a>
  </div>
}

export default LinkButton
