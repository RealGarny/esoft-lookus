import Text from "../Text";

interface pFilmsRating {
    rating: number
}

const FilmRating = (props:pFilmsRating) => {
    let bgColor:string = "";

    if(props.rating < 4) bgColor="bg-red"
    else if(4 < props.rating && props.rating < 8) bgColor="bg-yellow"
    else bgColor="bg-green"

    return(
        <div className={`absolute top-3 left-2 px-2 py-1 rounded-md ${bgColor}`}>
            <Text>{props.rating}</Text>
        </div>
    )
}

export default FilmRating;