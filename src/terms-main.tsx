import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Terms } from './Terms.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Terms />
  </StrictMode>,
)
