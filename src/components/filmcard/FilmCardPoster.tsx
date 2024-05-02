import { Link } from "react-router-dom"
import PosterImage from "../PosterImage"
import Text from "../Text"
import routes from "../../routes/routes"

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
                <PosterImage posterURL={props.posterURL} className="transition duration-700 group-hover:scale-[1.1]"/>
                <Text size="md" className="absolute bottom-2 left-2 font-bold">
                    {props.name}
                </Text>
                {props.rating &&
                    <span className="absolute top-3 left-2 px-2 py-1 rounded-md bg-green">
                        <Text>{props.rating}</Text>
                    </span>
                }
            </Link>
        </div>
    )
}

export default FilmCardPoster;