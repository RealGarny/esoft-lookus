import Flexbox from "../components/Flexbox";
import Text from "../components/Text";
import { useAppSelector } from "../store/hooks";

import FilmCardPoster from "../components/filmcard/FilmCardPoster";
import FilmCard from "../components/filmcard/FilmCard";
import FilmCardInfo from "../components/filmcard/FilmCardInfo";
import FilmCardActions from "../components/filmcard/FilmCardActions";

const MainPage = () => {
    const films = useAppSelector((state) => state.films.films);

    return(
        <Flexbox className="py-6 px-0 md:px-6 flex-col">
            <Text url="#" size="lg" className="font-semibold">Популярные фильмы</Text>
            <Text size="md" className="font-semibold">Фильтры</Text>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {films.map((film) => {
                    return(
                    <FilmCard
                        key={film.id}
                        poster = {<FilmCardPoster rating={film.rating.kp} id={film.id} name={film.name} posterURL={film.poster.url}/>}
                        info = {<FilmCardInfo slogan={film.slogan} shortDescrition={film.shortDescription} ageRate={film.ageRating} year={film.year} />}
                        actions = { <FilmCardActions id={film.id} /> }
                    />
                    )
                })}
            </div>
        </Flexbox>
    )
}

export default MainPage