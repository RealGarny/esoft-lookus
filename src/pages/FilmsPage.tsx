import { useLocation } from "react-router-dom";
import Section from "../components/Section";
import { useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import Flexbox from "../components/Flexbox";
import FilmCard from "../components/filmcard/FilmCard";
import FilmCardActions from "../components/filmcard/FilmCardActions";
import FilmCardPoster from "../components/filmcard/FilmCardPoster";
import FilmCardInfo from "../components/filmcard/FilmCardInfo";

const FilmsPage = () => {
    const location = useLocation();
    const films = useAppSelector(state => state.films.films)
    
    useEffect(()=>{
        if(!!location.state) {
            const queryParams = location.state.queries;
            console.log(queryParams);
        };
    },[])
    //create filmsList component
    return(
        <Section header="Поиск фильма">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {films.map((film) => {
                    return(
                        <FilmCard
                            className="overflow-hidden"
                            key={film.id}
                            orientation="vertical"
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

export default FilmsPage;