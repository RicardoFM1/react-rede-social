import { Route, Routes } from "react-router-dom";
import { Config } from "../pages/config";

export function RotasPrincipal(){
    return <Routes>
        
        <Route path="/configuracoes" element={<Config/>}/>
    </Routes>
}

