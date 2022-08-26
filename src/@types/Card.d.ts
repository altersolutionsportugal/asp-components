import React from 'react'

export type CardProps = {
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
