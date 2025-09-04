import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../../../test/test-utils'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('renders with title', () => {
    render(<Button title="Click me" onPress={vi.fn()} />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onPress when clicked', async () => {
    const user = userEvent.setup()
    const onPress = vi.fn()
    
    render(<Button title="Click me" onPress={onPress} />)
    
    await user.click(screen.getByText('Click me'))
    expect(onPress).toHaveBeenCalledTimes(1)
  })

  it('renders different variants', () => {
    const { rerender } = render(<Button title="Primary" variant="primary" onPress={vi.fn()} />)
    expect(screen.getByText('Primary')).toBeInTheDocument()

    rerender(<Button title="Secondary" variant="secondary" onPress={vi.fn()} />)
    expect(screen.getByText('Secondary')).toBeInTheDocument()

    rerender(<Button title="Outline" variant="outline" onPress={vi.fn()} />)
    expect(screen.getByText('Outline')).toBeInTheDocument()
  })

  it('renders different sizes', () => {
    const { rerender } = render(<Button title="Small" size="small" onPress={vi.fn()} />)
    expect(screen.getByText('Small')).toBeInTheDocument()

    rerender(<Button title="Medium" size="medium" onPress={vi.fn()} />)
    expect(screen.getByText('Medium')).toBeInTheDocument()

    rerender(<Button title="Large" size="large" onPress={vi.fn()} />)
    expect(screen.getByText('Large')).toBeInTheDocument()
  })

  it('handles disabled state', async () => {
    const user = userEvent.setup()
    const onPress = vi.fn()
    
    render(<Button title="Disabled" onPress={onPress} disabled />)
    
    const button = screen.getByText('Disabled')
    expect(button).toBeInTheDocument()
    
    // Try to click disabled button
    await user.click(button)
    expect(onPress).not.toHaveBeenCalled()
  })

  it('applies custom props', () => {
    render(<Button title="Custom" onPress={vi.fn()} testID="custom-button" />)
    expect(screen.getByTestId('custom-button')).toBeInTheDocument()
  })

  it('has accessible button role', () => {
    render(<Button title="Accessible" onPress={vi.fn()} />)
    // Now using Tamagui's actual Button component which has proper semantics
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Accessible')).toBeInTheDocument()
  })
})
