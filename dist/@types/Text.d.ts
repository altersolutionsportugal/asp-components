import { React } from 'react'

export type TextTypeProps = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small' | 'strong' | 'b' | 'label'

export type TextProps = {
  type?: TextTypeProps
  weight?: 'regular' | 'normal' | 'bold'
  color?: string
  children: React.ReactNode | string
}
