import userEvent from '@testing-library/user-event'
import { render, waitFor } from '@testing-library/react'

import { Modal as ModalComponent, ModalContent, ModalTrigger } from '../index'

const ModalComponentTest = () => (
  <ModalComponent>
    <ModalTrigger asChild>
      <button>Modal Trigger</button>
    </ModalTrigger>
    <ModalContent>
      <h1>Hello Modal</h1>
    </ModalContent>
  </ModalComponent>
)

describe('renders component Modal', () => {
  it('should render component with button trigger', () => {
    const { getByText } = render(<ModalComponentTest />)

    expect(getByText('Modal Trigger')).toBeInTheDocument()
  })

  it('should render content children modal', async () => {
    const { getByText } = render(<ModalComponentTest />)

    const button = getByText('Modal Trigger')

    userEvent.click(button)

    await waitFor(() => {
      expect(getByText('Hello Modal')).toBeInTheDocument()
    })
  })
})
