import React from 'react'

export type FlexProps = {
  children: React.ReactNode
  justify?:
    'center' |
    'start' |
    'end' |
    'flex-start' |
    'flex-end' |
    'left' |
    'right' |
    'space-between' |
    'space-around' |
    'space-evenly' |
    'stretch' |
    'inherit'
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'inherit'
  wrap?: 'nowrap' | 'wrap-reverse' | 'wrap' | 'inherit'
  items?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | 'inherit'
  self?:
    'auto' |
    'normal' |
    'center' |
    'start' |
    'end' |
    'self-start' |
    'self-end' |
    'flex-start' |
    'flex-end' |
    'baseline' |
    'inherit'
  content?:
    'center' |
    'start' |
    'end' |
    'flex-start' |
    'flex-end' |
    'space-between' |
    'space-around' |
    'space-evenly' |
    'stretch' |
    'inherit'
  gap?: string
}
