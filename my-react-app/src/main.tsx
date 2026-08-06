import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import List from './App4_Exercise/App.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <List />
  </StrictMode>,
)
