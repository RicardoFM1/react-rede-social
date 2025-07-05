
import { toast } from "react-toastify"
import { Header } from "../../components/header/header"
import { apiController } from "../../controller/api.controller"
import style from "../login/style.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { createUserSchema, type CreateUser } from "../../schemas/usuario.schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { Theme } from "../../Context/context"
import { useContext } from "react"
export const Cadastro=()=>{
    const {corTema} = useContext(Theme)
    const CoresJS = corTema
    const formulario = "formulario"
    const formularioCor = `${formulario}-${CoresJS}`
    const input = "input"
    const inputCor = `${input}-${CoresJS}`
    const btnSubmit = "btnSubmit"
    const btnSubmitCor = `${btnSubmit}-${CoresJS}`
    const navigate = useNavigate()
const {
    handleSubmit,
    register,
     formState:{errors}
} = useForm<CreateUser>(
    {
        resolver:zodResolver(createUserSchema),
        mode:"onBlur"
    }
)

    const registerUser=async(userData:CreateUser)=>{
        console.log(userData,"userdata")
       
            
            try {
                const res = await apiController.post("/usuarios", userData)
                console.log(res,"res do axios")
                if(res.data){
                    toast.success("Cadastrado com sucesso, redirecionando...")
                    setTimeout(()=>{
                        navigate("/login")
                    },3000)
                }
                console.log("fazer login", userData.email)
                console.log("fazer login", userData.password)
            } catch (error:any) {
                console.log(error,"error")
                toast.error(error.response.data.message)
            }
            
            
        
    }
        return <>
    <Header/>
    <Link to={"/"}>VOLTAR</Link>
    <main className={style.main}>
        <form className={style[formularioCor]} onSubmit={handleSubmit(registerUser)}>
            <fieldset>
                <label htmlFor="name">Nome</label>
                <input className={style[inputCor]} id="name" type="text" placeholder="Escreva seu nome"
                 {...register("name")}
                 />
                {errors.name&& <span className={style.error}>{errors.name.message}</span> }
            </fieldset>
            <fieldset>
                <label htmlFor="email">E-mail</label>
                <input className={style[inputCor]} id="email" type="text" placeholder="Escreva seu e-mail"
                 {...register("email")}
                 />
                 {errors.email&& <span className={style.error}>{errors.email.message}</span> }
            </fieldset>
            <fieldset>
                <label htmlFor="password">Senha</label>
                <input className={style[inputCor]} id="password" type="password" placeholder="*****"
                {...register("password")}
                
                />
                 {errors.password&& <span className={style.error}>{errors.password.message}</span> }
            </fieldset>
            <button className={style[btnSubmitCor]} type="submit">Cadastro</button>
        </form>
    </main>
    </>
}