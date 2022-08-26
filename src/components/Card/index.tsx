import React from 'react'
// eslint-disable-next-line import/no-unresolved
import { CardProps } from '../../@types/Card'

export const Card = ({ children, onClick }: CardProps) => (
  <div aria-hidden="true" onClick={onClick}>
    { children }
  </div>
)
