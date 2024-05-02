import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getFilm } from "../store/filmsSlice";
import { useEffect } from "react";
import Flexbox from "../components/Flexbox";
import Text from "../components/Text";
import PosterImage from "../components/PosterImage";
import Section from "../components/Section";
import FilmCard from "../components/filmcard/FilmCard";
import FilmCardPoster from "../components/filmcard/FilmCardPoster";
import Input from "../components/Input";

const FilmDetailsPage = () => {
    let { filmId } = useParams();
    const { selectedFilm, _initialFilms } = useAppSelector(state => state.films);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const [fetchedFilm] = _initialFilms.filter((p:any) => p.id == filmId);
        if(typeof(fetchedFilm) !== "undefined") {
            dispatch(getFilm(fetchedFilm));
        }
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
                    <PosterImage posterURL={selectedFilm.poster.url}/>
                </div>
                <Flexbox className="flex-col">
                    <Text size="lg" className="font-bold">{selectedFilm.name}</Text>
                    <Flexbox className="flex-col opacity-80">
                        <Flexbox>
                            <Text size="md">{selectedFilm.ageRating}+</Text>
                            <Text size="md">Рейтинг: {selectedFilm.rating.kp}</Text>
                        </Flexbox>
                        <Text size="md">Продолжительность: {selectedFilm.movieLength}мин.</Text>
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
                                <Flexbox className="flex-col w-40">
                                    <img className="h-64" src={person.photo}></img>
                                    <Text>{person.name}</Text>
                                </Flexbox>)
                    }
                </Flexbox>
            </Section>
            <Section header="Похожие фильмы">
                <div>sample text</div>
            </Section>
            <Section header="Комментарии">
                <textarea placeholder="Введите комментарий" className="px-2 py-2 text-wrap bg-primary rounded-xl border border-accent"></textarea>
            </Section>
        </Flexbox>
    )
}

export default FilmDetailsPage;