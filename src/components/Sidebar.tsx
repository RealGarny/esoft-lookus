import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import FilmCard from "./filmcard/FilmCard";
import Flexbox from "./Flexbox";
import Text from "./Text";
import routes from "../routes/routes";
import Section from "./Section";
import { changeTag } from "../utils/changeTag";
import { setFavoriteFilms, setWatchLaterFilms } from "../store/filmsSlice";
import Button from "./Button";

interface SidebarProps {
    isSidebar:boolean
}

const Sidebar = ({isSidebar}:SidebarProps) => {

    const favoriteFilms = useAppSelector(state => state.films.favoriteFilms);
    const _initialFilms = useAppSelector(state => state.films._initialFilms);
    const watchLaterFilms = useAppSelector(state => state.films.watchLaterFilms);

    const dispatch = useAppDispatch();

    const handleDelete = async(id:string|number, reducer:any, local:string) => {
        await changeTag(local, id, false)
        .then(result => dispatch(reducer(result)));
    }
    
    //need to decompose later on
    return(
    <Flexbox className={`${isSidebar ? "" : "translate-x-[-100%]"} border-r border-accent w-full md:w-80 transition-all md:block fixed left-0 z-20 flex-col h-screen px-4 py-4 w-25 bg-primary`}>
        {favoriteFilms.length < 1 && watchLaterFilms.length < 1 ? <Text>Здесь воздух гуляет...</Text>
        :
        <Flexbox className="flex flex-col">
            {favoriteFilms.length > 0 &&
                <Section header="Избранное" className="flex-col">
                    <Flexbox className="flex-col max-h-80 overflow-x-auto">
                        {_initialFilms.map((film) => {
                            return(
                                favoriteFilms.map((favFilmId) => {
                                    if (film.id === favFilmId) {
                                        return(
                                            <FilmCard
                                                key={film.id}
                                                orientation="horizontal"
                                                className="justify-between align-middle w-full px-2 py-1"
                                                poster= {<Link to={`${routes.filmsItem.split(":")[0]}${film.id}`} className="flex flex-col justify-center"><Text className="font-bold">{film.name}</Text></Link>}
                                                actions={<Button className="h-full" onClick={()=>{handleDelete(film.id, setFavoriteFilms, "favoriteFilms")}}><img className="p invert size-5" src="/x.svg"/></Button>}
                                            />
                                        )
                                    }
                                })
                            )
                        })}
                    </Flexbox>
                </Section>
            }
            {watchLaterFilms.length > 0 &&
                <Section header="Посмотреть позже">
                    <Flexbox className="flex-col max-h-80 overflow-x-auto">
                        {_initialFilms.map((film) => {
                            return(
                                watchLaterFilms.map((laterFilmId) => {
                                    if (film.id === laterFilmId) {
                                        return(
                                            <FilmCard
                                                key={film.id}
                                                orientation="horizontal"
                                                className="flex-1 max-h-auto px-1 py-1"
                                                poster= {<Link to={`${routes.filmsItem.split(":")[0]}${film.id}`}><Text className="font-bold">{film.name}</Text></Link>}
                                                actions={<Button onClick={()=>{handleDelete(film.id, setWatchLaterFilms, "watchLaterFilms")}}><img className="filter invert" src="/x.svg"/></Button>}
                                            />
                                        )
                                    }
                                })
                            )
                        })}
                    </Flexbox>
                </Section>
            }
        </Flexbox>
        }
    </Flexbox>
    )
}

export default Sidebar;