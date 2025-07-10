import { Navigate, useNavigate } from "react-router-dom"
import { ConteudoPrincipal } from "../../components/conteudoPrincipal/conteudoPrincipal"
import { Header } from "../../components/header/header"
import { useEffect, useState } from "react"


    export const Home = () => {
let [isLogged, SetIslogged] = useState(false)

const navigate = useNavigate()
    useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
    SetIslogged(true)
    }
    else{
    SetIslogged(false)
    setTimeout(()=>{    
        navigate("/login")
    },3000)
    }
    
}, [Navigate])

if(isLogged){

    return <>
    <Header />
    <ConteudoPrincipal/>
    </>
}else{
    return<>
    <p>Usuário não autenticado, redirecionando para a página de login!</p>
    </>
}

}

