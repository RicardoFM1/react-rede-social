
import { toast } from "react-toastify"
import { Header } from "../../components/header/header"
import { apiController } from "../../controller/api.controller"
import style from "../login/style.module.css"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { createUserSchema, type CreateUser } from "../../schemas/usuario.schemas"
import { zodResolver } from "@hookform/resolvers/zod"
export const Cadastro=()=>{
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
    <main className={style.main}>
        <form className={style.form} onSubmit={handleSubmit(registerUser)}>
            <fieldset>
                <label htmlFor="name">Nome</label>
                <input  id="name" type="text" placeholder="escreva seu nome"
                 {...register("name")}
                 />
                {errors.name&& <span>{errors.name.message}</span> }
            </fieldset>
            <fieldset>
                <label htmlFor="email">E-mail</label>
                <input  id="email" type="text" placeholder="escreva seu e-mail"
                 {...register("email")}
                 />
                 {errors.email&& <span>{errors.email.message}</span> }
            </fieldset>
            <fieldset>
                <label htmlFor="password">Senha</label>
                <input id="password" type="password" placeholder="*****"
                {...register("password")}
                
                />
                 {errors.password&& <span>{errors.password.message}</span> }
            </fieldset>
            <button  type="submit">Cadastro</button>
        </form>
    </main>
    </>
}