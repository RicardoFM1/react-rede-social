import {Icon} from "@iconify/react"
interface IconifyProps {
    icon:string,
    width?:number,
    height?:number,
    ClassName?:string,
    color?:string,
    backgroundColor?:string
}
export const Iconify=({icon, width, height, ClassName, color,backgroundColor, }:IconifyProps)=>{
    return <Icon icon={icon} width={width??24} height={height??24} className={ClassName??""} color={color??""} 
    style={{backgroundColor:backgroundColor??""}}
    
    />
}