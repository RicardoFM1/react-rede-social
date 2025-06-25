import { useEffect, useState } from "react"
import { apiController } from "../../controller/api.controller"
import type { iPosts, Post } from "../../schemas/posts.schemas"
import { useNavigate } from "react-router-dom"

interface FeedProps {
    idUsuario?: string
}

export const Feed=({idUsuario}:FeedProps)=>{
    // const navigate = useNavigate()
    const [posts,setPosts] = useState([] as iPosts)
    const [loading,setLoading] = useState(true)
    const goToPerfil = (post:Post) => {
        console.log(post,"post")
        // navigate(`/usuario/${post.usuario.id}`)
    }
    const getPosts = async()=>{
        setLoading(true)
        const res = await apiController.get("/posts")
        console.log(res.data,"res")
        const posts:iPosts = res.data
        if(posts){
            setTimeout(() => {
                if(idUsuario){
                    const filterPosts =posts.filter((post)=>String(post.usuario.id) != idUsuario)
                    setPosts(filterPosts)
                }else{

                    setPosts(res.data)
                }
                setLoading(false)
            }, 2000);
        }else {
            setLoading(false)
        }
    }
    useEffect( ()=>{
        getPosts()
    },[])
    return <section>
        {
            loading && <p>Carregando</p>
        }
        {
        posts.length === 0 && !loading ?
            <p>Nada de novo aqui</p>
        : <ul>
           {
             posts.map((post)=>{
                return <li key={post.id} onClick={()=>goToPerfil(post)}>
                    <p>{post.usuario.name}</p>
                    <p>{post.content}</p>
                    </li>
            })
           }

        </ul>
        }
       
    </section>
}