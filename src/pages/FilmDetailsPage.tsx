import { useParams } from "react-router-dom"

const FilmDetailsPage = () => {
    let { filmId } = useParams();

    return(
        <h1>film id: ${filmId}</h1>
    )
}

export default FilmDetailsPage;