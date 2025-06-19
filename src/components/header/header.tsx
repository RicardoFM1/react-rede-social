import { Iconify } from "../iconify/iconify";
import style from "./header.module.css";
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.tituloDiv}>
        <h1 className={style.Titulo}>The Script</h1>
        <Iconify
          icon="lets-icons:search-light"
          ClassName={style.IconPesquisa}
        />
        <input
          className={style.Pesquisa}
          type="text"
          placeholder="Pesquise um perfil..."
        />
      </div>
      <div className={style.botoesHeader}>
        <button>
          <Iconify icon="fa-solid:plus" color="White" ClassName={style.iconCriar}/>
          Criar
        </button>
        <button className={style.btnUser}>
          <Iconify icon="heroicons:user-solid" color="White" ClassName={style.iconUsuario}/>
          Usuário
        </button>
        <button>
          <Iconify icon="lets-icons:message-alt-fill" color="White" ClassName={style.iconMensagem} />
          Mensagens
        </button>
        <button>
          <Iconify icon="material-symbols:settings-outline" color="White" ClassName={style.iconConfiguracoes} />
          Configurações
        </button>
      </div>
    </header>
  );
};
