import { useAppSelector } from "../store/hooks";
import Flexbox from "./Flexbox";
import Text from "./Text";
import { setFavoriteFilms, setWatchLaterFilms } from "../store/filmsSlice";
import TaggedFilmsList from "./TaggedFilmsList";

interface SidebarProps {
    isSidebar:boolean
}

const Sidebar = ({isSidebar}:SidebarProps) => {

    const favoriteFilms = useAppSelector(state => state.films.favoriteFilms);
    const _initialFilms = useAppSelector(state => state.films._initialFilms);
    const watchLaterFilms = useAppSelector(state => state.films.watchLaterFilms);
    
    //need to decompose later on
    return(
    <Flexbox className={`${isSidebar ? "" : "translate-x-[-100%]"} border-r border-accent w-full md:w-80 transition-all md:block fixed left-0 z-20 flex-col h-screen px-4 py-4 w-25 bg-primary`}>
        {favoriteFilms.length < 1 && watchLaterFilms.length < 1 ? <Text>Здесь воздух гуляет...</Text>
        :
        <Flexbox className="flex flex-col">
            {favoriteFilms.length > 0 &&
                <TaggedFilmsList
                    initialData={_initialFilms}
                    taggedIDs={favoriteFilms}
                    tagName="favoriteFilms"
                    reducer={setFavoriteFilms}
                />
            }
            {watchLaterFilms.length > 0 &&
                <TaggedFilmsList
                    initialData={_initialFilms}
                    taggedIDs={watchLaterFilms}
                    tagName="watchLaterFilms"
                    reducer={setWatchLaterFilms}
                />
            }
        </Flexbox>
        }
    </Flexbox>
    )
}

export default Sidebar;