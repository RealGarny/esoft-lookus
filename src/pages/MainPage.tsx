import Flexbox from "../components/Flexbox"
import Text from "../components/Text"
import Card from "../components/Card"
import filmsAPI from "../data/filmsAPI.json";
import routes from "../routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFilms } from "../store/filmsSlice";

const MainPage = () => {

    const filmsItemRoute:string = routes.filmsItem.split(":")[0];
    const dispatch = useDispatch();
    const {films, loading, error} = useSelector(state => state.films);

    useEffect(()=> {
        dispatch(fetchFilms());
    },[])

    if(loading) {
        return <h1>loading</h1>
    }

    if(error) {
        return <h1>error</h1>
    }

    return(
        <Flexbox className="px-12 py-6 flex-col">
            <Text url="#" size="lg" className="font-semibold">Популярные фильмы</Text>
            <Text size="md" className="font-semibold">Фильтры</Text>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {films.map((film) => {
                    return(
                    <Card
                        key={film.id}
                        pageURL={`${filmsItemRoute}${film.id}`}
                        posterURL={film.poster.url}
                        title={film.name}
                        rating={film.rating.kp}
                        ageRate={`${film.ageRating}+`}
                        slogan={film.slogan}
                        year={film.year}
                    />
                    )
                })}
            </div>
        </Flexbox>
    )
}

export default MainPage