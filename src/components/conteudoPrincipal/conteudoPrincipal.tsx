import style from "./conteudoPrincipal.module.css";
export const ConteudoPrincipal = () => {
  return (
    <main>
      <div className={style.divPrincipal}>
        <div className={style.divInfoPerfil}>
          <p>tchau</p>
        </div>
        <div className={style.divAgora}>
          <h1>Agora...</h1>
        </div>
      </div>
    </main>
  );
};
