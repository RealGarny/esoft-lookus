import Flexbox from "../Flexbox";
import Card from "../Card";
import { memo } from "react";

interface filmCardProps {
    poster?: React.ReactNode,
    info?: React.ReactNode,
    actions?: React.ReactNode,
    orientation?: "vertical" | "horizontal",
}

const FilmCard:React.FC<filmCardProps> = (props) => {

    return(
        <Card className="min-w-40 max-w-72">
                {props.poster}
            <Flexbox className="flex-col px-2 pb-2">
                {props.info}
                {props.actions}
            </Flexbox>
        </Card>
    )
}
export default FilmCard;