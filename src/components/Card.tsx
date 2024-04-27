
import Flexbox from "./Flexbox";
import PosterImage from "./PosterImage";
import Text from "./Text"

interface cardProps {
    className?: string,
    posterURL?: string,
    title: string,
    pageURL: string,
    rating?: string,
    ageRate?: string,
    year?: string,
}

const Card:React.FC<cardProps> = (props) => {
    if(!props.title) {
        return <h1>title was not provided</h1>;
    }
    console.log(props.posterURL)
    
    return(
        <Flexbox className={`flex-col overflow-hidden group bg-secondary border border-accent rounded-lg max-w-72 ${props.className}`}>
            <div className="relative h-36 overflow-hidden">
                <a className="cursor-pointer" href={props.pageURL}>
                <PosterImage posterURL={`${props.posterURL}`} className="transition duration-700 group-hover:scale-[1.4]"/>
                <span className="absolute top-3 left-2 px-2 py-1 rounded-md bg-green">
                    <Text>{props.rating}</Text>
                </span>
                <Text size="md" className="absolute bottom-2 left-2 font-bold">
                    {props.title}
                </Text>
                </a>
            </div>
            <Flexbox className="flex-col px-2 pb-2">
                <Text>{props.tagline}</Text>
                <Flexbox className="flex-wrap">
                    <Text>{props.ageRate}</Text>
                    <Text>{props.year}</Text>
                </Flexbox >
            </Flexbox>
        </Flexbox>
    )
}
export default Card;