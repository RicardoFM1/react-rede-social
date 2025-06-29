import "./App.module.css"
import { Theme } from "./Context/context"

import { RotasPrincipal } from "./routes/routes"


function App() {
const ThemeColor = "Escuro"

  return  <>
  <Theme value={ThemeColor}>
  <RotasPrincipal/>
  </Theme>
  </>

  
    
  
}

export default App
