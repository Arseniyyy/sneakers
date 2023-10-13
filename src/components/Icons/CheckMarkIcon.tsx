import CommonIcon from 'components/Icons/CommonIcon'
import { IconProps } from 'types/icons'

const CheckMarkIcon = ({ className, onClick, width, height }: IconProps) => {
  return <CommonIcon
    className={className}
    onClick={onClick}
    width={width}
    height={height}
    stroke="#000000"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    paths={[
      ["M4 12.6111L8.92308 17.5L20 6.5"]
    ]}
  />
}

export default CheckMarkIcon
