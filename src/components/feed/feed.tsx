import { useEffect, useState } from "react";
import { apiController } from "../../controller/api.controller";
import type { iPosts, Post } from "../../schemas/posts.schemas";
import style from "./feed.module.css";
import { Iconify } from "../iconify/iconify";


interface FeedProps {
  idUsuario?: string;
}

export const Feed = ({ idUsuario }: FeedProps) => {
  // const navigate = useNavigate()
  const [posts, setPosts] = useState([] as iPosts);
  const [loading, setLoading] = useState(true);
  const goToPerfil = (post: Post) => {
    console.log(post, "post");
    // navigate(`/usuario/${post.usuario.id}`)
  };
  const getPosts = async () => {
    setLoading(true);
    const res = await apiController.get("/posts?limit=6");
    console.log(res.data, "res");
    const posts: iPosts = res.data;
    if (posts) {
      setTimeout(() => {
        if (idUsuario) {
          const filterPosts = posts.filter(
            (post) => String(post.usuario.id) != idUsuario
          );
          setPosts(filterPosts);
        } else {
          setPosts(res.data);
        }
        setLoading(false);
      }, 2000);
    } else {
      setLoading(false);
    }
  };
  useEffect(() => {
    getPosts();
    console.log("UseEffectDoFeed")
  }, []);
  return (
    <section>
      {loading && <p className={style.pCarregando}>Carregando</p>}
      {posts.length === 0 && !loading ? (
        <p className={style.pNadaDeNovo}>Nada de novo aqui</p>
      ) : (
        <ul>
          {posts.map((post) => {
            return (
                <div className={style.divLi}>
              <li key={post.id} onClick={() => goToPerfil(post)}>
                <div className={style.TopoFeed}>
                <Iconify icon="heroicons:user-solid" ClassName={style.topoFeedIcon}
                 />
                  <p>{post.usuario.name}</p>
                </div>
                  <p className={style.pConteudo}>{post.content}</p>
              </li>
                </div>
            );
          })}
        </ul>
      )}
    </section>
  );
};
