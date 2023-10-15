interface Props {
  className: string
  value: number
}

function BadgeIcon({ className, value }: Props) {
  return <div className={`${className} bg-black-full text-white-full rounded-full w-6 h-6 text-center font-bold`}>
    {value}
  </div>
}

export default BadgeIcon
