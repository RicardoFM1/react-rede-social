import { useState } from "react"
import { Iconify } from "../iconify/iconify"
import style from "./style.module.css"
interface InputProps {
    label: string
    type:"text"|"password",
    placeholder:string
    errorMsg?:string
    register:{},
    ClassName?: string
}
export const Input = ({label,type,placeholder,errorMsg,register,ClassName}:InputProps)=>{
    const [newType,setNewType] = useState("password")
    const changeType = ()=>{
        if(newType === "password"){
            setNewType("text")
        }else{
            setNewType("password")
        }
    }
    return <fieldset className={style.fieldset}>
        <label className={style.label} htmlFor={label}>{label}</label>
        {
            type === "password"?
            <>
            <input className={ClassName??""} type={newType} {...register} placeholder={placeholder} id={label}/>
            <Iconify onClick={changeType} ClassName={style.icon} icon="ri:eye-line"/>
            </>
        :
        <input className={ClassName??""} {...register} placeholder={placeholder} type={type} id={label}/>
         }
         {errorMsg ? 
                <span className={style.error}>{errorMsg}</span>
                : <span className={style.error}></span> }
        
    </fieldset>
}