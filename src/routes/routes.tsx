import { Route, Routes } from "react-router-dom";
import { Config } from "../pages/Configuracoes/config";
import { Home } from "../pages/Home/home";
import { Cadastro } from "../pages/Cadastro/cadastro";
import { Login } from "../pages/Login/login";
import { Mensagens } from "../pages/Mensagens/mensagens";

export function RotasPrincipal(){
    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/configuracoes" element={<Config/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/mensagens" element={<Mensagens/>}/>
    </Routes>
}

