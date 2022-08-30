import { render } from '@testing-library/react'

import Button from '.'

describe('renders component Button', () => {
  it('should create snapShot', () => {
    const { container } = render(<Button><h1>Hello</h1></Button>)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render component with children', () => {
    const { getByText } = render(<Button><h1>Hello</h1></Button>)

    expect(getByText('Hello')).toBeInTheDocument()
  })
})
