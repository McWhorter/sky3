import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { TamaguiProvider } from '../lib/TamaguiProvider'

// Custom render function that wraps components with TamaguiProvider
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <TamaguiProvider>
      {children}
    </TamaguiProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
