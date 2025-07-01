import "./App.module.css"
import { Theme } from "./Context/context"

import { RotasPrincipal } from "./routes/routes"


function App() {
let ThemeColor = "Claro"
const LocalColors = localStorage.getItem("Tema")
if(LocalColors){
  ThemeColor = LocalColors
}
  return  <>
  <Theme value={ThemeColor}>
  <RotasPrincipal/> 
  </Theme>
  </>

  
    
  
}

export default App
