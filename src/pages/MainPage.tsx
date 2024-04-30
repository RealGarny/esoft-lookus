import Text from "../components/Text";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import filmSort from "../utils/filmSort";
import { useSearchParams } from "react-router-dom";
import FilmCardPoster from "../components/filmcard/FilmCardPoster";
import FilmCard from "../components/filmcard/FilmCard";
import FilmCardInfo from "../components/filmcard/FilmCardInfo";
import FilmCardActions from "../components/filmcard/FilmCardActions";
import Section from "../components/Section";
import Flexbox from "../components/Flexbox";
import { useEffect } from "react";
import Button from "../components/Button";
import { clearFilms, setFilms } from "../store/filmsSlice";

const MainPage = () => {
    const _initialFilms = useAppSelector((state) => state.films._initialFilms);
    const films = useAppSelector((state) => state.films.films);
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    const [sortRating, setSortRating] = useState<number>(searchParams.get("byRating") ? searchParams.get("byRating") : 0); // 0-unassigned, 1-asc, 2-desc
    const sortRatingLabels:string[]  = ["сортировать по рейтингу", "рейтинг по возрастанию", "рейтинг по убыванию"]

    const strChange = (actual:number, setState:any, labels:string[]):void|null => {
        if(typeof(actual) !== "number") return null;

        let index:number = actual;

        if(actual < labels.length - 1) {
          index+=1;
        }
        else {
          index = 0;
        }
        setState(index)
    }

    const handleSortByRating = (type:number) => {
        strChange(sortRating, setSortRating, sortRatingLabels)
        const value:string = "byRating"

        switch(type) {
            case 0:
                setSearchParams({[value]: 0})
                break;
            case 1:
                setSearchParams({[value]: 1})
                break;
            case 2:
                setSearchParams({[value]: 2})
                break;
            default:
                setSearchParams({[value]: 0})
        }
    }

    useEffect(() => {
        const sortByRating = async() => {
            const tempRatingSort = searchParams.get("byRating");

            switch (tempRatingSort) {
                case "1":
                    await filmSort.byRating(_initialFilms, "asc")
                    .then(result => dispatch(setFilms(result)));
                    break;
                case "2":
                    await filmSort.byRating(_initialFilms, "desc")
                    .then(result => dispatch(setFilms(result)));
                    break;
                default:
                    dispatch(clearFilms())
            }
        }
        sortByRating();
    },[searchParams])

    return(
        <Section header="Популярные фильмы" headerSize="lg" className="py-6">
            <Flexbox>
                <Button onClick={()=>{handleSortByRating(sortRating)}}>
                    {sortRatingLabels[sortRating]}
                </Button>
            </Flexbox>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {films.map((film) => {
                    return(
                    <FilmCard
                        className="overflow-hidden max-w-72"
                        orientation="vertical"
                        key={film.id}
                        poster = {<FilmCardPoster rating={film.rating.kp} id={film.id} name={film.name} posterURL={film.poster.url}/>}
                        info = {<FilmCardInfo slogan={film.slogan} shortDescrition={film.shortDescription} ageRate={film.ageRating} year={film.year} />}
                        actions = { <FilmCardActions id={film.id} /> }
                    />
                    )
                })}
            </div>
        </Section>
    )
}

export default MainPage