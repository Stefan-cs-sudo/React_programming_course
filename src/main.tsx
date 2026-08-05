import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import App from './App2_PanelExample/App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <App />
  </StrictMode>,
)
