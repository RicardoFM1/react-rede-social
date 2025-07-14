
import { StrictMode } from "react"
import "./App.module.css"
import { ThemeProvider } from "./Context/context"

import { RotasPrincipal } from "./routes/routes"


function App() {

  return  <>
  <StrictMode>
  <ThemeProvider>
    <RotasPrincipal/> 
  </ThemeProvider>
  </StrictMode>
  </>

  
    
  
}

export default App
