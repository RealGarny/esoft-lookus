import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { memo } from "react";

const MainLayoutOutlet = memo(() => {
    const { loading, error,watchLaterFilms, favoriteFilms } = useAppSelector(state => state.films);

    if(loading) {
        return <h1>loading</h1>
    }

    if(error) {
        return <h1>error</h1>
    }

    return(
        <Outlet/>
    )
})

export default MainLayoutOutlet