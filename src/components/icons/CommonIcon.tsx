import { useState } from 'react'
import { CommonIconProps } from 'types/icons'

const CommonIcon = ({
  className,
  onClick,
  width,
  height,
  viewBox,
  fill,
  pathFill,
  stroke,
  strokeWidth,
  strokeLinecap,
  strokeLinejoin,
  fillRule,
  clipRule,
  isFillChanged,
  isBackgroundColorStoney,
  changeColorOnHover,
  notAnimated,
  paths,
}: CommonIconProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const pathClassName = isFillChanged ?
    `transition ${isHovered ? 'fill-orange-full stroke-none' : 'stroke-none'}`
    :
    `transition ${isHovered ? 'stroke-orange-full' : 'stroke-black'}`

  return (
    <svg
      onClick={onClick}
      className={`${className} ${notAnimated ? '' : 'transition hover:scale-125'} ${isBackgroundColorStoney ? `bg-white-0.5` : ''}`}
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">

        {paths.map((array, index) => {
          return <path
            className={changeColorOnHover ? pathClassName : ''}
            key={index}
            opacity={array[1]}
            d={array[0]}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            strokeLinejoin={strokeLinejoin}
            fill={pathFill}
            fillRule={fillRule}
            clipRule={clipRule}
          ></path>
        })}
      </g>
    </svg>
  )
}

export default CommonIcon
