import Text from "../Text"
import Flexbox from "../Flexbox"
import Button from "../Button"
import { Link } from "react-router-dom"
import routes from "../../routes/routes"
import FilmGenreItem from "./FilmGenreItem"

interface pFilmCardInfo {
    slogan:string,
    shortDescrition:string
    ageRate:number,
    year:number,
    genres:any[]
}

const FilmCardInfo:React.FC<pFilmCardInfo> = (props) => {
    let genres:[React.ReactNode?] = [];
    props.genres
        .slice(0,2)
        .forEach(element => {
            genres.push(
            <FilmGenreItem
                key={element.name}
                name={element.name}
            />)
        })

    return(
        <>
            <Flexbox>
                {genres}
            </Flexbox>
            <Text>{props.slogan && props.slogan !== "" ? props.slogan : props.shortDescrition}</Text>
            <Flexbox className="flex-wrap self-end">
                <Text>{props.ageRate}+</Text>
                <Text>{props.year}</Text>
            </Flexbox >
        </>
    )
}

export default FilmCardInfo;