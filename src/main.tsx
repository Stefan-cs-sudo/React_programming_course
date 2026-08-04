import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import Game from './TIC-TAC-TOE.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Game />
  </StrictMode>,
)
