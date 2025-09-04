import { describe, it, expect } from 'vitest'
import { render, screen } from '../test/test-utils'
import { TamaguiProvider } from './TamaguiProvider'

describe('TamaguiProvider', () => {
  it('renders children correctly', () => {
    render(
      <TamaguiProvider>
        <div>Provider test content</div>
      </TamaguiProvider>
    )
    expect(screen.getByText('Provider test content')).toBeInTheDocument()
  })

  it('provides Tamagui context to children', () => {
    // This test verifies that the provider doesn't crash and renders
    // The actual Tamagui context functionality is tested through component tests
    render(
      <TamaguiProvider>
        <div data-testid="nested-content">
          <span>Nested content with Tamagui context</span>
        </div>
      </TamaguiProvider>
    )
    
    expect(screen.getByTestId('nested-content')).toBeInTheDocument()
    expect(screen.getByText('Nested content with Tamagui context')).toBeInTheDocument()
  })

  it('accepts custom config prop', () => {
    // Test that custom config can be passed without breaking
    const customConfig = null // In real usage, this would be a custom Tamagui config
    
    render(
      <TamaguiProvider config={customConfig}>
        <div>Custom config test</div>
      </TamaguiProvider>
    )
    
    expect(screen.getByText('Custom config test')).toBeInTheDocument()
  })
})
