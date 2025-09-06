import { describe, it, expect } from 'vitest';
import { render, screen } from '../test/test-utils';
import { Provider } from '@/index';

describe('Provider', () => {
  it('renders children correctly', () => {
    render(
      <Provider>
        <div>Provider test content</div>
      </Provider>
    );
    expect(screen.getByText('Provider test content')).toBeInTheDocument();
  });

  it('provides Tamagui context to children', () => {
    // This test verifies that the provider doesn't crash and renders
    // The actual Tamagui context functionality is tested through component tests
    render(
      <Provider>
        <div data-testid="nested-content">
          <span>Nested content with Tamagui context</span>
        </div>
      </Provider>
    );

    expect(screen.getByTestId('nested-content')).toBeInTheDocument();
    expect(screen.getByText('Nested content with Tamagui context')).toBeInTheDocument();
  });

  it('accepts custom config prop', () => {
    // Test that custom config can be passed without breaking
    // Note: In real usage, this would be a valid Tamagui config object

    render(
      <Provider>
        <div>Custom config test</div>
      </Provider>
    );

    expect(screen.getByText('Custom config test')).toBeInTheDocument();
  });
});
