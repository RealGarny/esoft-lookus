import { useAppSelector } from "../store/hooks";
import Card from "./FilmCard";
import Flexbox from "./Flexbox";
import Text from "./Text";

interface SidebarProps {
    isSidebar:boolean
}

const Sidebar = ({isSidebar}:SidebarProps) => {

    const {_initialFilms, watchLaterFilms, favoriteFilms} = useAppSelector(state => state.films);

    return(
    <Flexbox className={`${isSidebar ? "" : "translate-x-[-100%]"} w-full md:w-80 transition-all md:block fixed left-0 z-20 flex-col h-screen px-4 py-4 w-25 bg-primary`}>
        <Flexbox className="flex flex-col">
            <Flexbox className="flex-col ">
                <Text size="md">
                    Избранное
                </Text>
                <Flexbox className="flex-col">
                    {_initialFilms.map((film) => {
                        return(
                            favoriteFilms.map((favFilmId) => {
                                if (film.id === favFilmId) {
                                    return(
                                        <h1>test</h1>
                                    )
                                }
                            })
                        )
                    })}
                </Flexbox>
            </Flexbox>
            <Flexbox>
                <Text size="md">
                    Посмотреть позже
                </Text>
            </Flexbox>
        </Flexbox>
    </Flexbox>
    )
}

export default Sidebar;