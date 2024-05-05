import Button from "../Button"
import { Link } from "react-router-dom"
import routes from "../../routes/routes"

interface pFilmGenreItem {
    name:string,
    bgColor:string
}

const FilmGenreItem = (props:pFilmGenreItem) => {
    return(
        <Link key={props.name} to={`${routes.films}/?filmGenre=${props.name}`}>
            <Button className={`${props.bgColor ? props.bgColor : "bg-primary"} px-2`}>{props.name}</Button>
        </Link>
    )
}

export default FilmGenreItem