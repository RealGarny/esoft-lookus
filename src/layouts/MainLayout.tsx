import MainLayoutOutlet from "./MainLayoutOutlet"
import Sidebar from "../components/Sidebar"
import Container from "../components/Container"
import { useState } from "react"
import Header from "../components/Header"
import { useAppDispatch } from "../store/hooks"
import { useEffect } from "react";
import { fetchFilms, setFavoriteFilms, setFilmComments, setWatchLaterFilms } from "../store/filmsSlice";
import { useLocation } from "react-router-dom"

const MainLayout = () => {

    const [isSidebar, setIsSidebar] = useState(false);
    const location = useLocation();

    const dispatch = useAppDispatch();

    useEffect(()=>{
        setIsSidebar(false);
    }
    ,[location])

    useEffect(()=> {
        const tFavFilms = JSON.parse(localStorage.getItem("favoriteFilms")!);
        const tWatchLtrFilms = JSON.parse(localStorage.getItem("watchLaterFilms")!);
        const tFilmComments = JSON.parse(localStorage.getItem("filmComments")!);

        dispatch(fetchFilms());
        if(tFavFilms) dispatch(setFavoriteFilms(tFavFilms));
        if(tWatchLtrFilms) dispatch(setWatchLaterFilms(tWatchLtrFilms));
        if(tFilmComments) dispatch(setFilmComments(tFilmComments));
    },[])

    return(
        <>
            <Header setIsSidebar={()=>{setIsSidebar(p => !p)}} isSidebar={isSidebar}/>
            <Container maxW="lg" className="px-4">
                    <Sidebar isSidebar={isSidebar}/>
                    <div className="h-full w-full">
                        <MainLayoutOutlet/>
                    </div>
            </Container>
            <footer className="mt-auto px-2 py-4 bg-secondary w-full">footer</footer>
        </>
    )
}

export default MainLayout