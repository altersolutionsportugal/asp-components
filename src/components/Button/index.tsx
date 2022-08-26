/* eslint-disable import/no-import-module-exports */
import React from 'react'
// eslint-disable-next-line import/no-unresolved
import { ButtonProps } from '../../@types/Button'

export const Button = ({ children, onClick }: ButtonProps) => (
  <div aria-hidden="true" onClick={onClick}>
    { children }
  </div>
)
