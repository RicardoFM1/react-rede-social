import { useContext } from "react";
import { cores, Theme } from "../../Context/context";
import style from "./config.module.css";
import { Link } from "react-router-dom";

export const Config = () => {
  const {corTema,setCorTema} = useContext(Theme);
  localStorage.setItem("Tema", corTema);
  const className = "Tema-" + corTema; 
  console.log(className,"aki");
  return (
    <div className={style[className]}>
      <button
        className={style.BtnTema}
        onClick={() => {
          setCorTema(corTema === cores.Escuro ?cores.Claro:  cores.Escuro); 
        }}
      >
        Mudar tema
      </button>
      <p>Tema: {corTema} </p>
      <h1>Configurações</h1>
      <Link to={"/"}> Voltar</Link>
    </div>
  );
};

