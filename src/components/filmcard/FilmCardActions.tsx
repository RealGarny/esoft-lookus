import Flexbox from "../Flexbox"
import Text from "../Text"
import  Button from "../Button"
import { changeTag } from "../../utils/changeTag"
import { useEffect, useState } from "react"
import {setFavoriteFilms, setWatchLaterFilms} from "../../store/filmsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

interface pFilmCardInfo {
    id: number|string,
}

const FilmCardActions:React.FC<pFilmCardInfo> = (props) => {

    if(!props.id) {
        return(<p>FilmCardActions: missing required prop.</p>)
    }
    const {favoriteFilms, watchLaterFilms} = useAppSelector(state => state.films);
    const dispatch = useAppDispatch();

    const [isFavorite, setIsFavorite] = useState(false);
    const [isWatchLater, setIsWatchLater] = useState(false);

    const handleWatchLater = async() => {
        await changeTag("watchLaterFilms", props.id, !isWatchLater, setIsWatchLater)
        .then(result=>dispatch(setWatchLaterFilms(result)));
    }

    const handleFavorite = async() => {
        await changeTag("favoriteFilms", props.id, !isFavorite, setIsFavorite)
        .then(result => dispatch(setFavoriteFilms(result)));
    }

    useEffect(() => {
        setIsFavorite(favoriteFilms.filter(p => p === props.id).length > 0);
        setIsWatchLater(watchLaterFilms.filter(p => p === props.id).length > 0);
    },[favoriteFilms, watchLaterFilms])

    return(
        <Flexbox className=" justify-start">
            <Button onClick={handleFavorite} className={`border ${isFavorite ? "bg-green border-green" : "bg-none border-white"} cursor-pointer rounded-md`}><Text>избранное</Text></Button>
            <Button onClick={handleWatchLater} className={`border ${isWatchLater ? "bg-green border-green" : "bg-none border-white"} cursor-pointer rounded-md`}><Text>посмотреть позже</Text></Button> {/*recreate later as component*/}
        </Flexbox>
    )
}

export default FilmCardActions;