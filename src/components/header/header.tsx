import { Link } from "react-router-dom";
import { Iconify } from "../iconify/iconify";
import style from "./header.module.css";
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.tituloDiv}>
        <h1 className={style.Titulo}>The Script</h1>
        <fieldset>
        
        <Iconify
          icon="lets-icons:search-light"
          ClassName={style.IconPesquisa}
          />
        <input
          className={style.Pesquisa}
          type="text"
          placeholder="Pesquise um perfil..."
          />
          </fieldset>
      </div>
      <div className={style.botoesHeader}>
        <Link to={"/login"} className={style.Links}>
          <Iconify icon="solar:login-2-bold" color="White" ClassName={style.iconLogin}/>
          Login
        </Link>
        <Link to={"/cadastro"} className={style.userCadastro}>
          <Iconify icon="heroicons:user-solid" color="White" ClassName={style.iconUsuario}/>
          Cadastrar-se
        </Link>
        <Link to={"/mensagens"} className={style.Links}>
          <Iconify icon="lets-icons:message-alt-fill" color="White" ClassName={style.iconMensagem} />
          Mensagens
        </Link>
        <Link to={"/configuracoes"} className={style.Links}>
        
          <Iconify icon="material-symbols:settings-outline" color="White" ClassName={style.iconConfiguracoes} />
          Configurações
        </Link>
        
      </div>
    </header>
  );
};
