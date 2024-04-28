import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Flexbox from "../components/Flexbox"
import Container from "../components/Container"
import { useState } from "react"
import Header from "../components/Header"
import { useAppDispatch } from "../store/hooks"
import { useEffect } from "react";
import { fetchFilms } from "../store/filmsSlice";

const MainLayout = () => {

    const [isSidebar, setIsSidebar] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(()=> {
        dispatch(fetchFilms());
    },[])

    return(
        <>
            <Header setIsSidebar={()=>{setIsSidebar(p => !p)}} isSidebar={isSidebar}/>
            <Container maxW="lg">
                <Flexbox gap="0" className="flex-col">
                    <Sidebar isSidebar={isSidebar}/>
                    <div className="h-full w-full">
                        <Outlet/>
                    </div>
                </Flexbox>
            </Container>
            <footer className="mt-auto px-2 py-4 bg-secondary w-full">footer</footer>
        </>
    )
}

export default MainLayout