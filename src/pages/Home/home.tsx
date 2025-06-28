import { ConteudoPrincipal } from "../../components/conteudoPrincipal/conteudoPrincipal"
import { Feed } from "../../components/feed/feed"
import { Header } from "../../components/header/header"


export const Home = () => {
    return <>
    <Header />
    <ConteudoPrincipal/>
    <Feed />
    </>
}