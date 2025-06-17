
import { Iconify } from "../iconify/iconify"
import style from "./header.module.css"
export const Header=()=>{
return <header className={style.header}>
<div className={style.tituloDiv}>
<h1 className={style.Titulo}>The Script</h1>
<Iconify icon="lets-icons:search-light" ClassName={style.IconPesquisa}/>
<input className={style.Pesquisa} type="text" placeholder="Pesquise um perfil..."/>

</div>
<div className="botoesHeader">
<button>Criar</button>
<button>Perfil</button>
<button>Mensagens</button>
<button>Configurações</button>
</div>

</header>



}