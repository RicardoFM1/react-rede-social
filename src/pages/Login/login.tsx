
import { Header } from "../../components/header/header"
import style from "../style.module.css"
import { apiController } from "../../controller/api.controller"
import {toast} from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { createLoginSchema, type iCreateLogin } from "../../schemas/login.schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../components/input/Input"
import { useContext, useState } from "react"
import { MainContext } from "../../Context/MainContext"
import { Theme } from "../../Context/context"
import { Iconify } from "../../components/iconify/iconify"

export const Login=()=>{
    const {corTema} = useContext(Theme)
    const CoresJS = corTema
    const formulario = "formulario"
    const formularioCor = `${formulario}-${CoresJS}`
    const input = "input"
    const inputCor = `${input}-${CoresJS}`
    const btnSubmit = "btnSubmit"
    const btnSubmitCor = `${btnSubmit}-${CoresJS}`
    const navigate = useNavigate()
    const { setUser } = useContext(MainContext)
    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm<iCreateLogin>({
        mode:"onBlur",
        resolver: zodResolver(createLoginSchema)
    })

    const fazerLogin = async (loginData:iCreateLogin) => {
        console.log(loginData,"loginData")
       
      try {
         const res = await apiController.post("/login",loginData)
            console.log(res,"res do axios")
       if(res.data.token){
            toast.success("Sucesso, login")
            localStorage.setItem("token",res.data.token)
            setUser(res.data)
            setTimeout(() => {
                navigate("/")
            }, 3000);
       }
      } catch (error:any) {
        console.log(error,"error")
        toast.error(error.response.data.message)
      }
    }
    return <>
    <Header/>
  
    <div className={style.divVoltar}>

    <Link className={style.linkVoltar} to={"/"}><Iconify icon="tabler:arrow-back" height={48} width={48} color="blue"/></Link>
    <Link className={style.linkVoltar} to={"/"}>Voltar</Link>
    </div>
    <main className={style.main}>
        <form className={style[formularioCor]} onSubmit={handleSubmit(fazerLogin)}>
        <h1>Login</h1>
            <Input ClassName={style[inputCor]} errorMsg={errors.email&&errors.email.message} 
            label="E-mail" type="text" placeholder="Escreva seu e-mail" register={register("email")}/>
           
            <Input ClassName={style[inputCor]} errorMsg={errors.password&&errors.password.message} 
                label="Senha" type="password" placeholder="****" register={register("password")}
            />
            <button className={style[btnSubmitCor]} type="submit">Login</button>
        </form>
    </main>
    </>
}