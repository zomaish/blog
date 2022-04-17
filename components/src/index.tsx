import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <h1>Components library</h1>
  </StrictMode>
)
