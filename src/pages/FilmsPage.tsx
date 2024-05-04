import { useSearchParams } from "react-router-dom";
import Section from "../components/Section";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import FilmsList from "../components/FilmsList";
import filter from "../utils/filter";
import { clearFilms, filmsData, setFilms } from "../store/filmsSlice";
import Button from "../components/Button";
import Input from "../components/Input";
import Flexbox from "../components/Flexbox";

const FilmsPage = () => {
    //const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const _initialFilms = useAppSelector(state => state.films._initialFilms)
    const films = useAppSelector(state => state.films.films);

    const [filmName, setFilmName] = useState<string>("");
    const [genre, setGenre] = useState<string>("");

    const handleClear = () => {
        setSearchParams({});
        dispatch(clearFilms());
    }

    const handleChange = (e:React.ChangeEvent<HTMLFormElement>, setState:(...args:any)=>void) => {
        setState(e.target.value);
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchParams({});
        let query:any = {};

        if(filmName.trim() !== "") {
            query.filmName = filmName;
        }
        if(genre.trim() !== "") {
            query.filmGenre = genre;
        }
        setSearchParams(query)
    }

    useEffect(()=>{
        const handleQuery = async() => {
            if(searchParams.size) {
                const FilterByGenreQuery = searchParams.get("filmGenre");
                const FilterByNameQuery = searchParams.get("filmName");
                let filtered:filmsData[] = _initialFilms;
    
                if(FilterByGenreQuery) {
                    await filter.byGenres(FilterByGenreQuery, filtered)
                    .then(r => filtered = r);
                }
    
                if(FilterByNameQuery) {
                    await filter.byName(FilterByNameQuery, filtered)
                    .then(r => filtered = r);
                }
                dispatch(setFilms(filtered));
            }
        }
        handleQuery();
    },[searchParams])

    return(
        <Section header="Поиск фильма" className="py-6">
            <Flexbox className="flex-col">
                <form onSubmit={handleSubmit}>
                    <Flexbox>
                        <Input placeholder="Название фильма" onChange={(e) => {handleChange(e, setFilmName)}}></Input>
                        <Input placeholder="Жанр" onChange={(e) => {handleChange(e, setGenre)}}></Input>
                        <Button className="bg-green px-4 py-2">Поиск</Button>
                    </Flexbox>
                </form>
                <Button className="border border-text" onClick={handleClear}>очистить</Button>
            </Flexbox>
            <FilmsList films={films}/>
        </Section>
    )
}

export default FilmsPage;