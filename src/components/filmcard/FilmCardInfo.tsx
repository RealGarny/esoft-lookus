import Text from "../Text"
import Flexbox from "../Flexbox"

interface pFilmCardInfo {
    slogan:string,
    shortDescrition:string
    ageRate:string,
    year:string
}

const FilmCardInfo:React.FC<pFilmCardInfo> = (props) => {
    return(
        <>
            <Text>{props.slogan && props.slogan !== "" ? props.slogan : props.shortDescrition}</Text>
            <Flexbox className="flex-wrap self-end">
                <Text>{props.ageRate}+</Text>
                <Text>{props.year}</Text>
            </Flexbox >
        </>
    )
}

export default FilmCardInfo;