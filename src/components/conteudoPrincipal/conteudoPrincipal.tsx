import { useContext, useEffect, useState } from "react";
import { Feed } from "../feed/feed";
import { Iconify } from "../iconify/iconify";
import style from "./conteudoPrincipal.module.css";
import { Theme } from "../../Context/context";


import { apiController } from "../../controller/api.controller";
import type { ReturnUser } from "../../schemas/usuario.schemas";
import type { iPosts } from "../../schemas/posts.schemas";

export const ConteudoPrincipal = () => {
  const { corTema } = useContext(Theme);
  const CoresJS = corTema === "Escuro" ? "Escuro" : "Claro";
  const classeDivInfoPerfil = "divInfoPerfil";
  const ClasseDivICores = `${classeDivInfoPerfil}-${CoresJS}`;
  const ClasseDivAgora = "divAgora";
  const classeDivAgoraCores = `${ClasseDivAgora}-${CoresJS}`;
  const IconScript1 = "IconScript1";
  const IconScript1Cor = `${IconScript1}-${CoresJS}`;
  const IconScript2 = "IconScript2";
  const IconScript2Cor = `${IconScript2}-${CoresJS}`;

const [user,setUser]= useState({}as ReturnUser)
console.log(user)
const [isLogged, SetIslogged] = useState(false);
const [posts, setPosts] = useState([] as iPosts)

  const getUser=async()=>{
  const res = await apiController.get("/usuarios/retrieve",{
      headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
      } 
    }
  )


    const token = localStorage.getItem("token");
    if (token ) {
      SetIslogged(true);
    } else {
      SetIslogged(false);
    }

  if(res.data){
    setUser(res.data)
    const postsRes = await apiController.get(`/posts/user/${res.data.id}?limit=6`)
    setPosts(postsRes.data)
    console.log(postsRes, "postres")
    console.log(posts)
  console.log(res.data)
  }else {
    SetIslogged(false);
  }
  
  return res.data
}
useEffect(()=>{

  getUser()
},[])
if (isLogged) {


    return (
      <>
        <div>
          <main>
            <div className={style.divPrincipal}>
              <div className={style[ClasseDivICores]}>
                <div className={style.infoPrincipalPerfil}>
                  <div className={style.fotoPerfil}>
                    <Iconify
                      icon="heroicons:user-solid"
                      ClassName={style.IconPerfil}
                    />
                  </div>
                  <div className={style.infoUsuario}>
                    <div className={style.estatisticaPerfil}>
                      <div className={style.borderDiv}>
                        <p>52</p>
                        Scripts
                      </div>
                      <div className={style.borderDiv}>
                        <p>24.5k</p>
                        Seguidores
                      </div>
                      <div>
                        <p>1386</p>
                        Seguindo
                      </div>
                    </div>
                    <div className={style.nomePerfil}>
                      <div>
                        <h1>{user.name || "Usuário"}</h1>
                      </div>
                      <p>@{user.name || "Usuário"}</p>
                    </div>
                    <div className={style.BtnInfoPerfil}>
                      <button className={style.BtnInfoPerfil1}>C</button>
                      <button className={style.BtnInfoPerfil2}>H</button>
                      <button className={style.BtnInfoPerfil3}>P</button>
                      <button className={style.BtnInfoPerfilIconify}>
                        <Iconify
                          icon="fa-solid:plus"
                          color="White"
                          backgroundColor="gray"
                          ClassName={style.iconCriar}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className={style.tituloSobre}>
                  <h2>Sobre</h2>
                </div>
                <div className={style.Sobre}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  euismod volutpat fermentum. Aenean pellentesque neque at
                  turpis maximus, vel scelerisque mi porttitor. Nam vehicula
                  eros ac suscipit tempus. Duis ac mi sit amet lorem vulputate
                  commodo ut a diam. Maecenas sapien metus, tempor sed rutrum
                  quis, feugiat vel ipsum. Donec et sem convallis metus
                  ultricies ultricies. Donec id iaculis lorem. Vivamus sit amet
                  mattis elit. Cras vel justo nec leo lacinia laoreet in eget
                  dolor. Cras nibh neque, sodales a pretium ac, condimentum sed
                  purus. Phasellus scelerisque cursus sapien sit amet mattis.
                  Morbi bibendum metus quis mauris cursus, at vulputate urna
                  ullamcorper. Donec rutrum venenatis commodo. Maecenas faucibus
                  diam in consectetur suscipit. In hac habitasse platea
                  dictumst. Mauris vitae nunc sit amet tortor euismod sagittis.
                  Vestibulum ornare purus ante, sed eleifend turpis tempus sed.
                  Aenean vel porta risus. Mauris efficitur odio ac dui is
                  efficitur odio ac dui is efficitur odio ac
                </div>
                <div className={style.tituloScript}>
                  <h2>Scripts recentes</h2>
                </div>
                <div className={style.Scripts}>
                    {posts.map((post)=>{
                      return <div>
                    <Iconify
                      icon="vaadin:quote-left"
                      ClassName={style[IconScript1Cor]}
                    />
                   <p>{post.content}</p> 
                    
            
                    <Iconify
                    icon="vaadin:quote-right"
                    ClassName={style[IconScript2Cor]}
                    />
                  </div>
                  })}
                </div>
              </div>

              <div className={style[classeDivAgoraCores]}>
                <h1>Agora...</h1>
                <Feed />
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
};
