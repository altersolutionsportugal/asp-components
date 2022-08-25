import React from 'react'
import { render } from '@testing-library/react'

import { Card } from '.'

test('renders component Card', () => {
  const { container } = render(<Card />)
  expect(container.firstChild).toMatchSnapshot()
})
