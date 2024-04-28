import { Link } from "react-router-dom";
import Flexbox from "./Flexbox";
import PosterImage from "./PosterImage";
import Text from "./Text"
import { getFilm } from "../store/filmsSlice";
import { useAppDispatch } from "../store/hooks";
import HeartIcon from "./HeartIcon";
import { useState } from "react";
import routes from "../routes/routes";

interface cardProps {
    data:any,
    isFavourite:boolean,
    isWatchLater:boolean
}

const Card:React.FC<cardProps> = (props) => {
    if(!props.data) {
        return <h1>data was not provided</h1>;
    }

    const filmsItemRoute:string = routes.filmsItem.split(":")[0];
    const [isFavorite, setIsFavorite] = useState(props.isFavourite);
    const [isWatchLater, setIsWatchLater] = useState(props.isWatchLater);

    const handleChangeTag = async(localElement:string, setState:(...args:any)=>void, state:any) => {
        const stateSave = !state;
        let localArray:[] = await JSON.parse(localStorage.getItem(localElement));
        if(localArray === null) {
            localArray = [];
        }
        setState(stateSave)

        if(stateSave) {
            localStorage.setItem(localElement, JSON.stringify([...localArray, props.data.id]))
        } else {
            let temp = localArray.filter(p => p !== props.data.id)
            console.log(temp);
            localStorage.setItem(localElement, JSON.stringify(temp))
        }
    }
    
    return(
        <Flexbox className={`flex-col overflow-hidden group bg-secondary border border-accent rounded-lg max-w-72 ${props.className}`}>
            <div className="relative h-80 overflow-hidden">
                <Link className="cursor-pointer" to={`${filmsItemRoute}${props.data.id}`}>
                <PosterImage posterURL={props.data.poster.url} className="transition duration-700 group-hover:scale-[1.1]"/>
                <span className="absolute top-3 left-2 px-2 py-1 rounded-md bg-green">
                    <Text>{props.data.rating.kp}</Text>
                </span>
                <Text size="md" className="absolute bottom-2 left-2 font-bold">
                    {props.data.name}
                </Text>
                </Link>
            </div>
            <Flexbox className="flex-col px-2 pb-2">
                <Text>{props.data.slogan}</Text>
                <Flexbox className="flex-wrap self-end">
                    <Text>{props.data.ageRate}</Text>
                    <Text>{props.data.year}</Text>
                </Flexbox >
                <Flexbox className="flex-wrap justify-end">
                    <Text onClick={()=>{handleChangeTag("favoriteFilms", setIsFavorite, isFavorite)}} className={`px-2 py-1 border ${isFavorite ? "bg-green border-green" : "bg-none border-white"} cursor-pointer rounded-md`}>избранное</Text>
                    <Text onClick={()=>{handleChangeTag("watchLaterFilms", setIsWatchLater, isWatchLater)}} className={`px-2 py-1 border ${isWatchLater ? "bg-green border-green" : "bg-none border-white"} cursor-pointer rounded-md`}>посмотреть позже</Text> {/*recreate later as component*/}
                </Flexbox>
            </Flexbox>
        </Flexbox>
    )
}
export default Card;