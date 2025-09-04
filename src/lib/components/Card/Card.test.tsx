import { describe, it, expect } from 'vitest'
import { render, screen } from '../../../test/test-utils'
import { Card } from './Card'

describe('Card', () => {
  it('renders children content', () => {
    render(
      <Card>
        <div>Card content</div>
      </Card>
    )
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('renders with different elevation levels', () => {
    const { rerender } = render(
      <Card elevation={1} testID="card">
        Content
      </Card>
    )
    expect(screen.getByTestId('card')).toBeInTheDocument()

    rerender(
      <Card elevation={2} testID="card">
        Content
      </Card>
    )
    expect(screen.getByTestId('card')).toBeInTheDocument()

    rerender(
      <Card elevation={3} testID="card">
        Content
      </Card>
    )
    expect(screen.getByTestId('card')).toBeInTheDocument()

    rerender(
      <Card elevation={4} testID="card">
        Content
      </Card>
    )
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })

  it('applies custom padding and margin', () => {
    render(
      <Card padding="$6" margin="$4" testID="custom-card">
        Custom styled card
      </Card>
    )
    expect(screen.getByTestId('custom-card')).toBeInTheDocument()
    expect(screen.getByText('Custom styled card')).toBeInTheDocument()
  })

  it('accepts custom background color', () => {
    render(
      <Card backgroundColor="#f0f0f0" testID="colored-card">
        Colored card
      </Card>
    )
    expect(screen.getByTestId('colored-card')).toBeInTheDocument()
  })

  it('renders with custom border radius', () => {
    render(
      <Card borderRadius="$6" testID="rounded-card">
        Rounded card
      </Card>
    )
    expect(screen.getByTestId('rounded-card')).toBeInTheDocument()
  })

  it('handles complex content', () => {
    render(
      <Card>
        <div>
          <h2>Card Title</h2>
          <p>Card description</p>
          <button>Action</button>
        </div>
      </Card>
    )
    
    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card description')).toBeInTheDocument()
    expect(screen.getByText('Action')).toBeInTheDocument()
  })

  it('applies additional props', () => {
    render(
      <Card testID="props-card" data-testattr="test-value">
        Props test
      </Card>
    )
    
    const card = screen.getByTestId('props-card')
    expect(card).toBeInTheDocument()
    expect(card).toHaveAttribute('data-testattr', 'test-value')
  })
})
