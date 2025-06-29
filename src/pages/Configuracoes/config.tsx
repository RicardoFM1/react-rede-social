import { useContext, useState } from "react"
import { Theme } from "../../Context/context"
import style from "./config.module.css"


export const Config = () => {
    const Cores = useContext(Theme)
    let [corTema, setCorTema] = useState(Cores)
    const className = 'Tema-' + corTema
    console.log(className)
    return <body className={style[className]}> 
        
    <button className={style.BtnTema} onClick={() => {setCorTema(corTema === "Claro" ? "Escuro" : "Claro")}}>Mudar tema</button>
    <p>Tema: {corTema} </p>
    <h1>Configurações</h1>
    </body>
    
    
}
// como eu poderia fazer o style no body?
// como eu faria para usar console.log() e o useContext, faria sentido?