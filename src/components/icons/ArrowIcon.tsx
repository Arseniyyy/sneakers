import CommonIcon from './CommonIcon'
import { IIconProps } from 'types/icons'

const ArrowIcon = ({ className, width, height }: IIconProps) => {
  return <CommonIcon
    className={className}
    width={width}
    height={height}
    viewBox="0 0 16 14"
    fill="none"
    notAnimated={true}
    stroke="#fff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    changeColorOnHover={false}
    paths={[
      ["M1 7H14.7143"],
      ["M8.71436 1L14.7144 7L8.71436 13"]
    ]}
  />
}

export default ArrowIcon
