import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getFilm } from "../store/filmsSlice";
import { useEffect, useState } from "react";
import routes from "../routes/routes";

const FilmDetailsPage = () => {
    let { filmId } = useParams();
    const { selectedFilm, _initialFilms } = useAppSelector(state => state.films);
    const [isError, setIsError] = useState(false);
    const dispatch = useAppDispatch();

    if(!selectedFilm || isError) {
        return(
            <h1>404. film does not exist</h1>
        )
    }

    useEffect(() => {
        if(Object.keys(selectedFilm).length === 0 || filmId !== selectedFilm) {
            const [fetchedFilm] = _initialFilms.filter((p:any) => p.id == filmId);
            if(fetchedFilm) {
                dispatch(getFilm(fetchedFilm));
            } else {
                setIsError(true);
            }
        }
    },[filmId])

    return(
        <>
            <Link to={routes.main}>{"<- На главную"}</Link>
            <h1>film id: {selectedFilm.id}</h1>
            <h1>film id: {selectedFilm.name}</h1>
        </>
    )
}

export default FilmDetailsPage;