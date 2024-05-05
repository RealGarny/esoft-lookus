import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { filmsData, getFilm } from "../store/filmsSlice";
import { useEffect, useState } from "react";
import Flexbox from "../components/Flexbox";
import Text from "../components/Text";
import CenteredImg from "../components/CenteredImg";
import Section from "../components/Section";
import FilmCard from "../components/filmcard/FilmCard";
import FilmCardPoster from "../components/filmcard/FilmCardPoster";
import filter from "../utils/filter";
import FilmCardInfo from "../components/filmcard/FilmCardInfo";
import FilmCardActions from "../components/filmcard/FilmCardActions";
import CommentSection from "../components/CommentSection";
import FilmGenreItem from "../components/filmcard/FilmGenreItem";

const FilmDetailsPage = () => {
    let { filmId } = useParams();
    const { selectedFilm, _initialFilms } = useAppSelector(state => state.films);

    const [simmilarFilms, setSimmilarFilms] = useState<filmsData[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async() => {
            const fetchedFilm = _initialFilms.find((p:any) => p.id == filmId);

            if(typeof(fetchedFilm) !== "undefined") {
                dispatch(getFilm(fetchedFilm));
                await filter.byGenres(fetchedFilm, _initialFilms)
                .then((r) => {
                    setSimmilarFilms(r.slice(0,3))
                })
            }
        }
        fetchData();
    },[filmId])

    if(Object.keys(selectedFilm).length < 1) {
        return(
            <h1>404. film does not exist</h1>
        )
    }

    return(
        <Flexbox className="py-4 flex-col">
            <Flexbox className="flex-col md:flex-row">
                <div className="relative size-64 overflow-hidden rounded-xl">
                    <CenteredImg posterURL={selectedFilm.poster.url}/>
                </div>
                <Flexbox className="flex-col">
                    <Text size="lg" className="font-bold">{selectedFilm.name}</Text>
                    <Flexbox className="flex-col opacity-80">
                        <Flexbox>
                            <Text>{selectedFilm.ageRating}+</Text>
                            <Text>Рейтинг: {selectedFilm.rating.kp}</Text>
                        </Flexbox>
                        <Text>Продолжительность: {selectedFilm.movieLength}мин.</Text>
                        <Flexbox className="flex-wrap">
                            {selectedFilm.genres.map((genre) => {return(
                            <FilmGenreItem
                                key={genre.name}
                                name={genre.name}
                                bgColor={"bg-accent"}
                            />)})}
                        </Flexbox>
                    </Flexbox>
                </Flexbox>
            </Flexbox>
            <Section header="Описание">
                <Text>{selectedFilm.description}</Text>
            </Section>
            <Section header="Актёры">
                <Flexbox className="flex-wrap justify-center gap-4 px-2">
                    {
                        selectedFilm.persons
                            .filter(person => person.enProfession === "actor")
                            .map(person => 
                                <Flexbox key={person.id} className="flex-col w-40">
                                    <img className="h-64" src={person.photo}></img>
                                    <Text>{person.name}</Text>
                                </Flexbox>)
                    }
                </Flexbox>
            </Section>
            <Section header="Похожие фильмы">
                <Flexbox className="flex-wrap justify-evenly gap-4 px-2">
                    {simmilarFilms.map((film) => {
                        return(
                            <FilmCard
                                className="overflow-hidden w-full max-w-72"
                                orientation="vertical"
                                key={film.id}
                                poster = {<FilmCardPoster rating={film.rating.kp} id={film.id} name={film.name} posterURL={film.poster.url}/>}
                                info = {<FilmCardInfo genres={film.genres} slogan={film.slogan} shortDescrition={film.shortDescription} ageRate={film.ageRating} year={film.year} />}
                                actions = { <FilmCardActions id={film.id} /> }
                            />
                        )
                    })}
                </Flexbox>
            </Section>
            <Section header="Комментарии">
                <CommentSection parentId={parseInt(filmId!)}/>
            </Section>
        </Flexbox>
    )
}

export default FilmDetailsPage;