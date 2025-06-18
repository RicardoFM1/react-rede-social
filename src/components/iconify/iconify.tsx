import {Icon} from "@iconify/react"
interface IconifyProps {
    icon:string,
    width?:number,
    height?:number,
    ClassName?:string,
    color?:string
}
export const Iconify=({icon, width, height, ClassName, color}:IconifyProps)=>{
    return <Icon icon={icon} width={width??24} height={height??24} className={ClassName??""} color={color??""}/>
}