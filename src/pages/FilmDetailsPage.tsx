import { useParams } from "react-router-dom"
import { useAppSelector } from "../store/hooks";

const FilmDetailsPage = () => {
    let { filmId } = useParams();
    const { films } = useAppSelector(state => state.films);

    if(films.length > 0) {
        console.log(films.filter((p:any) => p.id == filmId))
    }

    return(
        <h1>film id: {filmId}</h1>
    )
}

export default FilmDetailsPage;