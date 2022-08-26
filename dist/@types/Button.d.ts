import React from 'react'

export type ButtonProps = {
  children: React.ReactNode,
  /**
   * @description
   * The onClick is optional
   * @default
   * none
   * @example
   * <Button onClick={handleOnClick}>...</Button>
   */
  onClick?: () => void,
}
