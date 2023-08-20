import { useState } from 'react'
import { ICommonIconProps } from 'types/icons'

const CommonIcon = ({
  className,
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
  canBeHovered,
  notAnimated,
  paths,
}: ICommonIconProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const pathClassName = isFillChanged ? `transition ${isHovered ? 'fill-orange stroke-none' : 'stroke-none'}` : `transition ${isHovered ? 'stroke-orange' : 'stroke-black'}`

  return (
    <svg
      className={`${className} ${notAnimated ? '' : 'transition hover:scale-125'}`}
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">

        {paths.map((array, index) => {
          return <path
            className={canBeHovered ? pathClassName : ''}
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
