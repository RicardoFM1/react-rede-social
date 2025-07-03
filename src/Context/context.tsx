import { createContext, useState } from "react"
export enum cores {
    "Escuro"="Escuro","Claro"="Claro"
}
interface iTheme {
    corTema:"Escuro"|"Claro",
    setCorTema:React.Dispatch<React.SetStateAction<cores>>
}

export const Theme = createContext<iTheme>({} as iTheme)
interface ThemeProps {
    children:React.ReactNode
}
export const ThemeProvider =({children}:ThemeProps)=>{
    const local = localStorage.getItem("Tema")

    let [corTema, setCorTema] = useState(local&&local === cores.Claro || local && local ===cores.Escuro ?local:cores.Claro); 
    return <Theme.Provider value={{corTema,setCorTema}}>
        {children}
    </Theme.Provider>
} 