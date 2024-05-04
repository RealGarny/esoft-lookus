import { filmsData, filmTag } from "../store/filmsSlice"
import { SectionProps } from "./Section"
import Section from "./Section"
import Flexbox from "./Flexbox"
import FilmCard from "./filmcard/FilmCard"
import Text from "./Text"
import Button from "./Button"

import routes from "../routes/routes"
import { ActionCreatorWithPayload } from "@reduxjs/toolkit"
import { useAppDispatch } from "../store/hooks"
import { changeTag } from "../utils/changeTag"


interface pTaggedFilmsList extends Omit<SectionProps, "children"> {
    initialData:filmsData[],
    taggedIDs:filmTag,
    tagName:string,
    reducer:ActionCreatorWithPayload<any>
}

const TaggedFilmsList = (props:pTaggedFilmsList) => {

    const dispatch = useAppDispatch();

    const handleDelete = async(id:string|number, reducer:any, local:string) => {
        await changeTag(local, id, false)
        .then(result => dispatch(reducer(result)));
    }

    return(
        <Section header="Избранное" className="flex-col">
            <Flexbox className="flex-col max-h-80 overflow-x-auto">
                {props.initialData.map((film) => {
                    return(
                        props.taggedIDs.map((favFilmId) => {
                            if (film.id === favFilmId) {
                                return(
                                    <FilmCard
                                        key={film.id}
                                        orientation="horizontal"
                                        className="justify-between items-center w-full px-2 py-1"
                                        poster= {<Text url={`${routes.filmsItem.split(":")[0]}${film.id}`} className="font-bold">{film.name}</Text>}
                                        actions={<Button className="h-full" onClick={()=>{handleDelete(film.id, props.reducer, props.tagName)}}><img className="p invert size-5" src="/x.svg"/></Button>}
                                    />
                                )
                            }
                        })
                    )
                })}
            </Flexbox>
        </Section>
    )
}

export default TaggedFilmsList;