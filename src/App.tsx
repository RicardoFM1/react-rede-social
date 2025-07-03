
import "./App.module.css"
import { ThemeProvider } from "./Context/context"

import { RotasPrincipal } from "./routes/routes"


function App() {

  return  <>
  <ThemeProvider>
    <RotasPrincipal/> 
  </ThemeProvider>
  </>

  
    
  
}

export default App
