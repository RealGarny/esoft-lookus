import Flexbox from "../components/Flexbox";
import Text from "../components/Text";
import Card from "../components/Card";
import { useAppSelector } from "../store/hooks";

const MainPage = () => {
    const { films, favoriteFilms, watchLaterFilms } = useAppSelector((state) => state.films);

    return(
        <Flexbox className="py-6 px-0 md:px-6 flex-col">
            <Text url="#" size="lg" className="font-semibold">Популярные фильмы</Text>
            <Text size="md" className="font-semibold">Фильтры</Text>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {films.map((film) => {
                    return(
                    <Card
                        key={film.id}
                        data = {film}
                        isFavourite = {favoriteFilms.filter(p => p === film.id).length > 0}
                        isWatchLater = {watchLaterFilms.filter(p => p === film.id).length > 0}
                    />
                    )
                })}
            </div>
        </Flexbox>
    )
}

export default MainPage