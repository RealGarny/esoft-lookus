import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getFilm, setFilmComments } from "../store/filmsSlice";
import { useEffect, useState } from "react";
import Flexbox from "../components/Flexbox";
import Text from "../components/Text";
import PosterImage from "../components/PosterImage";
import Section from "../components/Section";
import FilmCard from "../components/filmcard/FilmCard";
import FilmCardPoster from "../components/filmcard/FilmCardPoster";
import Button from "../components/Button";

const FilmDetailsPage = () => {
    let { filmId } = useParams();
    const { selectedFilm, _initialFilms, filmComments } = useAppSelector(state => state.films);
    const comments = filmComments.filter(film => film.filmId === filmId);
    const [comment, setComment] = useState<string>("");
    const dispatch = useAppDispatch();
    const handleChange = (e:React.ChangeEvent) => {
        setComment(e.target.value)
    }
    console.log(comments)
    const handleSubmit = (e:React.KeyboardEvent) => {
        if(e.key === "Enter") {
            e.preventDefault();
            dispatch(setFilmComments({
                filmId:filmId!,
                comments:[
                    {
                        id: comments.length > 0 ? comments[0].comments.length : 0,
                        date: Date(),
                        body: comment,
                        creator: "Anonymous"
                    }
                ]
            }))
            setComment("");
        }
    }

    const handleTest = () => {
        console.log(filmComments)
    }

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
                                <Flexbox key={person.id} className="flex-col w-40">
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
                <Flexbox className="flex-col">
                    {comments.map((filmComments) => {
                        return(
                            filmComments.comments.map((comment):React.ReactNode => {
                                return(
                                    <Flexbox key={comment.id} className="justify-start">
                                        <div className="relative bg-secondary size-14 text-center rounded-full overflow-hidden">
                                            <PosterImage className="filter invert" posterURL="/anon.png"></PosterImage>
                                        </div>
                                        <Flexbox className="flex-1 flex-col">
                                            <Flexbox>
                                                <Text>{comment.creator}</Text>
                                                <Text>{comment.date}</Text>
                                            </Flexbox>
                                            <Text className="px-2 py-2 rounded-md bg-secondary">{comment.body}</Text>
                                        </Flexbox>
                                    </Flexbox>
                                )
                            })
                        )
                    })}
                </Flexbox>
                <textarea 
                    placeholder="Введите комментарий"
                    onChange={handleChange}
                    value={comment}
                    onKeyDown={handleSubmit}
                    className="px-2 py-2 min-h-17 text-xl resize-y bg-primary overflow-y-auto text-wrap border border-accent rounded-xl"
                />
                <Button onClick={handleTest} className="bg-green py-4">Отправить</Button>
            </Section>
        </Flexbox>
    )
}

export default FilmDetailsPage;