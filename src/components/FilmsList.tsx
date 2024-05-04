import FilmCard from "./filmcard/FilmCard";
import FilmCardPoster from "./filmcard/FilmCardPoster";
import FilmCardInfo from "./filmcard/FilmCardInfo";
import FilmCardActions from "./filmcard/FilmCardActions";
import { filmsData } from "../store/filmsSlice";

interface pFilmsList {
    films:filmsData[]
}

const FilmsList = (props:pFilmsList) => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {props.films.map((film) => {
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
)

export default FilmsList;