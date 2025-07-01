import { useContext, useState } from "react";
import { Theme } from "../../Context/context";
import style from "./config.module.css";
import { Link } from "react-router-dom";

export const Config = () => {
  const Cores = useContext(Theme);
  let [corTema, setCorTema] = useState(Cores);
  const className = "Tema-" + corTema;
  console.log(className);
  return (
    <div className={style[className]}>
      <button
        className={style.BtnTema}
        onClick={() => {
          localStorage.setItem("Tema", corTema);
          setCorTema(corTema === "Claro" ? "Escuro" : "Claro");
        }}
      >
        Mudar tema
      </button>
      <p>Tema: {corTema} </p>
      <h1>Configurações</h1>
      <Link to={"/"}>Voltar</Link>
    </div>
  );
};
// como eu faria para usar console.log() e o useContext, faria sentido?
