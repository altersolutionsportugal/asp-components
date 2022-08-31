import { render } from '@testing-library/react'

import Text from '.'

describe('Text', () => {
  it('render component Text', () => {
    const { getByText } = render(<Text>Hello</Text>)

    expect(getByText('Hello')).toBeInTheDocument()
  })

  it('render component Text type h1', () => {
    const { container } = render(<Text type="h1">Hello</Text>)

    expect(container.getElementsByTagName('h1').length).toBe(1)
  })

  it('render component Text type h2', () => {
    const { container } = render(<Text type="h2">Hello</Text>)

    expect(container.getElementsByTagName('h2').length).toBe(1)
  })

  it('render component Text type h3', () => {
    const { container } = render(<Text type="h3">Hello</Text>)

    expect(container.getElementsByTagName('h3').length).toBe(1)
  })

  it('render component Text type h4', () => {
    const { container } = render(<Text type="h4">Hello</Text>)

    expect(container.getElementsByTagName('h4').length).toBe(1)
  })

  it('render component Text type h5', () => {
    const { container } = render(<Text type="h5">Hello</Text>)

    expect(container.getElementsByTagName('h5').length).toBe(1)
  })

  it('render component Text type h6', () => {
    const { container } = render(<Text type="h6">Hello</Text>)

    expect(container.getElementsByTagName('h6').length).toBe(1)
  })

  it('render component Text type p', () => {
    const { container } = render(<Text type="p">Hello</Text>)

    expect(container.getElementsByTagName('p').length).toBe(1)
  })

  it('render component Text type span', () => {
    const { container } = render(<Text type="span">Hello</Text>)

    expect(container.getElementsByTagName('span').length).toBe(1)
  })

  it('render component Text type small', () => {
    const { container } = render(<Text type="small">Hello</Text>)

    expect(container.getElementsByTagName('small').length).toBe(1)
  })

  it('render component Text type b', () => {
    const { container } = render(<Text type="b">Hello</Text>)

    expect(container.getElementsByTagName('b').length).toBe(1)
  })

  it('render component Text type strong', () => {
    const { container } = render(<Text type="strong">Hello</Text>)

    expect(container.getElementsByTagName('strong').length).toBe(1)
  })

  it('render component Text type label', () => {
    const { container } = render(<Text type="label">Hello</Text>)

    expect(container.getElementsByTagName('label').length).toBe(1)
  })
})
