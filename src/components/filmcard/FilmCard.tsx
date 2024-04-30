import Flexbox from "../Flexbox";
import Card from "../Card";

interface filmCardProps {
    className?: string,
    poster?: React.ReactNode,
    info?: React.ReactNode,
    actions?: React.ReactNode,
    other?: React.ReactNode,
    orientation?: "vertical" | "horizontal",
}

const FilmCard:React.FC<filmCardProps> = (props) => {

    let orientation:string = "";

    if(props.orientation) {
        switch(props.orientation) {
            case "vertical" :
                orientation = "flex-col";
                break;
            case "horizontal":
                orientation = "flex-row";
                break;
            default:
                orientation = "flex-row";
        }
    }

    return(
        <Card className={`min-w-40 ${props.orientation && orientation} ${props.className && props.className}`}>
            {props.poster}
            <Flexbox className={`${props.poster && props.orientation ==="vertical" ? "px-2 pb-2" : ""} flex-col`}>
                {props.info}
                {props.actions}
            </Flexbox>
            {props.other}
        </Card>
    )
}
export default FilmCard;