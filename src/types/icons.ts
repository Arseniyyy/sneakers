type StrokeLinecapType = "butt" | "round" | "square" | "inherit" | undefined
type StrokeLinejoinType = "miter" | "round" | "bevel" | "inherit" | undefined
type FillRuleType = "nonzero" | "evenodd" | "inherit" | undefined

export interface ICommonIconProps {
  className?: string
  width: string
  height: string
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
  canBeHovered: boolean
  notAnimated?: boolean
  paths: Array<[d: string, opacity?: string]>
}

export interface IIconProps {
  className?: string
  width: string
  height: string
}
