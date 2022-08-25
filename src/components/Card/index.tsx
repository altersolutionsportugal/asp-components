import React from 'react'

type CardProps = {
  children: React.ReactNode,
  /**
   * @description
   * The onClick is optional
   * @default
   * none
   * @example
   * <Card onClick={handleOnClick}>...</Card>
   */
  onClick?: () => void,
}

export const Card = ({ children, onClick }: CardProps) => (
  <div aria-hidden="true" onClick={onClick}>
    { children }
  </div>
)
