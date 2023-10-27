import React from 'react'
type StrokeLinecapType = "butt" | "round" | "square" | "inherit" | undefined
type StrokeLinejoinType = "miter" | "round" | "bevel" | "inherit" | undefined
type FillRuleType = "nonzero" | "evenodd" | "inherit" | undefined

export interface IconProps {
  className?: string
  width: string | number
  height: string | number
  isFillChanged?: boolean
  isBackgroundColorStoney?: boolean
  changeColorOnHover?: boolean
  notAnimated?: boolean
  onClick?: (event?: React.MouseEvent<SVGElement>, ...args: Array<string | number>) => void
}

export interface CommonIconProps extends IconProps {
  viewBox?: string
  fill?: string | undefined
  pathFill?: string | undefined
  opacity?: string
  stroke?: string
  strokeWidth?: string | number
  strokeLinecap?: StrokeLinecapType
  strokeLinejoin?: StrokeLinejoinType
  fillRule?: FillRuleType
  clipRule?: number | string | undefined
  paths: Array<[d: string, opacity?: string]>
}

// export interface ChildIconProps extends IconProps {}
