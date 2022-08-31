import { render } from '@testing-library/react'

import Flex from '.'

describe('renders component Flex', () => {
  it('should render component with children', () => {
    const { getByText } = render(
      <Flex>
        <h1>Hello</h1>
        <h1>Flex</h1>
      </Flex>,
    )

    expect(getByText('Hello')).toBeInTheDocument()
    expect(getByText('Flex')).toBeInTheDocument()
  })
})
