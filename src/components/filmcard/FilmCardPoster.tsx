import { Link } from "react-router-dom"
import CenteredImg from "../CenteredImg"
import Text from "../Text"
import routes from "../../routes/routes"
import FilmRating from "./FilmRating"

interface pCardPoster {
    id: number,
    posterURL: string,
    name: string,
    rating: number
}

const FilmCardPoster:React.FC<pCardPoster> = (props) => {
    const filmsItemRoute:string = routes.filmsItem.split(":")[0];

    return(
        <div className="relative h-80 overflow-hidden">
            <Link className="cursor-pointer" to={`${filmsItemRoute}${props.id}`}>
                <CenteredImg posterURL={props.posterURL} className="transition duration-700 group-hover:scale-[1.1]"/>
                <div className="absolute left-[-30%] bottom-[-30%] group-hover:scale-[2] duration-700 bg-black rounded-full blur-2xl bg-opacity-60 size-60 "></div>
                <Text size="md" className="absolute bottom-2 left-2 font-bold">
                    {props.name}
                </Text>
                {props.rating &&
                    <FilmRating rating={props.rating}/>
                }
            </Link>
        </div>
    )
}

export default FilmCardPoster;