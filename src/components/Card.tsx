
import Flexbox from "./Flexbox";
import Text from "./Text"

interface cardProps {
    className?: string,
    posterURL?: string,
    title: string,
    pageURL: string,
}

const Card:React.FC<cardProps> = (props) => {
    if(!props.title) {
        return <h1>title was not provided</h1>;
    }

    return(
        <Flexbox className={`flex-col overflow-hidden bg-secondary border border-accent rounded-lg max-w-72 ${props.className}`}>
            <div className="relative h-32 overflow-hidden">
                <a className="cursor-pointer" href={props.pageURL}>
                {
                    props.posterURL && typeof(props.posterURL === "string")
                    && <img alt="card-image" className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" src={props.posterURL}/>
                }
                <Text size="md" className="absolute bottom-2 left-2 font-bold">
                    {props.title}
                </Text>
                </a>
            </div>
            <Flexbox className="flex-wrap px-2 py-2">
                <span className="px-2 py-1 rounded-md bg-green">
                    <Text>5.8</Text>
                </span>
                <Text>6+</Text>
                <Text>2013</Text>
            </Flexbox >
        </Flexbox>
    )
}
export default Card;