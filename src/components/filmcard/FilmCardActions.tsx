import Flexbox from "../Flexbox"
import  Button from "../Button"
import { changeTag } from "../../utils/changeTag"
import { useState } from "react"
import {setFavoriteFilms, setWatchLaterFilms} from "../../store/filmsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

interface pFilmCardInfo {
    id: number|string,
}

const FilmCardActions:React.FC<pFilmCardInfo> = (props) => {

    if(!props.id ) {
        return(<p>FilmCardActions: missing required prop.</p>)
    }
    const {favoriteFilms, watchLaterFilms} = useAppSelector(state => state.films);
    const dispatch = useAppDispatch();

    const [isFavorite, setIsFavorite] = useState(favoriteFilms.filter(p => p === props.id).length > 0);
    const [isWatchLater, setIsWatchLater] = useState(watchLaterFilms.filter(p => p === props.id).length > 0);

    const handleFavorite = async() => {
        await changeTag("favoriteFilms", props.id, setIsFavorite, isFavorite)
        .then(result=>dispatch(setWatchLaterFilms(result)));
    }

    const handleWatchLater = async() => {
        await changeTag("watchLaterFilms", props.id, setIsWatchLater, isWatchLater)
        .then(result => dispatch(setFavoriteFilms(result)));
    }

    return(
        <Flexbox className="flex-wrap justify-end">
            <Button onClick={handleFavorite} className={`px-2 py-1 border ${isFavorite ? "bg-green border-green" : "bg-none border-white"} cursor-pointer rounded-md`}>избранное</Button>
            <Button onClick={handleWatchLater} className={`px-2 py-1 border ${isWatchLater ? "bg-green border-green" : "bg-none border-white"} cursor-pointer rounded-md`}>посмотреть позже</Button> {/*recreate later as component*/}
        </Flexbox>
    )
}

export default FilmCardActions;