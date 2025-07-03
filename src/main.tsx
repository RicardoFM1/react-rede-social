import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { MainContextProvider } from './Context/MainContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <MainContextProvider>

    <App />
    </MainContextProvider>
    </BrowserRouter>
  </StrictMode>
)
