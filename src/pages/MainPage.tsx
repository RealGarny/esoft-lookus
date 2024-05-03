import { useAppDispatch, useAppSelector } from "../store/hooks";
import FilmCardPoster from "../components/filmcard/FilmCardPoster";
import FilmCard from "../components/filmcard/FilmCard";
import FilmCardInfo from "../components/filmcard/FilmCardInfo";
import FilmCardActions from "../components/filmcard/FilmCardActions";
import Section from "../components/Section";
import SortRatingButton from "../components/SortRatingButton";
import { useEffect } from "react";
import { setFilms } from "../store/filmsSlice";

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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {films.map((film) => {
                    return(
                    <FilmCard
                        className="overflow-hidden max-w-72"
                        orientation="vertical"
                        key={film.id}
                        poster = {<FilmCardPoster rating={film.rating.kp} id={film.id} name={film.name} posterURL={film.poster.url}/>}
                        info = {<FilmCardInfo genres={film.genres} slogan={film.slogan} shortDescrition={film.shortDescription} ageRate={film.ageRating} year={film.year} />}
                        actions = { <FilmCardActions id={film.id} /> }
                    />
                    )
                })}
            </div>
        </Section>
    )
}

export default MainPage