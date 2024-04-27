import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";

const FilmDetailsPage = () => {
    let { filmId } = useParams();
    const {films, loading, error} = useSelector(state => state.films);
    console.log(films)
    return(
        <h1>film id: ${filmId}</h1>
    )
}

export default FilmDetailsPage;