import { Link } from "react-router-dom";
import { Iconify } from "../iconify/iconify";
import style from "./header.module.css";
import { useContext } from "react";
import { Theme } from "../../Context/context";
export const Header = () => {
  const {corTema} = useContext(Theme)
  const CoresJS = corTema
  const Header = "Header"
  const HeaderCores = `${Header}-${CoresJS}`
  const Pesquisa = "Pesquisa"
  const PesquisaCores = `${Pesquisa}-${CoresJS}`
  const BotoesLink = "btnLink"
  const BotoesLinkCor = `${BotoesLink}-${CoresJS}`
  const btnIcon = "btnIcon"
  const btnIconCor = `${btnIcon}-${CoresJS}`
  const BtnUserCadastro = "BtnUserCadastro"
  const BtnUserCadastroCor = `${BtnUserCadastro}-${CoresJS}`
  const IconUserCadastro = "iconUserCadastro"
  const IconUserCadastroCor = `${IconUserCadastro}-${CoresJS}`
  const IconPesquisa = "IconPesquisa"
  const IconPesquisaCor = `${IconPesquisa}-${CoresJS}`
  
  return (
    <header className={style[HeaderCores]}>
      <div className={style.tituloDiv}>
        <h1 className={style.Titulo}>The Script</h1>
        <fieldset>
        
        <Iconify
          icon="lets-icons:search-light"
          ClassName={style[IconPesquisaCor]}
          />
        <input
          className={style[PesquisaCores]}
          type="text"
          placeholder="Pesquise um perfil..."
          />
          </fieldset>
      </div>
      <div className={style.botoesHeader}>
        <Link to={"/login"} className={style[BotoesLinkCor]}>
          <Iconify icon="solar:login-2-bold" ClassName={style[btnIconCor]}/>
          Login
        </Link>
        <Link to={"/cadastro"} className={style[BtnUserCadastroCor]}>
          <Iconify icon="heroicons:user-solid" ClassName={style[IconUserCadastroCor]}/>
          Cadastro
        </Link>
        <Link to={"/mensagens"} className={style[BotoesLinkCor]}>
          <Iconify icon="lets-icons:message-alt-fill" ClassName={style[btnIconCor]} />
          Mensagens
        </Link>
        <Link to={"/configuracoes"} className={style[BotoesLinkCor]}>
        
          <Iconify icon="material-symbols:settings-outline" ClassName={style[btnIconCor]} />
          Configurações
        </Link>
        
      </div>
    </header>
  );
};
