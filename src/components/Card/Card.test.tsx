import React from 'react'
import { render } from '@testing-library/react'

import { Card } from '.'

describe('renders component Card', () => {
  it('should create snapShot', () => {
    const { container } = render(<Card><h1>Hello</h1></Card>)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render component with children', () => {
    const { getByText } = render(<Card><h1>Hello</h1></Card>)

    expect(getByText('Hello')).toBeInTheDocument()
  })
})
