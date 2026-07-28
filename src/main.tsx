import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyApp from './Buton.tsx'
import Profile from './Heidi.tsx'
let value;
const isLoggedIn = false;

if (isLoggedIn) {
  value = <MyApp />;
} else {
  value = <Profile />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<div>
  {value}
</div>
  </StrictMode>,
)
