import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PrintsView } from './views/printsView.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrintsView />
  </StrictMode>,
)
