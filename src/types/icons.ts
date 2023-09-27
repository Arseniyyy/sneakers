type StrokeLinecapType = "butt" | "round" | "square" | "inherit" | undefined
type StrokeLinejoinType = "miter" | "round" | "bevel" | "inherit" | undefined
type FillRuleType = "nonzero" | "evenodd" | "inherit" | undefined

export interface CommonIconProps {
  className?: string
  width: string | number
  height: string | number
  viewBox: string
  fill: string | undefined
  pathFill?: string | undefined
  opacity?: string
  stroke?: string
  strokeWidth?: string
  strokeLinecap?: StrokeLinecapType
  strokeLinejoin?: StrokeLinejoinType
  fillRule?: FillRuleType
  clipRule?: number | string | undefined
  isFillChanged?: boolean
  isBackgroundColorStoney?: boolean
  changeColorOnHover: boolean
  notAnimated?: boolean
  paths: Array<[d: string, opacity?: string]>
}

export interface IIconProps {
  className?: string
  width: string | number
  height: string | number
}
