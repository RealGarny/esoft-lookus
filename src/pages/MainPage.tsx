import { useAppDispatch, useAppSelector } from "../store/hooks";
import FilmCardPoster from "../components/filmcard/FilmCardPoster";
import FilmCard from "../components/filmcard/FilmCard";
import FilmCardInfo from "../components/filmcard/FilmCardInfo";
import FilmCardActions from "../components/filmcard/FilmCardActions";
import Section from "../components/Section";
import SortRatingButton from "../components/SortRatingButton";
import { useEffect } from "react";
import { setFilms } from "../store/filmsSlice";
import FilmsList from "../components/FilmsList";

const MainPage = () => {
    const films = useAppSelector((state) => state.films.films);
    const _initialFilms = useAppSelector((state) => state.films._initialFilms);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setFilms(_initialFilms))
    },[])

    return(
        <Section header="Популярные фильмы" headerSize="lg" className="py-6">
            <SortRatingButton/>
            <FilmsList films={films}/>
        </Section>
    )
}

export default MainPage